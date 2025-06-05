<template>
  <div class="project-detail">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5">
          <!-- Минималистичная кнопка "Назад к проектам" -->
          <RouterLink 
            to="/projects" 
            class="back-button d-inline-flex align-items-center text-decoration-none mb-4"
          >
            <i class="bi bi-arrow-left me-2"></i> Назад к проектам
          </RouterLink>
          <h1 class="display-4 mb-2">{{ project.title }}</h1>
          <p class="lead text-muted mb-4">Краткое описание проекта</p>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-12 col-lg-7 mb-5 mb-lg-0">
          <div class="main-image-container position-relative overflow-hidden" style="height: 500px">
            <img 
              :src="getImageUrl('main.jpg', 1200)" 
              :alt="project.title" 
              class="w-100 h-100 object-fit-cover"
              @load="mainImageLoaded = true"
            />
            <div v-if="!mainImageLoaded" class="image-placeholder position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
              <div class="spinner-border text-secondary" role="status">
                <span class="visually-hidden">Загрузка...</span>
              </div>
            </div>
          </div>
        </div>
        <div class="col-12 col-lg-5">
          <!-- Правый блок с фиксированной высотой -->
          <div class="description-container bg-light p-4 h-100">
            <h3 class="mb-4">Задача клиента</h3>
            <p class="mb-4">Подробное описание задачи, которую поставил клиент перед дизайнерами.</p>

            <h3 class="mb-4">Решение</h3>
            <p>Описание того, как дизайнеры решили поставленную задачу.</p>
          </div>
        </div>
      </div>

      <div class="row" v-if="project.imagesCount > 0">
        <div class="col-12 mb-5">
          <h2 class="mb-4">Галерея проекта</h2>
          <div class="row g-3">
            <div 
              class="col-6 col-md-4 col-lg-3" 
              v-for="i in project.imagesCount" 
              :key="i"
            >
              <div class="gallery-image position-relative overflow-hidden" style="height: 200px">
                <img 
                  :src="getImageUrl(`gallery-${i}.jpg`, 800)" 
                  :alt="`${project.title} - Фото ${i}`"
                  class="w-100 h-100 object-fit-cover"
                  loading="lazy"
                  @load="galleryImagesLoaded[i] = true"
                />
                <div v-if="!galleryImagesLoaded[i]" class="image-placeholder position-absolute top-0 start-0 w-100 h-100 d-flex align-items-center justify-content-center">
                  <div class="spinner-border spinner-border-sm text-secondary" role="status">
                    <span class="visually-hidden">Загрузка...</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { allProjects } from '@/data/homeData'

export default {
  name: 'ProjectDetail',
  data() {
    return {
      project: null,
      mainImageLoaded: false,
      galleryImagesLoaded: {}
    }
  },
  created() {
    const projectId = parseInt(this.$route.params.id)
    this.project = allProjects.find(p => p.id === projectId) || {}

    if (this.project.imagesCount > 0) {
      const loadedStates = {}
      for (let i = 1; i <= this.project.imagesCount; i++) {
        loadedStates[i] = false
      }
      this.galleryImagesLoaded = loadedStates
    }
  },
  methods: {
    getImageUrl(filename, size = 800, format = 'webp') {
      const baseName = filename.replace(/\.\w+$/, '')
      return `/images/optimized/projects/project-${this.project.id}/${baseName}-${size}w.${format}`
    }
  }
}
</script>

<style scoped>
.project-detail {
  padding-top: 6rem;
  padding-bottom: 4rem;
}

/* Стили для минималистичной кнопки "Назад" */
.back-button {
  color: #000; /* Черный цвет текста */
  font-weight: 500;
  transition: all 0.2s ease;
  padding: 0.25rem 0;
  position: relative;
}

.back-button:after {
  content: '';
  position: absolute;
  bottom: 0;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #000;
  transition: width 0.3s ease;
}

.back-button:hover {
  color: #333; /* Темно-серый при наведении */
}

.back-button:hover:after {
  width: 100%;
}

.back-button i {
  transition: transform 0.3s ease;
}

.back-button:hover i {
  transform: translateX(-4px);
}

/* Выравнивание высоты блоков */
.description-container {
  height: 500px; /* Такая же высота как у основного изображения */
}

@media (max-width: 991px) {
  .description-container {
    height: auto; /* На планшетах и мобильных - авто высота */
    min-height: 400px;
  }
}

@media (max-width: 767px) {
  .project-detail {
    padding-top: 4rem;
    padding-bottom: 3rem;
  }
}
</style>
