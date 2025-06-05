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
        >
          <span class="brand-name">E.S.S.E.</span>
        </RouterLink>

        <!-- Бургер -->
        <button 
          class="navbar-toggler border-0 p-0" 
          type="button" 
          @click="toggleMenu"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>

        <!-- Меню -->
        <div 
          class="collapse navbar-collapse justify-content-center"
          :class="{ 'show': menuOpen }"
          id="navbarContent"
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
          </ul>
        </div>
        
        <!-- Контакты -->
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
    };
    
    const closeMenu = () => {
      menuOpen.value = false;
    };
    
    const handleScroll = () => {
      isScrolled.value = window.scrollY > 20;
    };
    
    onMounted(() => {
      window.addEventListener('scroll', handleScroll);
    });
    
    onUnmounted(() => {
      window.removeEventListener('scroll', handleScroll);
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
/* Убираем любые границы/тени у header и navbar */
.app-header {
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;
  border-bottom: none !important;
  box-shadow: none !important;
  padding: 0; /* чтобы navbar занимал всю высоту */
}

.app-header.header-scrolled {
  background-color: rgba(0, 0, 0, 0.95);
  box-shadow: 0 2px 20px rgba(0, 0, 0, 0.2);
}

/* Логотип без абсолютного позиционирования */
.navbar-brand {
  display: flex;
  align-items: center;
  padding: 0;
  margin-right: 1rem;
}

.brand-name {
  font-weight: 400;
  letter-spacing: 1px;
  font-size: 1.1rem;
  color: #fff;
  text-decoration: none !important;
}

/* Навбар: флекс с выравниванием по центру и распределением */
.navbar {
  display: flex !important;
  align-items: center;
  justify-content: space-between;
  min-height: 80px;
  padding: 0;
}

/* Меню в состоянии раскрыто/свернуто */
.navbar-collapse {
  display: flex !important;
  align-items: center;
}

/* Список пунктов меню: флекс с выравниванием по центру */
.navbar-nav {
  display: flex;
  align-items: center;
  height: 100%;
  margin: 0;
}

/* Элементы меню */
.nav-item {
  display: flex;
  align-items: center;
}

/* Ссылки-меню: высота 100% для полного центрирования */
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
}

.nav-link:hover {
  color: #fff !important;
}

.nav-link.active {
  font-weight: 500;
  color: #fff !important;
}

/* Кнопка "Контакты" */
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

/* Бургер */
.navbar-toggler {
  border: none !important;
  background: transparent;
  padding: 0;
  margin-right: 1rem;
  display: flex;
  align-items: center;
  justify-content: center;
  height: 40px;
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

/* Мобильные стили */
@media (max-width: 992px) {
  .navbar {
    flex-wrap: wrap;
    min-height: auto;
  }
  
  .navbar-collapse {
    width: 100%;
    margin-top: 1rem;
  }

  .navbar-nav {
    flex-direction: column;
    align-items: flex-start;
  }
  
  .nav-item {
    width: 100%;
  }
  
  .nav-link {
    width: 100%;
    padding: 0.75rem 1rem !important;
    font-size: 1.1rem;
  }

  .header-contact-btn {
    width: 100%;
    margin-top: 1rem;
    height: auto;
    padding: 12px 0 !important;
  }
}

/* Убираем подчёркивание у логотипа во всех состояниях */
.navbar-brand,
.navbar-brand:link,
.navbar-brand:visited,
.navbar-brand:hover,
.navbar-brand:focus {
  text-decoration: none !important;
  outline: none !important;
  box-shadow: none !important;
}

/* Если сам <span> внутри получает стили, тоже обнуляем */
.navbar-brand .brand-name,
.navbar-brand .brand-name:link,
.navbar-brand .brand-name:visited,
.navbar-brand .brand-name:hover,
.navbar-brand .brand-name:focus {
  text-decoration: none !important;
}
</style>
