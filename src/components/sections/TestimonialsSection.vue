<template>
  <section class="testimonials-section py-6">
    <div class="container">
      <div class="section-header">
        <h2 class="section-title">Отзывы клиентов</h2>
        <p class="section-subtitle">
          Что говорят о нас те, кто уже доверился нашему дизайну
        </p>
      </div>
      
      <TestimonialSlider :testimonials="testimonials" class="mb-5" />
      
      <div class="text-center">
        <router-link 
          to="/testimonials" 
          class="btn-standard"
        >
          <span class="btn-text">Смотреть все отзывы</span>
          <i class="bi bi-arrow-right ms-2"></i>
        </router-link>
      </div>
    </div>
  </section>
</template>

<script>
import TestimonialSlider from '@/components/ui/TestimonialSlider.vue'

export default {
  name: 'TestimonialsSection',
  components: {
    TestimonialSlider
  },
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.testimonials-section {
  background-color: #fafafa;
  padding: 4rem 0;
}

.testimonials-section .container > .text-center {
  margin-top: 2.5rem;
}

@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }

  .testimonials-section .container > .text-center {
    margin-top: 2rem;
  }
}

@media (max-width: 576px) {
  .testimonials-section .container > .text-center {
    margin-top: 1.5rem;
  }
}
</style>