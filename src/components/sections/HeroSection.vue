<template>
  <section class="hero-section d-flex align-items-center">
    <div class="overlay"></div>
    <div class="container position-relative z-index-2">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 text-center">
          <div class="logo-large mb-4 mx-auto">
            <div class="logo-symbol"></div>
          </div>
          <h1 class="hero-title mb-4">
            E.S.S.E.<br> Design & Decoration
          </h1>
          <p class="hero-subtitle mb-5">
            Вневременные интерьеры, вдохновленные культурным наследием России
          </p>
          <RouterLink 
            to="/projects" 
            class="btn btn-light btn-lg px-5 py-3"
          >
            Смотреть проекты
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'HeroSection'
}
</script>

<style scoped>
.hero-section {
  min-height: 100vh;
  position: relative;
  background: linear-gradient(rgba(0, 0, 0, 0.2), rgba(0, 0, 0, 0.2)), 
              url('@/assets/images/hero-background.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  color: white;
  margin: 0;
  padding: 0;
  width: 100%;
  /* Добавляем отступ сверху для хедера */
  padding-top: 80px;
}

.hero-section .overlay {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background: rgba(0, 0, 0, 0.4);
  z-index: 1;
}

.hero-section .container {
  position: relative;
  z-index: 2;
}

.hero-section .btn {
  background-color: #ffffff !important;
  color: #000000 !important;
  border-radius: 0;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.hero-section .btn:hover {
  background-color: #f8f9fa !important;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.logo-large {
  width: 120px;
  height: 120px;
  display: flex;
  align-items: center;
  justify-content: center;
  border: 2px solid white;
  border-radius: 50%;
}

.logo-symbol {
  width: 40px;
  height: 40px;
  background: white;
  position: relative;
}

.logo-symbol::before,
.logo-symbol::after {
  content: "";
  position: absolute;
  background: black;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
}

.logo-symbol::before {
  width: 20px;
  height: 2px;
}

.logo-symbol::after {
  width: 2px;
  height: 20px;
}

.hero-title {
  font-size: 3.5rem;
  font-weight: 300;
  letter-spacing: 3px;
  text-transform: uppercase;
}

.hero-subtitle {
  font-size: 1.25rem;
  font-weight: 300;
  letter-spacing: 1px;
}

@media (max-width: 992px) {
  .hero-section {
    padding-top: 60px; /* Меньший отступ для мобильных */
  }
  
  .hero-title {
    font-size: 2.5rem;
  }
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }
}
</style>