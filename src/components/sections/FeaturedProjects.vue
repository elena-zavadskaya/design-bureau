<template>
  <section class="featured-projects py-6">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Избранные проекты</h2>
        <p class="section-subtitle">
          Интерьеры, отражающие индивидуальность заказчиков
        </p>
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
        <RouterLink to="/projects" class="btn-standard">
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
  margin-bottom: 4rem;
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
