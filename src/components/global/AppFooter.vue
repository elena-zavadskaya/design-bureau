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
            <!-- Instagram -->
            <a 
              href="#"
              class="text-white me-3"
              aria-label="Instagram"
              @click.prevent="copyToClipboard('https://www.instagram.com/esse_art_poster?igsh=ZjQ3aGZsdThpYjgz')"
            >
              <i class="bi bi-instagram"></i>
            </a>

            <!-- Phone -->
            <a 
              href="#"
              class="text-white me-3"
              aria-label="Phone"
              @click.prevent="copyToClipboard('+7 915 225-43-43')"
            >
              <i class="bi bi-telephone"></i>
            </a>

            <!-- Home -->
            <RouterLink 
              to="/" 
              class="text-white"
              aria-label="Главная"
            >
              <i class="bi bi-house-door"></i>
            </RouterLink>
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
              <a 
                href="tel:+79152254343" 
                class="text-white footer-link"
                @click.prevent="copyToClipboard('+7 915 225-43-43')"
              >
                +7 915 225-43-43
              </a>
            </li>
            <li class="d-flex mb-3">
              <i class="bi bi-envelope me-3"></i>
              <a 
                href="mailto:office@esse.com.ru" 
                class="text-white footer-link"
                @click.prevent="copyToClipboard('office@esse.com.ru')"
              >
                office@esse.com.ru
              </a>
            </li>
            <li class="d-flex">
              <i class="bi bi-geo-alt me-3"></i>
              <span 
                class="text-white footer-address"
                @click="copyToClipboard('Зубовский бульвар, дом 16-20, стр. 1, этаж 1, помещение XIV, комната 1, Москва, 119034')"
              >
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

    <!-- Всплывающее уведомление -->
    <transition name="fade">
      <div v-if="copiedMessage" class="copied-toast">
        {{ copiedMessage }}
      </div>
    </transition>
  </footer>
</template>

<script>
import { ref } from 'vue';

export default {
  name: 'AppFooter',
  setup() {
    const currentYear = ref(new Date().getFullYear());
    const copiedMessage = ref('');

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

    const copyToClipboard = async (text) => {
      try {
        await navigator.clipboard.writeText(text);
        copiedMessage.value = 'Скопировано!';
        setTimeout(() => copiedMessage.value = '', 2000);
      } catch (err) {
        console.error('Ошибка копирования', err);
      }
    };
    
    return {
      currentYear,
      navItems,
      services,
      copiedMessage,
      copyToClipboard
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

.footer-title {
  font-size: 1.1rem;
  font-weight: 500;
  letter-spacing: 0.5px;
  margin-bottom: 1rem;
  padding: 0;
}

.footer-links a {
  display: block;
  font-size: 0.95rem;
  color: rgba(255, 255, 255, 0.75);
  text-decoration: none;
  margin-bottom: 0.5rem;
  transition: opacity 0.3s ease;
  padding-left: 0;
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
  padding-left: 0;
  cursor: pointer;
}

.footer-contacts a:hover,
.footer-contacts .footer-address:hover {
  opacity: 1 !important;
  color: #fff;
}

.footer-address {
  line-height: 1.4;
}

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

/* Всплывающее уведомление */
.copied-toast {
  position: fixed;
  bottom: 30px;
  right: 30px;
  background: rgba(0, 0, 0, 0.85);
  color: #fff;
  padding: 10px 16px;
  border-radius: 6px;
  font-size: 0.95rem;
  z-index: 9999;
}

/* Анимация появления/исчезновения */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}

@media (max-width: 768px) {
  .app-footer {
    padding-top: 3rem;
    padding-bottom: 2rem;
    padding-right: 1.5rem;
    padding-left: 1.5rem;
  }
  
  .footer-brand {
    justify-content: center;
  }
  
  .row.g-4 > [class*="col-"] {
    margin-bottom: 1.5rem;
  }
  
  .copyright {
    margin-top: 1.5rem;
    padding-top: 1rem;
  }
}
</style>
