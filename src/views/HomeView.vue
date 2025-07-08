<template>
  <div class="home-view">
    <HeroSection />
    <div class="content">
      <FeaturedProjects :projects="featuredProjects" />
      <AboutSection :values="values" />
      <ServicesSection :services="services" />
      <TestimonialsSection :testimonials="testimonials" />
    </div>
    <CtaSection />
  </div>
</template>

<script>
import HeroSection from '@/components/sections/HeroSection.vue'
import FeaturedProjects from '@/components/sections/FeaturedProjects.vue'
import AboutSection from '@/components/sections/AboutSection.vue'
import ServicesSection from '@/components/sections/ServicesSection.vue'
import TestimonialsSection from '@/components/sections/TestimonialsSection.vue'
import CtaSection from '@/components/sections/CtaSection.vue'
import { featuredProjects, services, testimonials, values } from '@/data/homeData'

export default {
  name: 'HomeView',
  components: {
    HeroSection,
    FeaturedProjects,
    AboutSection,
    ServicesSection,
    TestimonialsSection,
    CtaSection
  },
  data() {
    return {
      featuredProjects,
      services,
      testimonials,
      values
    }
  }
}
</script>

<style scoped>
.home-view .btn {
  text-decoration: none !important;
  position: relative;
  transition: all 0.3s ease;
  border: none;
  display: inline-block;
  text-align: center;
  vertical-align: middle;
  user-select: none;
}



/* Глобальные отступы для всех секций КРОМЕ героя */
.home-view > section:not(.hero-section) {
  padding: 4rem 0;
}

/* Герой-секция без отступов */
.home-view > .hero-section {
  padding: 0 !important;
  margin: 0 !important;
}

@media (max-width: 768px) {
  .content {
    padding-right: 1.5rem;
  }

  .home-view > section:not(.hero-section) {
    padding: 3rem 0 !important;
  }
  
  .hero-title {
    font-size: 2.2rem;
  }
  
  .cta-title {
    font-size: 2rem;
  }
}

.home-view .btn:hover {
  transform: none !important;
  box-shadow: none !important;
}

/* Убираем анимацию волны */
.home-view .btn::after {
  display: none;
}

/* Специфичные стили для кнопок в секциях */
.home-view .hero-section .btn {
  padding: 14px 35px;
}

.home-view .featured-projects .btn {
  padding: 8px 20px;
}

.home-view .cta-section .btn {
  padding: 14px 35px;
  font-size: 1rem;
}
</style>
