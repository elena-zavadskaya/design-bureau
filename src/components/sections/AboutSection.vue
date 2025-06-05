<template>
  <section class="about-section">
    <div class="container">
      <div class="row align-items-center">
        <div class="col-12 col-lg-6 mb-5 mb-lg-0">
          <h2 class="section-title">Философия бюро</h2>
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
              <div class="value-icon">{{ value.icon }}</div>
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

.section-title {
  font-size: 2rem;
  font-weight: 600;
  margin-bottom: 1.5rem;
}

.about-text .lead {
  font-size: 1.2rem;
  font-weight: 400;
  color: #222;
  margin-bottom: 1rem;
  max-width: 500px;
}

.about-text .description {
  font-size: 1rem;
  color: #555;
  max-width: 500px;
}

.values-grid {
  display: grid;
  grid-template-columns: 1fr;
  gap: 20px;
  margin-top: 2rem;
}

.value-item {
  display: flex;
  align-items: center;
  gap: 15px;
}

.value-icon {
  width: 50px;
  height: 50px;
  border: 1px solid #ccc;
  border-radius: 50%;
  font-size: 1.4rem;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #333;
  flex-shrink: 0;
}

.value-title {
  font-size: 1rem;
  font-weight: 500;
  margin-bottom: 4px;
}

.value-title.highlighted {
  color: #000;
  font-weight: 600;
  letter-spacing: 0.2px;
}

.value-desc {
  font-size: 0.9rem;
  color: #666;
}

/* Фото без рамки и подписи */
.founders-photo {
  width: 100%;
  height: auto;
  display: block;
  object-fit: cover;
  border-radius: 0;
  box-shadow: none;
}
</style>


