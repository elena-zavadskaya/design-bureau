<template>
  <div class="admin-form">
    <h2>{{ isEditing ? 'Редактировать отзыв' : 'Добавить новый отзыв' }}</h2>
    <form @submit.prevent="handleSubmit" class="review-form">
      <div class="form-row">
        <div class="form-group">
          <label for="clientName">Имя клиента *</label>
          <input
            type="text"
            id="clientName"
            v-model="formData.author"
            required
            placeholder="Введите имя клиента"
          />
        </div>
        <div class="form-group">
          <label for="source">Источник отзыва</label>
          <input
            type="text"
            id="source"
            v-model="formData.source"
            placeholder="Например: Яндекс.Карты, Instagram, сайт"
          />
        </div>
      </div>
      
      <div class="form-group">
        <label for="reviewText">Текст отзыва *</label>
        <textarea
          id="reviewText"
          v-model="formData.text"
          required
          rows="5"
          placeholder="Введите текст отзыва"
        ></textarea>
      </div>
      
      <div class="form-actions">
        <button type="submit" class="btn btn-primary">
          {{ isEditing ? 'Сохранить изменения' : 'Добавить отзыв' }}
        </button>
        <button 
          v-if="isEditing" 
          type="button" 
          @click="cancelEdit" 
          class="btn btn-outline"
        >
          Отмена
        </button>
        <button 
          v-else 
          type="button" 
          @click="resetForm" 
          class="btn btn-outline"
        >
          Очистить
        </button>
      </div>
    </form>
  </div>
</template>

<script>
export default {
  name: 'AdminTestimonialForm',
  props: {
    editingTestimonial: {
      type: Object,
      default: null
    }
  },
  data() {
    return {
      formData: {
        author: '',
        source: '',
        text: ''
      }
    }
  },
  computed: {
    isEditing() {
      return this.editingTestimonial !== null;
    }
  },
  watch: {
    editingTestimonial: {
      handler(newVal) {
        if (newVal) {
          this.formData = { ...newVal };
        } else {
          this.resetForm();
        }
      },
      immediate: true
    }
  },
  methods: {
    handleSubmit() {
      this.$emit('submit', { ...this.formData });
      if (!this.isEditing) {
        this.resetForm();
      }
    },
    resetForm() {
      this.formData = {
        author: '',
        source: '',
        text: ''
      };
    },
    cancelEdit() {
      this.$emit('cancel-edit');
    }
  }
}
</script>

<style scoped>
.admin-form {
  margin-bottom: 2.5rem;
}

h2 {
  color: #333;
  margin-bottom: 1.5rem;
  font-size: 1.5rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 0.5rem;
}

.review-form {
  max-width: 800px;
}

.form-row {
  display: flex;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
}

.form-group {
  flex: 1;
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}

input, textarea {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
  font-family: inherit;
}

input:focus, textarea:focus {
  outline: none;
  border-color: #000;
}

textarea {
  resize: vertical;
  min-height: 120px;
}

.form-actions {
  display: flex;
  gap: 1rem;
  margin-top: 1.5rem;
}

.btn {
  padding: 10px 20px;
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .form-row {
    flex-direction: column;
    gap: 0;
  }
  
  .form-actions {
    flex-direction: column;
  }
}
</style>