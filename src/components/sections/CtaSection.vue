<template>
  <section class="cta-section py-6 position-relative">
    <div class="cta-overlay"></div>
    <div class="container position-relative z-index-2">
      <div class="row justify-content-center">
        <div class="col-12 col-md-10 col-lg-8 text-center">
          <h2 class="cta-title mb-4">Начните создание вашего идеального пространства</h2>
          <p class="cta-text mb-5 mx-auto">
            Запишитесь на консультацию с нашими дизайнерами
          </p>
          <RouterLink 
            to="/contacts" 
            class="btn btn-light btn-lg px-5 py-3"
          >
            Обсудить проект
          </RouterLink>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'CtaSection'
}
</script>

<style scoped>
.cta-section {
  padding: 100px 0;
  position: relative;
  color: white;
  background: linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), 
              url('@/assets/images/cta-background.jpg') center/cover no-repeat;
}

.cta-section .btn {
  background-color: #ffffff !important;
  color: #000000 !important;
  border-radius: 0;
  font-weight: 500;
  letter-spacing: 1px;
  text-transform: uppercase;
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.3);
}

.cta-section .btn:hover {
  background-color: #f8f9fa !important;
  transform: translateY(-3px);
  box-shadow: 0 6px 20px rgba(0, 0, 0, 0.4);
}

.cta-title {
  font-size: 2.5rem;
  font-weight: 300;
  letter-spacing: 1px;
}

.cta-text {
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
}

.z-index-2 {
  position: relative;
  z-index: 2;
}

@media (max-width: 768px) {
  .cta-title {
    font-size: 2rem;
  }
}
</style>