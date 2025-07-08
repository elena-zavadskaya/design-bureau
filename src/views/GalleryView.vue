<template>
  <div class="gallery-page">
    <!-- Заголовок с фоновым изображением галереи -->
    <section class="page-header-bg">
      <div class="page-header">
        <h1>Галерея E.S.S.E. Art & Poster</h1>
      </div>
    </section>

    <!-- Основной контент -->
    <section class="gallery-content">
      <div class="container">
        <!-- Введение с двумя колонками -->
        <div class="intro-section">
          <div class="intro-text">
            <p>За более 15 лет нашей работы декораторами мы украсили картинами так много стен, что решили сделать это нашей отдельной профессией. В нашей онлайн-галерее E.S.S.E. Art & Poster вы найдёте доступные по цене произведения искусства, необычные постеры и высококачественные репродукции старинных гравюр и литографий.</p>
            
            <p>Мы любим искусство и постоянно пополняем наши коллекции недорогими, но эффектными работами, которые подойдут как для частных интерьеров, так и для оформления:</p>
            
            <ul class="minimalist-list">
              <li>офисов и контор</li>
              <li>жилых комплексов</li>
              <li>гостиниц</li>
              <li>кафе и ресторанов</li>
              <li>салонов красоты и барбершопов</li>
            </ul>
          </div>
          
          <div class="intro-image">
            <div class="gallery-image-container">
              <img src="@/assets/images/gallery/ess-intro-01.jpg" alt="Основательницы галереи с картинами" class="gallery-image">
            </div>
          </div>
        </div>

        <!-- Коллекции с чередующимися изображениями -->
        <div class="collections">
          <!-- Коллекция 1 -->
          <div class="collection-card">
            <div class="collection-image left">
              <div class="gallery-image-container">
                <img src="@/assets/images/gallery/ess-old-01.jpg" alt="Репродукция старинной гравюры" class="gallery-image">
              </div>
            </div>
            
            <div class="collection-content">
              <div class="collection-header">
                <h2>Репродукции старинных гравюр</h2>
              </div>
              <p>Напечатанные на итальянской акварельной бумаге. Сюжеты на любой вкус: цветы, птицы, пейзажи, виды Москвы и Петербурга, виды старинных библиотек, военная форма Российской империи и огромное количество других тем.</p>
            </div>
          </div>
          
          <!-- Коллекция 2 -->
          <div class="collection-card reverse">
            <div class="collection-content">
              <div class="collection-header">
                <h2>Эстампы советских художников</h2>
              </div>
              <p>Вторая половина XX века. Это удивительные, ни на что не похожие работы, которые мы открыли для себя и с удовольствием открываем для вас.</p>
            </div>
            
            <div class="collection-image right">
              <div class="gallery-image-container">
                <img src="@/assets/images/gallery/ess-soviet-01.jpg" alt="Эстамп советского художника" class="gallery-image">
              </div>
            </div>
          </div>
          
          <!-- Коллекция 3 -->
          <div class="collection-card">
            <div class="collection-image left">
              <div class="gallery-image-container">
                <img src="@/assets/images/gallery/ess-modern-01.jpg" alt="Современный русский художник за работой" class="gallery-image">
              </div>
            </div>
            
            <div class="collection-content">
              <div class="collection-header">
                <h2>Современные русские художники</h2>
              </div>
              <p>Живопись и графика, в том числе эксклюзивные серии специально для нашего магазина.</p>
            </div>
          </div>
        </div>

        <!-- Индивидуальный подбор -->
        <div class="custom-selection">
          <div class="custom-image">
            <div class="gallery-image-container">
              <img src="@/assets/images/gallery/ess-custom-01.jpg" alt="Индивидуальный подбор картин" class="gallery-image">
            </div>
          </div>
          
          <div class="custom-content">
            <h2>Индивидуальный подбор</h2>
            <p>Возможен индивидуальный подбор редких и необычных изображений для вашего интерьера.</p>
            <p>Для уточнения ассортимента и по вопросам приобретения оставьте, пожалуйста, заявку:</p>
            
            <div class="contact-methods">
              <a href="tel:+79152254343" class="contact-link">
                <div class="contact-info">
                  <div class="contact-label">Телефон</div>
                  <div class="contact-value">+7 915 225-43-43</div>
                </div>
              </a>
              
              <a href="https://instagram.com/esse_art_poster" target="_blank" class="contact-link">
                <div class="contact-info">
                  <div class="contact-label">Инстаграм</div>
                  <div class="contact-value">@esse_art_poster</div>
                </div>
              </a>
              
              <a href="https://instagram.com/esse_poster_shop" target="_blank" class="contact-link">
                <div class="contact-info">
                  <div class="contact-label">Каталог</div>
                  <div class="contact-value">@esse_poster_shop</div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </div>
    </section>
  </div>
</template>

<script>
export default {
  name: 'GalleryView',
}
</script>

<style scoped>
/* Общие стили страницы */
.gallery-content {
  padding-bottom: 3rem;
}

.gallery-page {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  color: #000;
  background: #fff;
  overflow-x: hidden;
}

.container {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

/* Заголовок с фоновым изображением */
.page-header-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                  url('@/assets/images/gallery/ess-header-01.jpg');
  background-size: cover;
  background-position: center;
  height: 65vh;
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
}

.page-header {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  color: white;
  padding: 0 1rem;
  width: 100%;
}

.page-header h1 {
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  position: relative;
}

.page-header h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: white;
}

/* Общий класс для всех изображений */
.gallery-image-container {
  position: relative;
  width: 100%;
  overflow: hidden;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  border: 1px solid #f0f0f0;
  transition: all 0.3s ease;
}

.gallery-image-container:hover {
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.12);
}

.gallery-image {
  width: 100%;
  height: auto;
  display: block;
  aspect-ratio: 16/9; /* Соотношение сторон */
  object-fit: cover;
  transition: all 0.5s ease;
}

.gallery-image-container:hover .gallery-image {
  transform: scale(1.03);
}

/* Введение */
.intro-section {
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
}

.intro-text {
  flex: 1;
  font-size: 1.1rem;
  line-height: 1.8;
  color: #444;
}

.intro-image {
  flex: 1;
  position: relative;
}

.minimalist-list {
  padding-left: 0;
  margin: 1.5rem 0;
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 0.5rem;
}

.minimalist-list li {
  position: relative;
  padding-left: 1.2rem;
  margin-bottom: 0.8rem;
  line-height: 1.7;
  color: #444;
  list-style: none;
}

.minimalist-list li::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.7rem;
  width: 6px;
  height: 1px;
  background: #000;
}

/* Коллекции */
.collections {
  margin-bottom: 4rem;
}

.collection-card {
  display: flex;
  gap: 3rem;
  margin-bottom: 4rem;
  align-items: center;
}

.collection-card.reverse {
  flex-direction: row-reverse;
}

.collection-image {
  flex: 1;
}

.collection-content {
  flex: 1;
}

.collection-header {
  margin-bottom: 1.2rem;
  position: relative;
  padding-left: 1.5rem;
}

.collection-header::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.9rem;
  width: 8px;
  height: 8px;
  background: #000;
}

.collection-card h2 {
  font-size: 1.6rem;
  font-weight: 400;
  color: #000;
  margin: 0;
}

.collection-card p {
  line-height: 1.8;
  color: #444;
  font-weight: 300;
  padding-left: 1.5rem;
}

/* Индивидуальный подбор */
.custom-selection {
  display: flex;
  gap: 3rem;
  padding-top: 3rem;
  border-top: 1px solid #000;
}

.custom-image {
  flex: 1;
}

.custom-content {
  flex: 1;
}

.custom-content h2 {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1.5rem;
  position: relative;
}

.custom-content p {
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
}

.contact-methods {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 1rem;
  margin-top: 2rem;
}

.contact-link {
  display: block;
  padding: 1.2rem 0;
  text-decoration: none;
  color: inherit;
  transition: all 0.3s ease;
  position: relative;
}

.contact-link::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #eee;
  transition: all 0.3s ease;
}

.contact-link:hover::after {
  background: #000;
}

.contact-info {
  position: relative;
  padding-left: 1.2rem;
}

.contact-info::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0.5rem;
  width: 6px;
  height: 1px;
  background: #000;
}

.contact-label {
  font-size: 0.85rem;
  color: #777;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  margin-bottom: 0.2rem;
}

.contact-value {
  font-size: 1.1rem;
  font-weight: 500;
  color: #000;
  transition: color 0.3s ease;
}

.contact-link:hover .contact-value {
  color: #555;
}

/* Адаптивность */
@media (max-width: 992px) {
  .gallery-content {
    padding-right: 3rem;
  }

  .intro-section,
  .collection-card,
  .custom-selection {
    flex-direction: column;
    gap: 2rem;
  }
  
  .collection-card.reverse {
    flex-direction: column;
  }
  
  .gallery-image {
    aspect-ratio: 4/3; /* Более квадратное соотношение на планшетах */
  }
}

@media (max-width: 768px) {
  .gallery-content {
    padding-right: 3rem;
  }

  .page-header-bg {
    height: 50vh;
  }
  
  .page-header h1 {
    font-size: 2.2rem;
  }
  
  .minimalist-list {
    grid-template-columns: 1fr;
  }
}

@media (max-width: 480px) {
  .gallery-content {
    padding-right: 3rem;
  }

  .page-header-bg {
    height: 40vh;
  }
  
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .contact-methods {
    grid-template-columns: 1fr;
  }
  
  .collection-card p {
    padding-left: 0;
  }
  
  .gallery-image {
    aspect-ratio: 1/1; /* Квадратное соотношение на мобильных */
  }
  
  /* Убедимся, что изображения не выходят за пределы экрана */
  .gallery-image-container {
    max-width: 100%;
    overflow: hidden;
  }
  
  /* Увеличим отступы для лучшей читаемости */
  .intro-section,
  .collection-card,
  .custom-selection {
    gap: 1.5rem;
  }
}
</style>