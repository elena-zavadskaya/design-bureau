<template>
  <header 
    class="app-header position-fixed w-100 top-0 start-0"
    :class="{ 'header-scrolled': isScrolled }"
  >
    <div class="container">
      <nav class="navbar navbar-expand-lg">
        <!-- Логотип -->
        <RouterLink 
          to="/" 
          class="navbar-brand d-flex align-items-center"
          aria-label="Перейти на главную страницу"
        >
          <span class="brand-name">E.S.S.E.</span>
        </RouterLink>

        <!-- Бургер с улучшенной доступностью -->
        <button 
          class="navbar-toggler border-0 p-0" 
          type="button" 
          @click="toggleMenu"
          :aria-expanded="menuOpen ? 'true' : 'false'"
          aria-controls="mobileMenu"
          aria-label="Переключить навигационное меню"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Обертка для мобильного меню -->
        <div 
          class="mobile-menu-overlay"
          :class="{ 'active': menuOpen }"
          @click="closeMenu"
        ></div>

        <!-- Меню с анимацией -->
        <div 
          id="mobileMenu"
          class="collapse navbar-collapse justify-content-center"
          :class="{ 'show': menuOpen }"
        >
          <ul class="navbar-nav mx-auto mb-0 align-items-center">
            <li 
              class="nav-item" 
              v-for="item in menuItems" 
              :key="item.path"
            >
              <RouterLink 
                :to="item.path" 
                class="nav-link d-flex align-items-center justify-content-center"
                :class="{ 'active': $route.path === item.path }"
                @click="closeMenu"
              >
                {{ item.title }}
              </RouterLink>
            </li>
            
            <!-- Мобильные контакты -->
            <li class="nav-item d-lg-none">
              <RouterLink 
                to="/contacts" 
                class="btn header-contact-btn w-100 mt-3"
                @click="closeMenu"
              >
                Контакты
              </RouterLink>
            </li>
          </ul>
        </div>
        
        <!-- Десктопные контакты -->
        <div class="d-none d-lg-flex align-items-center">
          <RouterLink 
            to="/contacts" 
            class="btn header-contact-btn"
          >
            Контакты
          </RouterLink>
        </div>
      </nav>
    </div>
  </header>
</template>

<script>
import { ref, onMounted, onUnmounted } from 'vue';
import { useRoute } from 'vue-router';

export default {
  name: 'AppHeader',
  setup() {
    const menuOpen = ref(false);
    const isScrolled = ref(false);
    const route = useRoute();
    
    const menuItems = [
      { title: 'Проекты', path: '/projects' },
      { title: 'Услуги', path: '/services' },
      { title: 'О бюро', path: '/about' },
      { title: 'Команда', path: '/team' },
      { title: 'Галерея', path: '/gallery' },
    ];
    
    const toggleMenu = () => {
      menuOpen.value = !menuOpen.value;
      document.body.style.overflow = menuOpen.value ? 'hidden' : '';
    };
    
    const closeMenu = () => {
      menuOpen.value = false;
      document.body.style.overflow = '';
    };
    
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };
    
    // Закрытие меню при изменении размера окна
    const handleResize = () => {
      if (window.innerWidth >= 992) closeMenu();
    };
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
      window.addEventListener('resize', handleResize);
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
      window.removeEventListener('resize', handleResize);
      document.body.style.overflow = '';
    });
    
    return {
      menuOpen,
      isScrolled,
      menuItems,
      toggleMenu,
      closeMenu,
      route
    };
  }
}
</script>

<style scoped>
.app-header {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: none !important;
  box-shadow: none !important;
  padding: 0;
  z-index: 1000;
}

.app-header.header-scrolled {
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2) !important;
}

.navbar {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0;
  position: relative;
}

.navbar-brand {
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 1rem;
  z-index: 1001;
}

.navbar-brand,
.navbar-brand * {
  text-decoration: none !important;
}

.brand-name {
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none !important;
}

/* Важное исправление: всегда показывать navbar-collapse на десктопе */
.navbar-collapse {
  align-items: center;
}

.navbar-nav {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
}

.nav-item {
  display: flex;
  align-items: center;
}

.nav-link {
  padding: 0 1.5rem !important;
  font-size: 0.95rem;
  letter-spacing: 0.5px;
  color: rgba(255, 255, 255, 0.85) !important;
  transition: all 0.3s ease;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 100%;
  text-decoration: none !important;
  position: relative;
}

.nav-link:hover {
  color: #fff !important;
}

.nav-link.active {
  font-weight: 500;
  color: #fff !important;
}

/* Анимация подчеркивания */
.nav-link:not(.active):after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 1.5rem;
  width: calc(100% - 3rem);
  height: 1px;
  background: currentColor;
  transform: scaleX(0);
  transform-origin: right;
  transition: transform 0.3s ease;
}

.nav-link:hover:after {
  transform: scaleX(1);
  transform-origin: left;
}

.header-contact-btn {
  background-color: transparent !important;
  color: #fff !important;
  border: 1px solid rgba(255, 255, 255, 0.7) !important;
  border-radius: 0;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  font-size: 0.9rem;
  padding: 0 25px !important;
  transition: all 0.3s ease;
  height: 40px;
  display: flex;
  align-items: center;
  justify-content: center;
}

.header-contact-btn:hover {
  background-color: #fff !important;
  color: #000 !important;
}

/* Бургер-иконка */
.navbar-toggler {
  border: none !important;
  background: transparent;
  padding: 0;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
  z-index: 1001;
  cursor: pointer;
}

.navbar-toggler-icon {
  display: block;
  width: 24px;
  height: 2px;
  background: #fff;
  position: relative;
  transition: all 0.25s ease;
}

.navbar-toggler-icon::before,
.navbar-toggler-icon::after {
  content: "";
  position: absolute;
  width: 24px;
  height: 2px;
  background: #fff;
  left: 0;
  transition: all 0.25s ease;
}

.navbar-toggler-icon::before {
  top: -8px;
}

.navbar-toggler-icon::after {
  top: 8px;
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon {
  background: transparent;
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::before {
  transform: translateY(8px) rotate(45deg);
}

.navbar-toggler[aria-expanded="true"] .navbar-toggler-icon::after {
  transform: translateY(-8px) rotate(-45deg);
}

/* Оверлей для мобильного меню */
.mobile-menu-overlay {
  position: fixed;
  top: 0;
  left: 0;
  right: 0;
  bottom: 0;
  background: rgba(0, 0, 0, 0.7);
  z-index: 999;
  opacity: 0;
  visibility: hidden;
  transition: all 0.3s ease;
}

.mobile-menu-overlay.active {
  opacity: 1;
  visibility: visible;
}

@media (min-width: 992px) {
  .navbar-collapse {
    position: static;
    transform: none !important;
    width: auto;
    height: auto;
    background: transparent;
    padding: 0;
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .navbar-nav {
    flex-direction: row;
    align-items: center;
  }
}

/*
@media (max-width: 992px) {
  header {
    padding-right: 1.5rem;
    margin-right: 1.5rem;
  }

  .navbar-collapse {
    position: fixed;
    top: 0;
    right: 0;
    bottom: 0;
    width: 85%;
    max-width: 320px;
    background: rgba(0, 0, 0, 0.95);
    z-index: 1000;
    padding: 80px 25px 30px;
    transform: translateX(100%);
    transition: transform 0.4s cubic-bezier(0.23, 1, 0.32, 1);
    display: flex;
    align-items: flex-start;
    flex-direction: column;
    justify-content: flex-start;
    overflow-y: auto;
    margin-top: 0;
    padding-right: 1.5rem;

  }

  .navbar-collapse.show {
    transform: translateX(0);
    box-shadow: -5px 0 25px rgba(0, 0, 0, 0.3);
  }

  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
    width: 100%;
    margin-top: 10px;
    margin-right: 1.5rem;
  }

  .nav-item {
    width: 100%;
    opacity: 0;
    transform: translateY(15px);
    transition: all 0.4s ease;
    margin-right: 1.5rem;
  }

  .navbar-collapse.show .nav-item {
    opacity: 1;
    transform: translateY(0);
    margin-right: 1.5rem;
  }

  .nav-item {
    max-width: 500px;
    padding-left: 3rem;
    padding-right: 3rem;
  }

  .navbar-collapse.show .nav-item:nth-child(1) { transition-delay: 0.1s; }
  .navbar-collapse.show .nav-item:nth-child(2) { transition-delay: 0.15s; }
  .navbar-collapse.show .nav-item:nth-child(3) { transition-delay: 0.2s; }
  .navbar-collapse.show .nav-item:nth-child(4) { transition-delay: 0.25s; }
  .navbar-collapse.show .nav-item:nth-child(5) { transition-delay: 0.3s; }
  .navbar-collapse.show .nav-item:nth-child(6) { transition-delay: 0.35s; }

  .nav-link {
    padding: 15px 0 !important;
    font-size: 1.15rem;
    border-bottom: 1px solid rgba(255, 255, 255, 0.1);
    width: 100%;
    justify-content: flex-start;
  }

  .nav-link:after {
    display: none;
  }

  .header-contact-btn {
    width: 100%;
    margin-top: 15px;
    padding: 14px 0 !important;
    font-size: 1rem;
    border: 1px solid rgba(255, 255, 255, 0.4) !important;
  }
}

@media (max-width: 576px) {
  .navbar-collapse {
    width: 100% !important;
    max-width: 100% !important;
    padding: 80px 15px 30px !important;
    padding-right: 1.5rem;
  }
  
  .nav-link {
    font-size: 1rem;
    padding: 12px 0 !important;
    margin-right: 1.5rem;
  }

  .nav-item {
    max-width: 500px;
    padding-left: 3rem;
    padding-right: 3rem;
  }
}*/

/* Адаптация десктопной версии */
@media (min-width: 992px) {
  .navbar-collapse {
    position: static;
    transform: none !important;
    width: auto;
    height: auto;
    background: transparent;
    padding: 0;
    box-shadow: none;
    display: flex !important;
    flex-direction: row;
    align-items: center;
    justify-content: center;
  }

  .navbar-nav {
    flex-direction: row;
    align-items: center;
    margin-top: 0;
  }

  .nav-item {
    width: auto;
    margin-bottom: 0;
    opacity: 1;
    transform: none;
  }

  .nav-link {
    padding: 0 1.5rem !important;
    font-size: 0.95rem;
    border-bottom: none;
    width: auto;
    justify-content: center;
  }

  .close-menu {
    display: none;
  }
}
</style>
