<template>
  <section class="testimonials-section py-6">
    <div class="container">
      <div class="text-center mb-6">
        <h2 class="section-title mb-3">Отзывы клиентов</h2>
        <p class="section-subtitle max-w-2xl mx-auto">
          Что говорят о нас те, кто уже доверился нашему дизайну
        </p>
      </div>
      
      <!-- Добавлен отступ после слайдера -->
      <TestimonialSlider :testimonials="testimonials" class="mb-5" />
      
      <!-- Кнопка перехода на страницу отзывов -->
      <div class="text-center">
        <router-link 
          to="/testimonials" 
          class="btn btn-outline-dark btn-lg rounded-0 px-5 py-3 position-relative view-all-btn"
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

/* Стили для кнопки */
.view-all-btn {
  font-weight: 400;
  letter-spacing: 0.5px;
  transition: all 0.3s ease;
  border-width: 1px;
  position: relative;
  overflow: hidden;
  display: inline-flex;
  align-items: center;
}

.view-all-btn .bi {
  transition: transform 0.3s ease;
}

.view-all-btn:hover {
  background-color: #000;
  color: #fff;
}

.view-all-btn:hover .bi {
  transform: translateX(5px);
}

/* Добавлен отступ между слайдером и кнопкой */
.testimonials-section .container > .text-center {
  margin-top: 2.5rem; /* Новый отступ */
}

/* Адаптивные стили */
@media (max-width: 768px) {
  .testimonials-section {
    padding: 3rem 0;
  }
  
  .section-title {
    font-size: 2rem;
  }
  
  .view-all-btn {
    padding: 0.75rem 1.5rem;
    font-size: 1rem;
  }

  /* Уменьшаем отступ на мобильных */
  .testimonials-section .container > .text-center {
    margin-top: 2rem;
  }
}

/* Дополнительный отступ на очень маленьких экранах */
@media (max-width: 576px) {
  .testimonials-section .container > .text-center {
    margin-top: 1.5rem;
  }
}

/* Анимация для кнопки */
@keyframes pulse {
  0% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0.2);
  }
  70% {
    box-shadow: 0 0 0 10px rgba(0, 0, 0, 0);
  }
  100% {
    box-shadow: 0 0 0 0 rgba(0, 0, 0, 0);
  }
}

.view-all-btn:hover {
  animation: pulse 1.5s infinite;
}
</style>