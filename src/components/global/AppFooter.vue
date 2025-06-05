<template>
  <footer class="app-footer">
    <div class="container">
      <div class="row g-4">
        <!-- Колонка 1: Лого и описание -->
        <div class="col-12 col-lg-4">
          <div class="footer-brand mb-3">
            <div class="logo-symbol d-inline-block"></div>
            <span class="brand-name">E.S.S.E. Design & Decoration</span>
          </div>
          <p class="footer-text mb-4">
            Создаем вневременные интерьеры, вдохновленные культурным наследием России. <br>
            Профессиональный подход к каждому проекту.
          </p>
          <div class="social-links">
            <a href="#" class="text-white me-3" aria-label="Instagram">
              <i class="bi bi-instagram"></i>
            </a>
            <a href="#" class="text-white me-3" aria-label="Facebook">
              <i class="bi bi-facebook"></i>
            </a>
            <a href="#" class="text-white" aria-label="Houzz">
              <i class="bi bi-house-door"></i>
            </a>
          </div>
        </div>
        
        <!-- Колонка 2: Навигация -->
        <div class="col-6 col-md-4 col-lg-2">
          <h5 class="footer-title mb-3">Навигация</h5>
          <ul class="footer-links list-unstyled ps-0">
            <li v-for="item in navItems" :key="item.path" class="mb-2">
              <RouterLink 
                :to="item.path" 
                class="text-white footer-link"
              >
                {{ item.title }}
              </RouterLink>
            </li>
          </ul>
        </div>
        
        <!-- Колонка 3: Услуги -->
        <div class="col-6 col-md-4 col-lg-2">
          <h5 class="footer-title mb-3">Услуги</h5>
          <ul class="footer-links list-unstyled ps-0">
            <li v-for="service in services" :key="service" class="mb-2">
              <RouterLink 
                to="/services" 
                class="text-white footer-link"
              >
                {{ service }}
              </RouterLink>
            </li>
          </ul>
        </div>
        
        <!-- Колонка 4: Контакты -->
        <div class="col-12 col-md-12 col-lg-4">
          <h5 class="footer-title mb-3">Контакты</h5>
          <ul class="footer-contacts list-unstyled ps-0">
            <li class="d-flex mb-3">
              <i class="bi bi-telephone me-3"></i>
              <a href="tel:+79152254343" class="text-white footer-link">
                +7 915 225-43-43
              </a>
            </li>
            <li class="d-flex mb-3">
              <i class="bi bi-envelope me-3"></i>
              <a href="mailto:office@esse.com.ru" class="text-white footer-link">
                office@esse.com.ru
              </a>
            </li>
            <li class="d-flex">
              <i class="bi bi-geo-alt me-3"></i>
              <span class="text-white footer-address">
                Зубовский бульвар, дом 16-20, стр. 1, этаж 1, помещение XIV, комната 1,<br>
                Москва, 119034
              </span>
            </li>
          </ul>
        </div>
      </div>
      
      <!-- Копирайт -->
      <div class="row">
        <div class="col-12">
          <div class="copyright text-center mt-5 pt-4">
            <p class="mb-0 text-white-opacity small">
              © {{ currentYear }} E.S.S.E. Design & Decoration. Все права защищены.
            </p>
          </div>
        </div>
      </div>
    </div>
  </footer>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = ref(new Date().getFullYear());
    
    const navItems = [
      { title: 'Главная', path: '/' },
      { title: 'Проекты', path: '/projects' },
      { title: 'О бюро', path: '/about' },
      { title: 'Команда', path: '/team' },
      { title: 'Ценности', path: '/values' },
      { title: 'Отзывы', path: '/testimonials' },
      { title: 'Контакты', path: '/contacts' },
    ];
    
    const services = [
      'Дизайн-проект',
      'Комплектация',
      'Авторский надзор',
      'Представитель заказчика'
    ];
    
    return {
      currentYear,
      navItems,
      services
    };
  }
}
</script>

<style scoped>
.app-footer {
  background-color: #000;
  color: #fff;
  padding-top: 4rem;
  padding-bottom: 2rem;
}

.footer-brand {
  display: flex;
  align-items: center;
  margin-bottom: 1.5rem;
}

.logo-symbol {
  width: 32px;
  height: 32px;
  background-color: #fff;
  position: relative;
  flex-shrink: 0;
  margin-right: 0.75rem;
}

.logo-symbol::before,
.logo-symbol::after {
  content: "";
  position: absolute;
  background-color: #000;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo-symbol::before {
  width: 14px;
  height: 2px;
}

.logo-symbol::after {
  width: 2px;
  height: 14px;
}

.brand-name {
  font-weight: 400;
  font-size: 1.25rem;
  letter-spacing: 1px;
}

.footer-text {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  line-height: 1.5;
  margin-bottom: 1.5rem;
}

/* Заголовки без линии */
.footer-title {
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  padding: 0;
}

/* Ссылки */
.footer-links a {
  display: block;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: opacity 0.3s ease;
  padding-left: 0; /* выравнивание с заголовком */
}

.footer-links a:hover {
  opacity: 1 !important;
  color: #fff;
}

.footer-contacts li {
  display: flex;
  align-items: flex-start;
  margin-bottom: 1rem;
}

.footer-contacts i {
  font-size: 1.2rem;
  color: rgba(255, 255, 255, 0.5);
  margin-right: 0.75rem;
  flex-shrink: 0;
}

.footer-contacts a,
.footer-contacts .footer-address {
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  transition: opacity 0.3s ease;
  padding-left: 0; /* выравнивание с заголовком */
}

.footer-contacts a:hover {
  opacity: 1 !important;
  color: #fff;
}

.footer-address {
  line-height: 1.4;
}

/* Социальные иконки */
.social-links a {
  color: rgba(255, 255, 255, 0.75);
  font-size: 1.25rem;
  margin-right: 0.75rem;
  transition: opacity 0.3s ease;
}

.social-links a:hover {
  opacity: 1;
  color: #fff;
}

/* Копирайт */
.copyright {
  border-top: 1px solid rgba(255, 255, 255, 0.1);
  margin-top: 2rem;
  padding-top: 1.5rem;
  text-align: center;
}

.text-white-opacity {
  color: rgba(255, 255, 255, 0.5);
}

small {
  font-size: 0.85rem;
}

/* Адаптив для мобильных */
@media (max-width: 768px) {
  .app-footer {
    padding-top: 3rem;
    padding-bottom: 2rem;
  }
  
  .footer-brand {
    justify-content: center;
  }
  
  /* Убираем отступ между колонками, Bootstrap сам управит */
  .row.g-4 > [class*="col-"] {
    margin-bottom: 1.5rem;
  }
  
  .copyright {
    margin-top: 1.5rem;
    padding-top: 1rem;
  }
}
</style>

