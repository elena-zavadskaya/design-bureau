<template>
  <section class="about-name-section">
    <div class="about-name-bg"></div>
    <div class="container">
      <div class="about-name-content">
        <!-- Декоративные элементы -->
        <div class="decorative-circle circle-1"></div>
        <div class="decorative-circle circle-2"></div>
        
        <div class="name-header section-header">
          <h2 class="section-title">E.S.S.E. Design & Decoration</h2>
        </div>
        
        <div class="name-explanation">
          <div class="explanation-item">
            <div class="icon-wrapper">
              <span class="initials-icon">E + S</span>
            </div>
            <p>В названии дизайн-бюро зашифрованы инициалы имён основателей: <strong>Екатерина</strong> и <strong>Светлана</strong>.</p>
          </div>
          
          <div class="explanation-item">
            <div class="icon-wrapper">
              <span class="latin-icon">ESSE</span>
            </div>
            <p><strong>ESSE</strong> в переводе с латыни означает <strong>"быть"</strong>.</p>
          </div>
        </div>
        
        <div class="motto-block">
          <div class="quote-mark open">"</div>
          <p class="motto">Быть значит создавать</p>
          <div class="quote-mark close">"</div>
        </div>
        
        <div class="signature">
          <p>Девиз нашего дизайн-бюро</p>
        </div>
      </div>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutNameSection'
}
</script>

<style scoped>
.about-name-section {
  position: relative;
  padding: 4rem 0;
  overflow: hidden;
}

.about-name-bg {
  position: absolute;
  top: 0;
  left: 50%;
  transform: translateX(-50%);
  width: 100vw;
  height: 100%;
  background: linear-gradient(135deg, #e8e8e8 0%, #ececec 100%);
  z-index: -1;
}

.about-name-content {
  max-width: 900px;
  margin: 0 auto;
  text-align: center;
  position: relative;
  z-index: 2;
}

/* Декоративные элементы */
.decorative-circle {
  position: absolute;
  border-radius: 50%;
  z-index: 1;
}

.circle-1 {
  width: 250px;
  height: 250px;
  top: -50px;
  right: -50px;
}

.circle-2 {
  width: 150px;
  height: 150px;
  bottom: 50px;
  left: -50px;
}

/* Заголовок*/
.name-header {
  margin-bottom: 4rem;
}

/* Объяснение названия */
.name-explanation {
  display: flex;
  justify-content: center;
  gap: 4rem;
  margin-bottom: 4rem;
  flex-wrap: wrap;
}

.explanation-item {
  flex: 1;
  min-width: 250px;
  max-width: 300px;
  display: flex;
  flex-direction: column;
  align-items: center;
}

.icon-wrapper {
  width: 80px;
  height: 80px;
  border-radius: 50%;
  background: #f0f0f0;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  transition: all 0.3s ease;
}

.icon-wrapper:hover {
  transform: scale(1.05);
  background: #e0e0e0;
}

.initials-icon, .latin-icon {
  font-family: 'Helvetica Neue Cyr', sans-serif;
  font-weight: 700;
  color: #333333;
}

.initials-icon {
  font-size: 1.2rem;
}

.latin-icon {
  font-size: 1.1rem;
}

.explanation-item p {
  font-size: 1.1rem;
  line-height: 1.7;
  color: #555555;
  font-family: 'Helvetica Neue Cyr', sans-serif;
  font-weight: 400;
}

.explanation-item strong {
  color: #000000;
  font-weight: 700;
}

/* Девиз */
.motto-block {
  position: relative;
  margin: 3rem 0;
  padding: 2rem 0;
  display: flex;
  justify-content: center;
  align-items: center;
}

.quote-mark {
  font-family: 'Playfair Display', serif;
  font-size: 5rem;
  color: #cccccc;
  line-height: 1;
  font-weight: 300;
}

.quote-mark.open {
  align-self: flex-start;
  margin-right: 15px;
  margin-top: -15px;
}

.quote-mark.close {
  align-self: flex-start;
  margin-left: 15px;
  margin-top: 40px;
  margin-bottom: -40px;
}

.motto {
  font-family: 'Cormorant Garamond', serif;
  font-size: 2.2rem;
  font-weight: 500;
  font-style: italic;
  color: #000000;
  margin: 0;
  padding: 0;
  position: relative;
  display: inline-block;
  max-width: 400px;
}

.signature {
  margin-top: 0.5rem; /* Уменьшаем отступ */
}

.signature p {
  font-family: 'Cormorant Garamond', serif;
  font-size: 1.1rem;
  color: #666666;
  font-weight: 400;
  font-style: italic;
}

/* Адаптивность */
@media (max-width: 992px) {
  .name-explanation {
    gap: 2rem;
  }
  
  .motto {
    font-size: 2rem;
  }
  
  .quote-mark {
    font-size: 4rem;
  }
  
  .quote-mark.close {
    margin-top: 35px;
  }
}

@media (max-width: 768px) {
  .about-name-section {
    padding: 4rem 0;
  }
  
  .name-explanation {
    flex-direction: column;
    align-items: center;
    gap: 3rem;
  }
  
  .explanation-item {
    max-width: 100%;
  }
  
  .motto-block {
    flex-direction: column;
    align-items: center;
    justify-content: center;
  }
  
  .quote-mark {
    font-size: 3.5rem;
    margin: 0 !important;
    align-self: center !important;
  }
  
  .quote-mark.open {
    order: 1;
    margin-bottom: -20px !important;
  }
  
  .quote-mark.close {
    order: 3;
    margin-top: 0 !important;
  }
  
  .motto {
    font-size: 1.8rem;
    order: 2;
    margin: 0.5rem 0;
  }
}

@media (max-width: 480px) {
  .motto {
    font-size: 1.5rem;
  }
  
  .quote-mark {
    font-size: 3rem;
  }
}

/* Анимации */
@keyframes fadeInUp {
  from {
    opacity: 0;
    transform: translateY(30px);
  }
  to {
    opacity: 1;
    transform: translateY(0);
  }
}

.about-name-content > * {
  animation: fadeInUp 0.8s ease forwards;
}

.name-header {
  animation-delay: 0.1s;
}

.name-explanation {
  animation-delay: 0.3s;
}

.motto-block {
  animation-delay: 0.5s;
}

.signature {
  animation-delay: 0.7s;
}
</style>