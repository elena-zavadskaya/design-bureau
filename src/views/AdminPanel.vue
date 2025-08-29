<template>
  <div class="admin-panel">
    <div class="admin-header">
      <h1>Панель администратора</h1>
      <button @click="logout" class="btn btn-outline">Выйти</button>
    </div>
    
    <div class="admin-content">
      <AdminTestimonialForm
        :editing-testimonial="editingTestimonial"
        @submit="handleSubmit"
        @cancel-edit="cancelEdit"
      />
      
      <AdminTestimonialsList
        :testimonials="testimonials"
        @edit="startEditing"
        @delete="deleteTestimonial"
      />
    </div>
  </div>
</template>

<script>
import AdminTestimonialForm from '@/components/admin/AdminTestimonialForm.vue';
import AdminTestimonialsList from '@/components/admin/AdminTestimonialsList.vue';

const API_BASE_URL = 'https://ci96892.tw1.ru/api';

export default {
  name: 'AdminPanel',
  components: {
    AdminTestimonialForm,
    AdminTestimonialsList
  },
  data() {
    return {
      testimonials: [],
      editingTestimonial: null
    }
  },
  mounted() {
    this.loadTestimonials();
  },
  methods: {
    logout() {
      localStorage.removeItem('admin-authenticated')
      this.$router.push('/admin')
    },
    
    async loadTestimonials() {
      try {
        const response = await fetch(`${API_BASE_URL}/testimonials/`);
        if (response.ok) {
          this.testimonials = await response.json();
        } else {
          console.error('Ошибка загрузки отзывов:', response.status);
        }
      } catch (error) {
        console.error('Ошибка загрузки отзывов:', error);
      }
    },
    
    async handleSubmit(testimonialData) {
      try {
        let url = `${API_BASE_URL}/testimonials/`;
        let method = 'POST';
        
        if (this.editingTestimonial) {
          url = `${API_BASE_URL}/testimonials/${this.editingTestimonial.id}/`;
          method = 'PUT';
        }
        
        const response = await fetch(url, {
          method,
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(testimonialData)
        });
        
        if (response.ok) {
          await this.loadTestimonials();
          alert(this.editingTestimonial ? 'Отзыв успешно обновлен!' : 'Отзыв успешно добавлен!');
          this.editingTestimonial = null;
        } else {
          console.error('Ошибка сохранения отзыва:', response.status);
        }
      } catch (error) {
        console.error('Ошибка сохранения отзыва:', error);
      }
    },
    
    startEditing(testimonial) {
      this.editingTestimonial = { ...testimonial };
    },
    
    cancelEdit() {
      this.editingTestimonial = null;
    },
    
    async deleteTestimonial(id) {
      if (confirm('Вы уверены, что хотите удалить этот отзыв?')) {
        try {
          const response = await fetch(`${API_BASE_URL}/testimonials/${id}/`, {
            method: 'DELETE'
          });
          
          if (response.ok) {
            await this.loadTestimonials();
            alert('Отзыв успешно удален!');
          } else {
            console.error('Ошибка удаления отзыва:', response.status);
          }
        } catch (error) {
          console.error('Ошибка удаления отзыва:', error);
        }
      }
    }
  }
}
</script>

<style scoped>
.admin-panel {
  min-height: 100vh;
  padding: 6rem 2rem 2rem;
  background-color: #f5f5f5;
  box-sizing: border-box;
}

.admin-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  margin-bottom: 2rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid #ddd;
}

.admin-content {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
}

h1 {
  color: #333;
  margin: 0;
}

/* Адаптация для мобильных устройств */
@media (max-width: 768px) {
  .admin-panel {
    padding: 5rem 1rem 1rem;
  }
  
  .admin-header {
    flex-direction: column;
    gap: 1rem;
    text-align: center;
  }
}
</style>