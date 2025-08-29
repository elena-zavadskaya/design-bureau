<template>
  <div class="admin-login">
    <div class="login-container">
      <h2>Вход в панель администратора</h2>
      <form @submit.prevent="handleLogin" class="login-form">
        <div class="form-group">
          <label for="username">Логин</label>
          <input
            type="text"
            id="username"
            v-model="username"
            required
            placeholder="Введите логин"
          />
        </div>
        <div class="form-group">
          <label for="password">Пароль</label>
          <input
            type="password"
            id="password"
            v-model="password"
            required
            placeholder="Введите пароль"
          />
        </div>
        <div v-if="errorMessage" class="error-message">
          {{ errorMessage }}
        </div>
        <button type="submit" class="btn btn-primary">Войти</button>
      </form>
    </div>
  </div>
</template>

<script>
import axios from 'axios';

export default {
  name: 'AdminLogin',
  data() {
    return {
      username: '',
      password: '',
      errorMessage: ''
    }
  },
  methods: {
    async handleLogin() {
      try {
        const response = await axios.post('/api/auth/login/', {
          username: this.username,
          password: this.password
        });
        
        // Сохраняем токен авторизации
        localStorage.setItem('authToken', response.data.token);
        localStorage.setItem('admin-authenticated', 'true');
        
        this.$router.push('/admin-panel');
      } catch (error) {
        this.errorMessage = 'Неверный логин или пароль';
        setTimeout(() => {
          this.errorMessage = '';
        }, 3000);
      }
    }
  },
  mounted() {
    // Если пользователь уже авторизован, перенаправляем в панель администратора
    if (localStorage.getItem('admin-authenticated') === 'true') {
      this.$router.push('/admin-panel');
    }
  }
}
</script>

<style scoped>
.admin-login {
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #f5f5f5;
  padding: 20px;
}

.login-container {
  background: white;
  padding: 2rem;
  border-radius: 8px;
  box-shadow: 0 2px 10px rgba(0, 0, 0, 0.1);
  width: 100%;
  max-width: 400px;
}

h2 {
  text-align: center;
  margin-bottom: 1.5rem;
  color: #333;
}

.login-form {
  display: flex;
  flex-direction: column;
}

.form-group {
  margin-bottom: 1.5rem;
}

label {
  display: block;
  margin-bottom: 0.5rem;
  font-weight: 500;
  color: #555;
}

input {
  width: 100%;
  padding: 10px;
  border: 1px solid #ddd;
  border-radius: 4px;
  font-size: 1rem;
}

input:focus {
  outline: none;
  border-color: #000;
}

.error-message {
  color: #d32f2f;
  margin-bottom: 1rem;
  text-align: center;
  font-size: 0.9rem;
}

.btn {
  padding: 12px;
  font-size: 1rem;
  cursor: pointer;
}
</style>