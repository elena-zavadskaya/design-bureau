<template>
  <section class="services-section py-6">
    <div class="container">
      <div class="text-center mb-6">
        <h2 class="section-title mb-3">Наш подход</h2>
        <p class="section-subtitle max-w-2xl mx-auto">
          Целостный процесс создания интерьера от концепции до реализации
        </p>
      </div>
      
      <div class="services-grid">
        <ServiceCard 
          v-for="(service, index) in services" 
          :key="service.id" 
          :service="service"
          :index="index"
        />
      </div>
    </div>
  </section>
</template>

<script>
import ServiceCard from '@/components/ui/ServiceCard.vue'

export default {
  name: 'ServicesSection',
  components: {
    ServiceCard
  },
  props: {
    services: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.services-section {
  background-color: #fafafa;
  padding-bottom: 5rem; /* ДОБАВЛЕН НИЖНИЙ ОТСТУП */
}

.section-title {
  font-size: 2.5rem;
  font-weight: 400;
  letter-spacing: -0.5px;
  position: relative;
  display: inline-block;
}

.section-title::after {
  content: "";
  position: absolute;
  bottom: -10px;
  left: 50%;
  transform: translateX(-50%);
  width: 60px;
  height: 2px;
  background-color: #000;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr); /* ОБНОВЛЁННАЯ СЕТКА */
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

/* ОТОБРАЖЕНИЕ 2 КОЛОНКИ НА ПЛАНШЕТАХ */
@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

/* ОТОБРАЖЕНИЕ 4 КОЛОНКИ НА ШИРОКИХ ЭКРАНАХ */
@media (min-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
  
  .section-title {
    font-size: 2rem;
  }
}

@media (max-width: 768px) {
  .section-title {
    font-size: 2rem;
  }
  
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
}
</style>