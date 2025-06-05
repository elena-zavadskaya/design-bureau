<template>
  <section class="featured-projects py-6">
    <div class="container">
      <div class="row mb-5">
        <div class="col-12 text-center">
          <h2 class="section-title mb-4">Избранные проекты</h2>
          <p class="section-subtitle mx-auto">
            Интерьеры, отражающие индивидуальность заказчиков
          </p>
        </div>
      </div>
      
      <div class="projects-grid">
        <ProjectCard 
          v-for="project in projects" 
          :key="project.id" 
          :project="project"
          class="project-item"
        />
      </div>
      
      <div class="text-center mt-5">
        <RouterLink to="/projects" class="btn btn-outline-dark">
          Все проекты
          <i class="bi bi-arrow-right ms-2"></i>
        </RouterLink>
      </div>
    </div>
  </section>
</template>

<script>
import ProjectCard from '@/components/ui/ProjectCard.vue'

export default {
  name: 'FeaturedProjects',
  components: {
    ProjectCard
  },
  props: {
    projects: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.featured-projects {
  padding-top: 4rem;
  padding-bottom: 4rem;
  margin-bottom: 4rem; /* <--- добавлено */
}

.featured-projects .btn {
  background-color: transparent !important;
  color: #212529 !important;
  border: 1px solid #212529 !important;
  border-radius: 0;
  font-weight: 500;
  letter-spacing: 0.5px;
  padding: 0.5rem 1.5rem;
}

.featured-projects .btn:hover {
  background-color: #212529 !important;
  color: #ffffff !important;
}

.projects-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 30px;
}

.project-item {
  transition: transform 0.4s ease;
}

.project-item:hover {
  transform: translateY(-10px);
}
</style>
