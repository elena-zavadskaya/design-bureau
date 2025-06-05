<template>
  <div class="service-card" :class="`service-${index}`">
    <div class="service-header">
      <div class="service-index">0{{ index + 1 }}</div>
      <h3 class="service-title">{{ service.title }}</h3>
    </div>
    
    <div class="service-details">
      <div class="service-meta">
        <span class="service-price">{{ service.price }}</span>
        <span class="service-duration">{{ service.duration }}</span>
      </div>
      
      <p class="service-description">{{ service.description }}</p>
      
      <div class="service-features">
        <div v-for="(feature, i) in service.features" :key="i" class="feature-item">
          <i class="bi bi-check-circle"></i>
          <span>{{ feature }}</span>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  props: {
    service: {
      type: Object,
      required: true
    },
    index: {
      type: Number,
      required: true
    }
  }
}
</script>

<style scoped>
.service-card {
  background: white;
  border: 1px solid #eee;
  border-radius: 4px;
  overflow: hidden;
  transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
  height: 100%;
  display: flex;
  flex-direction: column;
}

.service-card:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.05);
  border-color: #e0e0e0;
}

.service-header {
  padding: 1.5rem 1.5rem 1rem;
  padding-right: 4rem; /* ЗАЩИТА ОТ ПЕРЕКРЫТИЯ ЦИФРАМИ */
  border-bottom: 1px solid #f5f5f5;
  position: relative;
}

.service-index {
  position: absolute;
  top: 0.5rem;       /* ВЫРАВНИВАНИЕ ПО ВЕРТИКАЛИ */
  right: 1.5rem;
  font-size: 3.5rem; /* УВЕЛИЧЕН РАЗМЕР */
  font-weight: 700;  /* ЖИРНЫЙ ШРИФТ */
  color: #e0e0e0;    /* КОНТРАСТНЫЙ ЦВЕТ */
  line-height: 1;
  z-index: 0;
  opacity: 0.9;      /* ЛЕГКАЯ ПРОЗРАЧНОСТЬ */
}

.service-title {
  font-size: 1.25rem;
  font-weight: 500;
  margin-bottom: 0.5rem;
  position: relative;
  z-index: 1;
}

.service-details {
  padding: 1.5rem;
  flex-grow: 1;
  display: flex;
  flex-direction: column;
}

.service-meta {
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #f5f5f5;
}

.service-price {
  font-weight: 500;
  color: #000;
}

.service-duration {
  color: #6c757d;
  font-size: 0.9rem;
}

.service-description {
  color: #666;
  margin-bottom: 1.5rem;
  flex-grow: 1;
}

.service-features {
  margin-top: auto;
}

.feature-item {
  display: flex;
  align-items: flex-start;
  margin-bottom: 0.5rem;
}

.feature-item i {
  color: #000;
  margin-right: 0.5rem;
  margin-top: 0.2rem;
  font-size: 0.9rem;
}

.feature-item span {
  font-size: 0.95rem;
  color: #555;
}

/* Цветовые акценты для разных карточек */
.service-0 .service-header { background: #f8f8f8; }
.service-1 .service-header { background: #f5f5f5; }
.service-2 .service-header { background: #f0f0f0; }
.service-3 .service-header { background: #ececec; }
</style>