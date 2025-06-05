<template>
  <RouterLink 
    :to="{ name: 'project-detail', params: { id: project.id } }"
    class="project-card text-decoration-none d-block project-item"
  >
    <div class="image-container position-relative overflow-hidden mb-3">
      <!-- Если в объекте project есть поле image — показываем картинку -->
      <img
        v-if="project.image"
        :src="imageUrl"
        :alt="project.title"
        class="project-image"
      />
      <!-- Иначе — плейсхолдер -->
      <div v-else class="placeholder-image bg-secondary"></div>

      <!-- Градиентная плашка -->
      <div class="overlay position-absolute w-100 h-100 d-flex align-items-end">
        <div class="text-white p-4 w-100">
          <h3 class="h4 mb-1">{{ project.title }}</h3>
          <p class="mb-0 small">{{ project.type }} · {{ project.location }}</p>
        </div>
      </div>
    </div>
    <p class="project-task text-muted small mb-0">{{ project.task }}</p>
  </RouterLink>
</template>

<script>
export default {
  name: 'ProjectCard',
  props: {
    project: {
      type: Object,
      required: true
    }
  },
  computed: {
    imageUrl() {
      // Путь к изображению в public/images/projects/
      return `/images/projects/${this.project.image}`;
    }
  }
}
</script>

<style scoped>
.project-card {
  color: inherit;
  transition: transform 0.3s ease;
}
.project-card:hover {
  transform: translateY(-5px);
}

.image-container {
  aspect-ratio: 4/3;
  position: relative;
}

.project-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  display: block;
  transition: all 0.5s ease;
}

.placeholder-image {
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  transition: all 0.5s ease;
}
.placeholder-image::before {
  content: "Фото проекта";
  color: #adb5bd;
  font-size: 1rem;
  transition: opacity 0.3s ease;
}
.project-card:hover .placeholder-image::before {
  opacity: 0;
}

.overlay {
  background: linear-gradient(transparent 60%, rgba(0, 0, 0, 0.7));
  opacity: 0;
  transition: opacity 0.3s ease;
  bottom: 0;
  left: 0;
}
.image-container:hover .overlay {
  opacity: 1;
}

.project-task {
  min-height: 3em;
}
</style>



