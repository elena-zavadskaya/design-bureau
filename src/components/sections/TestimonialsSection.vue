<template>
  <section class="testimonials-section py-6">
    <div class="container">
      <div class="text-center mb-6">
        <h2 class="section-title mb-3">Отзывы клиентов</h2>
        <p class="section-subtitle max-w-2xl mx-auto">
          Что говорят о нас те, кто уже доверился нашему дизайну
        </p>
      </div>
      
      <TestimonialSlider :testimonials="testimonials" />
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
  padding: 4rem 0; /* Отступы сверху и снизу */
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

@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
}
</style>