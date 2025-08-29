<template>
  <div class="testimonials-list">
    <h2>Существующие отзывы ({{ testimonials.length }})</h2>
    
    <div class="testimonials-table-container">
      <table class="testimonials-table">
        <thead>
          <tr>
            <th>ID</th>
            <th>Имя клиента</th>
            <th>Источник</th>
            <th>Текст отзыва</th>
            <th>Действия</th>
          </tr>
        </thead>
        <tbody>
          <tr v-for="testimonial in testimonials" :key="testimonial.id">
            <td>{{ testimonial.id }}</td>
            <td>{{ testimonial.author }}</td>
            <td>{{ testimonial.source }}</td>
            <td class="text-preview">{{ truncateText(testimonial.text, 100) }}</td>
            <td>
              <button class="btn btn-sm btn-outline" @click="editTestimonial(testimonial)">
                Редактировать
              </button>
              <button class="btn btn-sm btn-outline" @click="deleteTestimonial(testimonial.id)">
                Удалить
              </button>
            </td>
          </tr>
        </tbody>
      </table>
    </div>
    
    <div v-if="testimonials.length === 0" class="empty-state">
      <p>Нет отзывов для отображения</p>
    </div>
  </div>
</template>

<script>
export default {
  name: 'AdminTestimonialsList',
  props: {
    testimonials: {
      type: Array,
      required: true
    }
  },
  methods: {
    truncateText(text, maxLength) {
      if (text.length <= maxLength) return text;
      return text.substring(0, maxLength) + '...';
    },
    editTestimonial(testimonial) {
      this.$emit('edit', testimonial);
    },
    deleteTestimonial(id) {
      this.$emit('delete', id);
    }
  }
}
</script>

<style scoped>
.testimonials-list {
  margin-top: 2rem;
}

h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.testimonials-table-container {
  overflow-x: auto;
  margin-top: 1.5rem;
}

.testimonials-table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: 1rem;
}

.testimonials-table th,
.testimonials-table td {
  padding: 12px;
  text-align: left;
  border-bottom: 1px solid #eee;
}

.testimonials-table th {
  background-color: #f8f9fa;
  font-weight: 600;
  color: #333;
}

.testimonials-table tr:hover {
  background-color: #f8f9fa;
}

.text-preview {
  max-width: 300px;
}

.btn-sm {
  padding: 6px 12px;
  font-size: 0.85rem;
  margin-right: 5px;
}

.empty-state {
  text-align: center;
  padding: 2rem;
  color: #6c757d;
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .testimonials-table {
    font-size: 0.85rem;
  }
  
  .testimonials-table th,
  .testimonials-table td {
    padding: 8px 6px;
  }
  
  .btn-sm {
    display: block;
    margin-bottom: 5px;
    width: 100%;
  }
}
</style>