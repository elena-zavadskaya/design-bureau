<template>
  <div class="testimonial-slider">
    <div class="testimonial-item p-4 p-lg-5">
      <div class="quote-icon mb-4">“</div>
      <p class="testimonial-text fs-5 mb-4">{{ activeTestimonial.text }}</p>
      <div class="testimonial-author">
        <strong>{{ activeTestimonial.author }}</strong>
        <div class="text-muted">{{ activeTestimonial.source }}</div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  },
  data() {
    return {
      activeIndex: 0
    }
  },
  computed: {
    activeTestimonial() {
      return this.testimonials[this.activeIndex];
    }
  },
  mounted() {
    setInterval(() => {
      this.activeIndex = (this.activeIndex + 1) % this.testimonials.length;
    }, 5000);
  }
}
</script>

<style scoped>
.testimonial-slider {
  max-width: 800px;
  margin: 0 auto;
}

.testimonial-item {
  background: #fff;
  border: 1px solid #e9ecef;
  text-align: center;
  border-radius: 4px;
  min-height: 300px;
  display: flex;
  flex-direction: column;
  justify-content: center;
}

.quote-icon {
  font-size: 4rem;
  line-height: 1;
  color: #e9ecef;
  font-family: serif;
  margin-top: -1rem;
}

.testimonial-text {
  line-height: 1.7;
  font-style: italic;
  text-align: center;
  overflow: hidden;
  min-height: 150px;
  margin: 0 auto;
  max-width: 700px;
  
  /* Современный стандарт line-clamp */
  display: -webkit-box;
  -webkit-line-clamp: 6;
  -webkit-box-orient: vertical;
  
  /* Стандартное свойство для будущей поддержки */
  display: -moz-box;
  -moz-box-orient: vertical;
  -moz-line-clamp: 6;
  
  /* Экспериментальное стандартное свойство */
  display: box;
  line-clamp: 6;
  box-orient: vertical;
}

.testimonial-author {
  margin-top: auto;
  padding-top: 1.5rem;
}

/* Адаптивные стили */
@media (max-width: 992px) {
  .testimonial-text {
    -webkit-line-clamp: 8;
    -moz-line-clamp: 8;
    line-clamp: 8;
    min-height: 180px;
  }
}

@media (max-width: 768px) {
  .testimonial-item {
    min-height: 350px;
    padding: 2rem;
  }
  
  .testimonial-text {
    -webkit-line-clamp: 10;
    -moz-line-clamp: 10;
    line-clamp: 10;
    min-height: 220px;
    font-size: 1.1rem;
  }
  
  .quote-icon {
    font-size: 3.5rem;
  }
}
</style>