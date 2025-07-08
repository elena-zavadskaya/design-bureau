<template>
  <div class="testimonials-page">
    <!-- Декоративные элементы -->
    <div class="decor-circle circle-1"></div>
    <div class="decor-circle circle-2"></div>
    
    <div class="container position-relative">
      <!-- Заголовок страницы -->
      <div class="text-center py-6">
        <h1 class="display-5 fw-light position-relative page-title">
          <span class="title-text">Отзывы клиентов</span>
          <span class="title-line"></span>
        </h1>
        <!-- Добавлен класс mb-5 для отступа снизу -->
        <p class="section-subtitle max-w-2xl mx-auto mt-4 mb-5">
          Что говорят о нас те, кто уже доверился нашему дизайну
        </p>
      </div>

      <!-- Сетка отзывов - 2 колонки с естественной высотой -->
      <div class="row g-5 justify-content-center">
        <div 
          v-for="(testimonial, index) in testimonials" 
          :key="testimonial.id"
          class="col-12 col-lg-6"
        >
          <div class="testimonial-card p-5 position-relative">
            <div class="decor-corner top-left"></div>
            <div class="decor-corner top-right"></div>
            <div class="decor-corner bottom-left"></div>
            <div class="decor-corner bottom-right"></div>
            
            <div class="testimonial-content">
              <p class="testimonial-text mb-4">{{ testimonial.text }}</p>
              
              <div class="testimonial-author">
                <div class="author-name">{{ testimonial.author }}</div>
                <div class="source">
                  <a :href="'https://' + testimonial.source" target="_blank" class="source-link">
                    {{ testimonial.source }}
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
import { testimonials } from '@/data/homeData.js'

export default {
  name: 'TestimonialsView',
  data() {
    return {
      testimonials: testimonials
    }
  },
  metaInfo() {
    return {
      title: 'Отзывы о нашей работе | E.S.S.E. Design & Decoration',
      meta: [
        {
          name: 'description',
          content: 'Читайте отзывы наших клиентов о работе дизайн-бюро E.S.S.E. Design & Decoration. Узнайте, почему клиенты выбирают нас для создания интерьеров.'
        }
      ]
    }
  }
}
</script>

<style scoped>
.testimonials-page {
  padding: 8rem 0 6rem;
  position: relative;
  overflow: hidden;
  background-color: #fafafa;
}

/* Декоративные элементы */
.decor-circle {
  position: absolute;
  border-radius: 50%;
  z-index: -1;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%);
  top: -150px;
  right: -150px;
}

.circle-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 70%);
  bottom: 100px;
  left: -100px;
}

/* Заголовок страницы */
.page-title {
  margin-bottom: 2rem;
}

.title-text {
  display: inline-block;
  padding-bottom: 15px;
  position: relative;
  z-index: 2;
}

.title-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #000 20%, #000 80%, transparent 100%);
  z-index: 1;
}

.section-subtitle {
  font-size: 1.1rem;
  color: #6c757d;
  max-width: 700px;
}

/* Карточка отзыва */
.testimonial-card {
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s ease;
  position: relative;
  overflow: hidden;
}

.testimonial-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.decor-corner {
  position: absolute;
  width: 15px;
  height: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: #000;
  opacity: 0.1;
  transition: opacity 0.3s ease;
}

.testimonial-card:hover .decor-corner {
  opacity: 0.3;
}

.top-left {
  top: 15px;
  left: 15px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: 15px;
  right: 15px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: 15px;
  left: 15px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: 15px;
  right: 15px;
  border-left: none;
  border-top: none;
}

/* Контент отзыва */
.testimonial-text {
  font-size: 1.05rem;
  line-height: 1.75;
  color: #444;
}

.testimonial-author {
  margin-top: 2rem;
  padding-top: 1.5rem;
  border-top: 1px solid rgba(0,0,0,0.05);
}

.author-name {
  font-weight: 500;
  font-size: 1.1rem;
  margin-bottom: 0.25rem;
}

.source {
  font-size: 0.95rem;
  color: #666;
}

.source-link {
  color: #666;
  text-decoration: none;
  position: relative;
  transition: color 0.3s ease;
}

.source-link::after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #000;
  transition: width 0.3s ease;
}

.source-link:hover {
  color: #000;
}

.source-link:hover::after {
  width: 100%;
}

/* Адаптивные стили */
@media (max-width: 1200px) {
  .testimonial-card {
    padding: 4rem !important;
  }
}

@media (max-width: 992px) {
  .testimonials-page {
    padding: 6rem 0 4rem;
  }
  
  .testimonial-card {
    padding: 3.5rem !important;
  }
  
  /* Уменьшаем отступ подзаголовка на планшетах */
  .section-subtitle {
    margin-bottom: 3rem !important;
  }
}

@media (max-width: 768px) {
  .testimonials-page {
    padding: 5rem 0 3rem;
  }
  
  .testimonial-card {
    padding: 3rem !important;
  }
  
  .testimonial-text {
    font-size: 1rem;
  }
  
  /* Уменьшаем отступ подзаголовка на мобильных */
  .section-subtitle {
    margin-bottom: 2.5rem !important;
  }
}

@media (max-width: 576px) {
  .page-title {
    font-size: 2.5rem;
  }
  
  .testimonial-card {
    padding: 2.5rem !important;
  }
  
  .testimonial-text {
    font-size: 0.95rem;
  }
  
  /* Уменьшаем отступ подзаголовка на маленьких экранах */
  .section-subtitle {
    margin-bottom: 2rem !important;
  }
}

/* Анимация появления */
.testimonial-card {
  opacity: 0;
  transform: translateY(20px);
  animation: fadeInUp 0.6s ease forwards;
}

@keyframes fadeInUp {
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

/* Задержка анимации для каждой карточки */
.testimonial-card:nth-child(1) { animation-delay: 0.1s; }
.testimonial-card:nth-child(2) { animation-delay: 0.2s; }
.testimonial-card:nth-child(3) { animation-delay: 0.3s; }
.testimonial-card:nth-child(4) { animation-delay: 0.4s; }
</style>