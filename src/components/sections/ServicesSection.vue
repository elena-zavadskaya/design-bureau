<template>
  <section class="services-section py-6">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Наш подход</h2>
        <p class="section-subtitle">
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
      
      <div class="text-center mt-8 pt-4">
        <router-link 
          to="/services" 
          class="btn-standard"
        >
          Все услуги
        </router-link>
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
  padding-bottom: 5rem;
}

.services-grid {
  display: grid;
  grid-template-columns: repeat(1, 1fr);
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
}

@media (min-width: 768px) {
  .services-grid {
    grid-template-columns: repeat(2, 1fr);
  }
}

@media (min-width: 1200px) {
  .services-grid {
    grid-template-columns: repeat(4, 1fr);
  }
}

@media (max-width: 768px) {
  .services-grid {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
  
  .text-center.mt-8 {
    margin-top: 3rem !important;
  }
}
</style>