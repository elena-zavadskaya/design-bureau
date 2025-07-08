<template>
  <div class="project-detail">
    <div class="container">
      <div class="row">
        <div class="col-12 mb-5">
          <RouterLink 
            to="/projects" 
            class="back-button d-inline-flex align-items-center text-decoration-none mb-4"
          >
            <i class="bi bi-arrow-left me-2"></i> Назад к проектам
          </RouterLink>
          <h1 class="display-5 fw-normal mb-3">{{ project.title }}</h1>
          <p class="text-muted mb-4">{{ project.subtitle || 'Дизайн-проект' }}</p>
          <div class="divider mb-4"></div>
        </div>
      </div>

      <div class="row mb-5 d-flex align-items-stretch">
        <div class="col-12 col-lg-7 mb-4 mb-lg-0">
          <div class="main-image-container position-relative overflow-hidden" style="height: 500px">
            <img 
              :src="getImageUrl('main.jpg', 1200)" 
              :alt="project.title" 
              class="w-100 h-100 object-fit-cover"
              @click="openModal(getImageUrl('main.jpg', 1200))"
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
          <div class="task-content">
            <h3 class="section-title">Задача клиента</h3>
            <p class="mb-0">{{ project.task || 'Информация уточняется' }}</p>
          </div>
        </div>
      </div>

      <div class="row mb-5">
        <div class="col-12">
          <div class="solution-content">
            <h3 class="section-title">Решение</h3>
            <p class="mb-0">{{ project.solution || 'Информация уточняется' }}</p>
          </div>
        </div>
      </div>

      <div class="row" v-if="project.imagesCount > 0">
        <div class="col-12 mb-5">
          <h2 class="h4 fw-normal mb-4 text-uppercase letter-spacing">Галерея проекта</h2>
          <div class="divider mb-4"></div>
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
                  @click="openModal(getImageUrl(`gallery-${i}.jpg`, 1200), i)"
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
    <div v-if="showModal" class="modal-overlay" @click.self="closeModal">
      <button class="nav-button left" @click.stop="prevImage">&#10094;</button>
      <img :src="modalImageSrc" alt="Просмотр изображения" class="modal-image" />
      <button class="nav-button right" @click.stop="nextImage">&#10095;</button>
      <button class="close-button" @click="closeModal">&times;</button>
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
      galleryImagesLoaded: {},
      showModal: false,
      modalImageSrc: '',
      currentImageIndex: null, 
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
    },
    openModal(imageUrl, index = null) {
      this.modalImageSrc = imageUrl;
      this.currentImageIndex = index;
      this.showModal = true;
    },
    closeModal() {
      this.showModal = false;
      this.modalImageSrc = '';
    },
    prevImage() {
      if (this.currentImageIndex && this.currentImageIndex > 1) {
        this.currentImageIndex--;
        this.modalImageSrc = this.getImageUrl(`gallery-${this.currentImageIndex}.jpg`, 1200);
      }
    },
    nextImage() {
      if (this.currentImageIndex && this.currentImageIndex < this.project.imagesCount) {
        this.currentImageIndex++;
        this.modalImageSrc = this.getImageUrl(`gallery-${this.currentImageIndex}.jpg`, 1200);
      }
    }
  }
}
</script>

<style scoped>
.project-detail {
  padding-top: 6rem;
  padding-bottom: 4rem;
}

.back-button {
  color: #333;
  font-weight: 400;
  transition: all 0.3s ease;
  padding: 0.25rem 0;
  position: relative;
  font-size: 0.95rem;
}

.back-button:hover {
  color: #000;
}

.back-button i {
  transition: transform 0.3s ease;
}

.back-button:hover i {
  transform: translateX(-3px);
}

h1 {
  font-weight: 400;
  letter-spacing: -0.015em;
}

.divider {
  height: 1px;
  background: rgba(0,0,0,0.05);
  width: 100%;
}

.letter-spacing {
  letter-spacing: 0.1em;
}

/* Стили для секций */
:deep(.section-title) {
  position: relative;
  display: inline-block;
  padding-bottom: 0.5rem;
  font-weight: 600 !important;
  font-size: 22px !important;
}

.section-title::after {
  content: '';
  position: absolute;
  left: 0;
  bottom: 0;
  width: 50%;
  height: 2px;
  background-color: black;
}

.task-content p, 
.solution-content p {
  line-height: 1.7;
  color: #444;
  font-weight: 300;
}

.main-image-container {
  box-shadow: 0 1px 3px rgba(0,0,0,0.01);
}

.main-image-container img,
.gallery-image img {
  cursor: pointer;
}

.gallery-image {
  transition: transform 0.3s ease;
  box-shadow: 0 1px 2px rgba(0,0,0,0.01);
}

.gallery-image:hover {
  transform: translateY(-3px);
  box-shadow: 0 4px 8px rgba(0,0,0,0.03);
}

.modal-overlay {
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-color: rgba(0,0,0,0.8);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 9999;
}

.modal-image {
  max-width: 90%;
  max-height: 90%;
  object-fit: contain;
  border-radius: 4px;
}

.close-button {
  position: absolute;
  top: 20px;
  right: 30px;
  font-size: 2rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
}

.nav-button {
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  font-size: 2rem;
  color: white;
  background: transparent;
  border: none;
  cursor: pointer;
  padding: 0 10px;
  z-index: 10000;
}

.nav-button.left {
  left: 20px;
}

.nav-button.right {
  right: 20px;
}

@media (max-width: 991px) {
  .task-content {
    padding-top: 2rem;
  }
}

@media (max-width: 767px) {
  .project-detail {
    padding-top: 4rem;
    padding-bottom: 3rem;
    padding-right: 1.5rem;
  }
  
  h1 {
    font-size: 2.2rem;
  }
  
  .main-image-container {
    height: 400px !important;
  }
  
  .section-title {
    font-size: 1.5rem;
  }

  .back-button {
    margin-top: 2rem;
  }
}
</style>