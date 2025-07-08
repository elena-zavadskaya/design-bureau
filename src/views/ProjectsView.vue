<template>
  <div class="projects-view">
    <div class="container">
      <!-- Заголовок страницы -->
      <div class="row">
        <div class="col-12 text-center mb-5">
          <h1 class="display-4 mb-3">Наши проекты</h1>
          <p class="lead">
            Реализованные интерьеры, отражающие индивидуальность заказчиков
          </p>
        </div>
      </div>

      <!-- Сетка карточек проектов -->
      <div class="row g-4">
        <div
          class="col-12 col-md-6 col-lg-4 d-flex"
          v-for="project in projects"
          :key="project.id"
        >
          <div class="project-card d-flex flex-column w-100">
            <div class="image-container position-relative overflow-hidden">
              <img
                v-if="project.image"
                :src="getImageUrl(project.image)"
                :alt="project.title"
                class="project-image"
              />
              <div v-else class="placeholder-image"></div>
            </div>
            <div class="p-4 pt-2 flex-grow-1 d-flex flex-column">
              <h3 class="project-title">{{ project.title }}</h3>
              <div class="mt-auto pt-3"> <!-- Добавлен pt-3 для отступа сверху кнопки -->
                <RouterLink
                  :to="{ name: 'project-detail', params: { id: project.id } }"
                  class="btn btn-outline-dark btn-detail"
                >
                  Подробнее
                </RouterLink>
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
  name: 'ProjectsView',
  data() {
    return {
      projects: allProjects
    };
  },
  methods: {
    getImageUrl(filename) {
      return `/images/projects/${filename}`;
    }
  }
};
</script>

<style scoped>
.projects-view {
  padding-top: 6rem;
  padding-bottom: 4rem;
}

.project-card {
  background-color: #fff;
  border: 1px solid #e5e5e5;
  border-radius: 4px;
  overflow: hidden;
  display: flex;
  flex-direction: column;
  height: 100%;
  transition: transform 0.3s ease, box-shadow 0.3s ease;
}

.project-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 8px 20px rgba(0, 0, 0, 0.08);
}

.image-container {
  width: 100%;
  height: 200px;
  position: relative;
  background-color: #f8f9fa;
}

.project-image,
.placeholder-image {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  object-fit: cover;
}

.placeholder-image {
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #e9ecef;
}

.placeholder-image::before {
  content: "Изображение проекта";
  color: #adb5bd;
  font-size: 0.95rem;
}

.project-title {
  font-size: 1.25rem;
  font-weight: 500;
  color: #212529;
  margin-bottom: 0.5rem;
}

/* Увеличиваем специфичность селектора */
.projects-view .project-card .d-flex.flex-column:not(:first-child) {
  padding-top: 0.5rem !important; /* Восстановлен небольшой отступ */
}

.btn-detail {
  padding: 0.5rem 1rem;
  font-size: 0.9rem;
  font-weight: 500;
}

@media (max-width: 767px) {
  .projects-view {
    padding-top: 4rem;
    padding-bottom: 3rem;
    padding-right: 1.5rem;
  }

  .project-title {
    font-size: 1.15rem;
  }
  
  /* Уменьшаем отступ еще больше на мобильных */
  .projects-view .project-card .d-flex.flex-column:not(:first-child) {
    padding-top: 0.3rem !important;
  }
}
</style>