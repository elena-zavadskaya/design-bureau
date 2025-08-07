<template>
  <section class="about-section">
    <div class="container">
      <div class="section-header mb-6">
        <h2 class="section-title">Философия бюро</h2>
      </div>
      
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 mb-5 mb-lg-0">
          <div class="about-text">
            <p class="lead">
              Создаём интерьеры, которые выражают личность заказчиков.
            </p>
            <p class="description">
              Основано в 2009 году Екатериной Тищенко и Светланой Шерварли. В 2024 году вошли в ТОП-100 лучших дизайнеров интерьера.
            </p>
          </div>

          <div class="values-grid">
            <div 
              v-for="(value, index) in values" 
              :key="index"
              class="value-item"
            >
              <div>
                <h5 class="value-title highlighted">{{ value.title }}</h5>
                <p class="value-desc">{{ value.description }}</p>
              </div>
            </div>
          </div>
        </div>

        <div class="col-12 col-lg-6">
          <img
            src="/images/founders/founders-together.jpg"
            alt="Екатерина Тищенко и Светлана Шерварли"
            class="founders-photo"
          />
        </div>
      </div>
      
      <div class="row justify-content-center mt-5">
        <div class="col-auto">
          <router-link 
            to="/about" 
            class="btn-standard"
          >
            Подробнее о бюро
          </router-link>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutSection',
  props: {
    values: {
      type: Array,
      required: true
    }
  }
}
</script>

<style scoped>
.about-section {
  background: white;
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.about-text .lead {
  font-size: 1.3rem;
  font-weight: 400;
  color: #222;
  margin-bottom: 1.5rem;
  max-width: 500px;
}

.about-text .description {
  font-size: 1.1rem;
  color: #555;
  max-width: 500px;
  line-height: 1.6;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 6px;
  margin-top: 2rem;
}

.value-item {
  display: flex;
  align-items: flex-start;
  padding: 0 0 22px 0;
  position: relative;
}

.value-item:not(:last-child)::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  right: 0;
  height: 1px;
  background: linear-gradient(90deg, 
              rgba(0,0,0,0) 0%, 
              rgba(0,0,0,0.1) 15%, 
              rgba(0,0,0,0.1) 85%, 
              rgba(0,0,0,0) 100%);
}

.value-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 4px;
  color: #222;
}

.value-title.highlighted {
  color: #000;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.value-desc {
  font-size: 1rem;
  color: #666;
  line-height: 1.6;
}

.founders-photo {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
}

@media (max-width: 768px) {
  .value-item {
    padding-bottom: 10px;
  }
  
  .values-grid {
    gap: 10px;
  }
  
  .value-title {
    font-size: 1.15rem;
  }
  
  .value-desc {
    font-size: 0.95rem;
  }
  
  .about-text .lead {
    font-size: 1.2rem;
  }
  
  .about-text .description {
    font-size: 1rem;
  }
  
  .value-item:not(:last-child)::after {
    background: linear-gradient(90deg, 
                rgba(0,0,0,0) 0%, 
                rgba(0,0,0,0.15) 10%, 
                rgba(0,0,0,0.15) 90%, 
                rgba(0,0,0,0) 100%);
  }
}
</style>