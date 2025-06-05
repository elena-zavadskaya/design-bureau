const sharp = require('sharp');
const fs = require('fs');
const path = require('path');
const { promisify } = require('util');

const readdir = promisify(fs.readdir);
const stat = promisify(fs.stat);
const mkdir = promisify(fs.mkdir);

const inputDir = path.join(__dirname, '../public/images/projects');
const outputDir = path.join(__dirname, '../public/images/optimized/projects');

async function processDirectory(dirPath, relativePath = '') {
  const outputPath = path.join(outputDir, relativePath);
  await mkdir(outputPath, { recursive: true });
  
  const items = await readdir(dirPath);
  
  for (const item of items) {
    const itemPath = path.join(dirPath, item);
    const itemRelativePath = path.join(relativePath, item);
    const itemStat = await stat(itemPath);
    
    if (itemStat.isDirectory()) {
      await processDirectory(itemPath, itemRelativePath);
    } else if (/\.(jpg|jpeg|png)$/i.test(item)) {
      await processImage(itemPath, path.join(outputPath, item));
    }
  }
}

async function processImage(inputPath, outputPath) {
  const baseName = path.basename(inputPath, path.extname(inputPath));
  const outputDir = path.dirname(outputPath);
  
  try {
    // Создаем директорию, если не существует
    await mkdir(outputDir, { recursive: true });
    
    const sizes = [400, 800, 1200];
    const formats = [
      { ext: '.jpg', options: { quality: 80 } },
      { ext: '.webp', options: { quality: 75 } }
    ];
    
    // Генерируем изображения для всех размеров и форматов
    for (const size of sizes) {
      for (const format of formats) {
        const outputFile = path.join(outputDir, `${baseName}-${size}w${format.ext}`);
        
        await sharp(inputPath)
          .resize({ 
            width: size,
            withoutEnlargement: true 
          })
          .toFormat(format.ext.replace('.', ''), format.options)
          .toFile(outputFile);
      }
    }
    
    console.log(`✅ Оптимизировано: ${inputPath}`);
    
  } catch (err) {
    console.error(`❌ Ошибка обработки ${inputPath}:`, err);
  }
}

async function run() {
  try {
    console.log('🚀 Начало оптимизации изображений...');
    await processDirectory(inputDir);
    console.log('✅ Все изображения оптимизированы!');
  } catch (err) {
    console.error('❌ Критическая ошибка:', err);
  }
}

run();

