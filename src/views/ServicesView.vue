<template>
  <div class="services-page">
    <!-- Заголовок страницы -->
    <section class="page-header-bg">
      <div class="page-header">
        <h1>Услуги</h1>
        <p class="intro-text">
          {{ servicesData.intro }}
        </p>
      </div>
    </section>

    <!-- Основные услуги -->
    <section class="services-container">
      <!-- Дизайн-проект -->
      <div class="service-card">
        <div class="service-header">
          <h2>{{ servicesData.designProject.title }}</h2>
          <div class="price-info">
            <span class="duration">{{ servicesData.designProject.duration }}</span>
          </div>
        </div>

        <!-- Этапы в аккордеоне -->
        <Accordion title="Этапы работы" class="stages-accordion">
          <div class="stages-container">
            <div v-for="(stage, index) in servicesData.designProject.stages" :key="index" class="stage">
              <div class="stage-header">
                <div class="stage-number">ЭТАП {{ index + 1 }}</div>
                <h3>{{ stage.title }}</h3>
              </div>
              <p>{{ stage.description }}</p>
              <div class="results">
                <h4>Результаты:</h4>
                <ul>
                  <li v-for="(result, i) in stage.results" :key="i">{{ result }}</li>
                </ul>
              </div>
            </div>
          </div>
        </Accordion>

        <!-- Состав проекта -->
        <Accordion title="Состав дизайн-проекта">
          <div class="project-composition">
            <div class="composition-section">
              <h4>Эскизный проект:</h4>
              <ul>
                <li v-for="(item, idx) in servicesData.designProject.composition.sketchProject" :key="idx">{{ item }}</li>
              </ul>
            </div>
            <div class="composition-section">
              <h4>Рабочий проект:</h4>
              <ul>
                <li v-for="(item, idx) in servicesData.designProject.composition.workingProject" :key="idx">{{ item }}</li>
              </ul>
            </div>
          </div>
        </Accordion>
      </div>

      <!-- Остальные услуги -->
      <div class="service-card" v-for="service in otherServices" :key="service.title">
        <div class="service-header">
          <h2>{{ service.title }}</h2>
        </div>
        <p class="spaced-text">{{ service.description }}</p>
        <p class="important-note">{{ service.importantNote }}</p>

        <Accordion :title="service.accordionTitle">
          <ul class="service-list">
            <li v-for="(item, idx) in service.servicesList" :key="idx">{{ item }}</li>
          </ul>
        </Accordion>
      </div>
    </section>
  </div>
</template>

<script>
import Accordion from '@/components/ui/Accordion.vue';
import { servicesPageData } from '@/data/servicesData';
import headerBg from '@/assets/images/services-header-bg.jpg';

export default {
  name: 'ServicesView',
  components: {
    Accordion
  },
  data() {
    return {
      servicesData: servicesPageData,
      headerBg
    }
  },
  computed: {
    otherServices() {
      const { equipment, supervision, representative } = this.servicesData;
      return [
        { ...equipment, accordionTitle: "Перечень услуг" },
        { ...supervision, accordionTitle: "Перечень услуг" },
        { ...representative, accordionTitle: "Перечень услуг" }
      ];
    }
  }
}
</script>

<style scoped>
/* Общие стили страницы */
.services-page {
  max-width: 1200px;
  margin: 0 auto;
  padding: 0 1rem 2rem;
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  color: #000;
  background: #fff;
}

/* Заголовок с фоновым изображением на всю ширину */
.page-header-bg {
  background-image: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
                    url('@/assets/images/services-header-bg.jpg');
  background-size: cover;
  background-position: center;
  padding: 12rem 0;
  width: 100vw;
  position: relative;
  left: 50%;
  right: 50%;
  transform: translateX(-50%);
  margin-bottom: 4rem;
}

.page-header {
  max-width: 1200px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
  color: white;
  padding: 0 1rem;
}

.page-header h1 {
  font-size: 2.8rem;
  font-weight: 300;
  letter-spacing: -0.5px;
  margin-bottom: 1.5rem;
  padding-bottom: 1rem;
  position: relative;
}

.page-header h1::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 80px;
  height: 2px;
  background: white;
}

.intro-text {
  font-size: 1.1rem;
  line-height: 1.8;
  max-width: 800px;
  margin: 2rem auto 0;
  font-weight: 300;
  position: relative;
  padding-top: 2rem;
  color: rgba(255, 255, 255, 0.9);
}

.intro-text::before {
  content: "";
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 40px;
  height: 1px;
  background: rgba(255, 255, 255, 0.7);
}

/* Основные услуги */
.services-container {
  display: grid;
  gap: 3rem;
}

.service-card {
  background: #fff;
  border: 1px solid #eee;
  padding: 3rem;
  position: relative;
  overflow: hidden;
}

.service-card::before {
  content: "";
  position: absolute;
  top: 0;
  left: 0;
  width: 4px;
  height: 100%;
  background: #000;
  transition: transform 0.4s ease;
}

.service-card:hover {
  border-color: #ddd;
}

.service-header {
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  flex-wrap: wrap;
  gap: 1.5rem;
  margin-bottom: 2rem;
  padding-bottom: 2rem;
  border-bottom: 1px solid #eee;
  position: relative;
}

.service-card:hover .service-header::after {
  width: 100px;
}

.service-header h2 {
  font-size: 1.8rem;
  font-weight: 400;
  color: #000;
  letter-spacing: -0.3px;
  position: relative;
}

.price-info {
  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.3rem;
}

.price {
  font-size: 1.5rem;
  font-weight: 500;
  color: #000;
  position: relative;
}

.price::after {
  content: "";
  position: absolute;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #000;
  transform: scaleX(0);
  transform-origin: left;
  transition: transform 0.3s ease;
}

.service-card:hover .price::after {
  transform: scaleX(1);
}

.duration {
  font-size: 0.9rem;
  color: #777;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
}

.stages-accordion {
  margin-top: 3rem;
}

.stages-container {
  display: grid;
  gap: 3rem;
  margin: 1.5rem 0;
}

.stage {
  position: relative;
  padding-left: 2.5rem;
}

.stage::before {
  content: "";
  position: absolute;
  left: 0;
  top: 0;
  height: 100%;
  width: 1px;
  background: #eee;
}

.stage-header {
  display: flex;
  align-items: center;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.stage-number {
  font-weight: 600;
  color: #000;
  font-size: 1.1rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
}

.stage-number::after {
  content: "";
  position: absolute;
  bottom: -3px;
  left: 0;
  width: 100%;
  height: 1px;
  background: #000;
}

.stage h3 {
  font-size: 1.4rem;
  font-weight: 400;
  color: #000;
  margin: 0;
}

.stage p {
  line-height: 1.8;
  color: #444;
  margin-bottom: 1.5rem;
  font-weight: 300;
}

.results h4 {
  font-weight: 500;
  margin-bottom: 1rem;
  color: #000;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  font-size: 0.9rem;
  position: relative;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.results h4::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 1px;
  background: #000;
}

.results ul {
  padding-left: 1.5rem;
}

.results li {
  margin-bottom: 0.8rem;
  line-height: 1.7;
  color: #444;
  list-style-type: disc;
  position: relative;
}

.project-composition {
  padding: 1rem 0;
}

.composition-section {
  margin-bottom: 2rem;
  position: relative;
}

.composition-section::before {
  content: "";
  position: absolute;
  left: -1.5rem;
  top: 0;
  height: 100%;
  width: 1px;
  background: #eee;
}

.composition-section h4 {
  font-weight: 500;
  margin-bottom: 1rem;
  color: #000;
  font-size: 1.1rem;
  position: relative;
  padding-left: 1rem;
}

.composition-section h4::before {
  content: "";
  position: absolute;
  left: 0;
  top: 50%;
  transform: translateY(-50%);
  width: 6px;
  height: 6px;
  background: #000;
}

.composition-section ul {
  padding-left: 1.5rem;
}

.composition-section li {
  margin-bottom: 0.8rem;
  line-height: 1.7;
  color: #444;
  list-style-type: disc;
}

.important-note {
  border-left: 2px solid #000;
  padding: 1.2rem 1.5rem;
  margin: 1.5rem 0;
  color: #444;
  line-height: 1.7;
  position: relative;
  background: #fafafa;
}

.important-note::before {
  content: "!";
  position: absolute;
  left: -12px;
  top: 50%;
  transform: translateY(-50%);
  width: 24px;
  height: 24px;
  background: #000;
  color: #fff;
  border-radius: 0;
  display: flex;
  align-items: center;
  justify-content: center;
  font-weight: 700;
  font-size: 0.9rem;
}

.service-list {
  padding-left: 1.5rem;
}

.service-list li {
  margin-bottom: 0.8rem;
  line-height: 1.7;
  color: #444;
  list-style-type: disc;
  position: relative;
  padding-left: 1rem;
}

.service-card > .spaced-text {
  line-height: 1.9;
  margin-bottom: 1.2rem;
}

.service-card > .important-note.spaced-text {
  line-height: 1.9;
  padding: 1.5rem;
}

/* Анимации и эффекты */
@keyframes fadeIn {
  from { opacity: 0; transform: translateY(10px); }
  to { opacity: 1; transform: translateY(0); }
}

.service-card {
  animation: fadeIn 0.5s ease-out;
  animation-fill-mode: both;
}

.service-card:nth-child(1) { animation-delay: 0.1s; }
.service-card:nth-child(2) { animation-delay: 0.2s; }
.service-card:nth-child(3) { animation-delay: 0.3s; }
.service-card:nth-child(4) { animation-delay: 0.4s; }

/* Адаптивность */
@media (max-width: 768px) {
  .page-header-bg {
    padding: 5rem 0;
  }
  
  .page-header {
    padding: 0 1.5rem;
  }
  
  .page-header h1 {
    font-size: 2.2rem;
  }

  .service-header {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .price-info {
    align-items: flex-start;
  }
  
  .service-card {
    padding: 2rem;
  }
  
  .service-card > .spaced-text,
  .service-card > .important-note.spaced-text {
    line-height: 1.85;
  }
}

@media (max-width: 480px) {
  .page-header-bg {
    padding: 4rem 0;
  }
  
  .page-header {
    padding: 0 1rem;
  }
  
  .page-header h1 {
    font-size: 1.8rem;
  }
  
  .service-card {
    padding: 1.5rem;
  }
  
  .stage {
    padding-left: 1.5rem;
  }
}
</style>