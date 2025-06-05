<template>
  <section class="about-page">
    <!-- Hero (без отступов) -->
    <div class="hero-section">
      <img
        src="/images/about/main.jpg"
        alt="Интерьер от E.S.S.E."
        class="hero-image"
        loading="eager"
      />
      <div class="hero-overlay" role="banner" aria-label="Вступительный блок">
        <transition name="fade" appear>
          <div>
            <h1 class="hero-title">
              E.S.S.E. <span class="hero-em">Design & Decoration</span>
            </h1>
            <p class="hero-subtitle">Дизайн, вдохновлённый культурой и личностью</p>
          </div>
        </transition>
      </div>
    </div>

    <!-- Content (с отступами по бокам) -->
    <div class="content container">
      <!-- О нас -->
      <section class="text-image-section padded-section" v-scroll-fade>
        <div class="text">
          <h2>О нас</h2>
          <p>
            Мы — E.S.S.E. Design & Decoration, студия, где рождаются интерьеры со смыслом. Основанная в 2009 году Екатериной Тищенко и Светланой Шерварли, студия объединяет культурный контекст, международный опыт и утончённый вкус. Мы создаём пространства, в которых хочется жить, работать и возвращаться.
          </p>
          <blockquote>“Истинный стиль не требует громких слов — он ощущается.”</blockquote>
        </div>
        <div class="image">
          <img src="/images/about/studio.jpg" alt="Рабочий процесс в студии" loading="lazy" />
        </div>
      </section>

      <!-- Статистика -->
      <section class="stats-section padded-section" v-scroll-fade>
        <h2>Наши достижения</h2>
        <div class="stats-grid">
          <div class="stat-card">
            <div class="stat-number">15+</div>
            <div class="stat-label">лет на рынке</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">5</div>
            <div class="stat-label">городов присутствия</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">15+</div>
            <div class="stat-label">реализованных проектов</div>
          </div>
          <div class="stat-card">
            <div class="stat-number">3</div>
            <div class="stat-label">премий и упоминаний</div>
          </div>
        </div>
      </section>

      <!-- Highlight -->
      <section class="highlight padded-section" v-scroll-fade>
        <p>В 2024 году студия вошла в топ-100 лучших дизайнеров по версии журнала «Интерьерный».</p>
      </section>

      <section class="founders-section padded-section" v-scroll-fade>
        <div class="founders-grid">
          <img src="/images/about/founders.jpg" alt="Екатерина и Светлана" class="founders-photo" loading="lazy" />
          <div class="founders-content">
            <h2>Основатели</h2>
            <div class="founders-text">
              <p>
                Екатерина Тищенко и Светлана Шерварли — дипломированные дизайнеры с международным образованием (Rhodec International). Их проекты публикуются в AD, ELLE Decoration, Interni Russia. Они создают новый визуальный язык современной России.
              </p>
            </div>
          </div>
        </div>
      </section>

      <!-- Философия с черным фоном и правильными отступами -->
      <section class="philosophy-section" v-scroll-fade>
        <div class="philosophy-container">
          <div class="text-image-section reverse">
            <div class="image">
              <img src="/images/about/details.jpg" alt="Детали интерьера" loading="lazy" />
            </div>
            <div class="text">
              <h2>Философия</h2>
              <ul>
                <li>Интерьер — это история клиента, рассказанная языком формы и света</li>
                <li>Дизайн как искусство ежедневной жизни</li>
                <li>Многослойная атмосфера: ароматы, звуки, текстуры</li>
                <li>Гуманность, глубина, уважение к культуре</li>
              </ul>
            </div>
          </div>
        </div>
      </section>

      <!-- Timeline -->
      <section class="timeline-section padded-section" v-scroll-fade>
        <h2>Наш путь</h2>
        <div class="timeline">
          <div class="timeline-item">
            <div class="year">2009</div>
            <div class="event">Основание студии в Москве.</div>
          </div>
          <div class="timeline-item">
            <div class="year">2012</div>
            <div class="event">Первый международный проект.</div>
          </div>
          <div class="timeline-item">
            <div class="year">2016</div>
            <div class="event">Участие в выставке Batimat.</div>
          </div>
          <div class="timeline-item">
            <div class="year">2020</div>
            <div class="event">Запуск масштабного проекта реновации ЦДЛ.</div>
          </div>
          <div class="timeline-item">
            <div class="year">2024</div>
            <div class="event">ТОП-100 дизайнеров по версии журнала «Интерьерный».</div>
          </div>
        </div>
      </section>

      <!-- Ценности -->
      <section class="values padded-section" v-scroll-fade>
        <h2>Наши ценности</h2>
        <div class="value-grid">
          <div class="value-card">
            <h3>Целостность</h3>
            <p>Этика, прозрачность и экологичность в каждом решении.</p>
          </div>
          <div class="value-card">
            <h3>Совершенство</h3>
            <p>Мы следим за качеством на каждом этапе проекта.</p>
          </div>
          <div class="value-card">
            <h3>Синергия</h3>
            <p>Создаём больше, чем возможно в одиночку.</p>
          </div>
          <div class="value-card">
            <h3>Открытость</h3>
            <p>Ценим разнообразие идей и культур.</p>
          </div>
        </div>
      </section>
    </div>
  </section>
</template>

<script>
export default {
  name: 'AboutView',
  directives: {
    scrollFade: {
      mounted(el) {
        el.style.opacity = 0;
        el.style.transform = 'translateY(20px)';
        const observer = new IntersectionObserver(([entry], observer) => {
          if (entry.isIntersecting) {
            el.style.transition = 'opacity 0.8s ease, transform 0.8s ease';
            el.style.opacity = 1;
            el.style.transform = 'translateY(0)';
            observer.unobserve(el);
          }
        }, { threshold: 0.15 });
        observer.observe(el);
      }
    }
  }
};
</script>

<style scoped>
.about-page {
  font-family: 'Helvetica Neue', sans-serif;
  color: #1a1b22;
  background: #ffffff url('/images/about/texture-light.png') repeat;
}

.hero-section {
  position: relative;
  height: 65vh;
  overflow: hidden;
}

.hero-image {
  width: 100%;
  height: 100%;
  object-fit: cover;
  filter: brightness(50%);
}

.hero-overlay {
  position: absolute;
  top: 50%;
  left: 5%;
  transform: translateY(-50%);
  color: #fff;
  max-width: 90%;
}

.hero-title {
  font-size: 3rem;
  margin-bottom: 0.5rem;
}

.hero-em {
  font-weight: 300;
}

.hero-subtitle {
  font-size: 1.2rem;
  font-weight: 300;
}

.container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 4rem 0;
}

.padded-section {
  padding: 0 1.5rem;
  margin-bottom: 4rem;
}

.text-image-section {
  display: flex;
  flex-wrap: wrap;
  align-items: center;
  gap: 2rem;
}

.text-image-section.reverse {
  flex-direction: row-reverse;
}

.text {
  flex: 1 1 450px;
}

.text h2 {
  font-size: 2rem;
  margin-bottom: 1rem;
}

.text p {
  line-height: 1.6;
  margin-bottom: 1rem;
}

.text ul {
  list-style: disc inside;
  padding-left: 0;
  margin-top: 1rem;
}

.text ul li {
  margin-bottom: 0.5rem;
}

.image img {
  width: 100%;
  max-width: 480px;
  object-fit: cover;
  box-shadow: 0 12px 24px rgba(0, 0, 0, 0.1);
}

.stats-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.stats-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 2rem;
}

.stat-card {
  background: #fafafa;
  padding: 2rem 1.5rem;
  border-radius: 8px;
  text-align: center;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.stat-card:hover {
  transform: translateY(-5px);
}

.stat-number {
  font-size: 2.5rem;
  font-weight: bold;
  color: #1a1b22;
}

.stat-label {
  margin-top: 0.5rem;
  font-size: 1rem;
  color: #555;
}

.highlight {
  background: #f0f0f0;
  padding: 2rem;
  font-size: 1.15rem;
  text-align: center;
  font-weight: 500;
  color: #333;
  border-radius: 0;
}

/* Правильное оформление блока Философия */
.philosophy-section {
  background-color: #000;
  color: #fff;
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.philosophy-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.philosophy-section .text h2 {
  color: #fff;
}

.philosophy-section .text ul {
  list-style: none;
  padding-left: 0;
}

.philosophy-section .text ul li {
  position: relative;
  padding-left: 1.5rem;
  margin-bottom: 1rem;
  color: #fff;
}

.philosophy-section .text ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  color: #fff;
  font-size: 1.5rem;
  line-height: 1;
}

.timeline-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.timeline {
  display: flex;
  flex-direction: column;
  gap: 2rem;
  position: relative;
  padding-left: 3rem;
}

.timeline::before {
  content: '';
  position: absolute;
  left: 24px;
  top: 0;
  bottom: 0;
  width: 4px;
  background: #e0e0e0;
  border-radius: 2px;
}

.timeline-item {
  display: flex;
  gap: 1rem;
  position: relative;
}

.timeline-item .year {
  font-weight: bold;
  font-size: 1.5rem;
  flex-shrink: 0;
  width: 60px;
  margin-left: 15px;
}

.timeline-item .event {
  line-height: 1.5;
}

.values h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.value-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
  gap: 1.5rem;
}

.value-card {
  background: #fafafa;
  padding: 1.5rem;
  border-radius: 8px;
  box-shadow: 0 6px 12px rgba(0, 0, 0, 0.05);
  transition: transform 0.3s ease;
}

.value-card:hover {
  transform: translateY(-5px);
}

.value-card h3 {
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
}

.value-card p {
  line-height: 1.5;
}

/* ОБНОВЛЕННЫЕ СТИЛИ ДЛЯ БЛОКА ОСНОВАТЕЛИ */
.founders-section {
  position: relative;
}

.founders-section h2 {
  font-size: 2rem;
  margin-bottom: 1.5rem;
  text-align: center;
}

.founders-grid {
  display: flex;
  flex-direction: column;
  gap: 2rem;
}

.founders-photo {
  width: 100%;
  object-fit: cover;
  box-shadow: 0 8px 16px rgba(0, 0, 0, 0.08);
}

.founders-content {
  display: flex;
  flex-direction: column;
  justify-content: center; /* Вертикальное центрирование контента */
}

.founders-text {
  line-height: 1.6;
  color: #333;
}

/* Десктопная версия - фото и контент в ряд с вертикальным центрированием */
@media (min-width: 769px) {
  .founders-section h2 {
    text-align: left;
    margin-bottom: 0.5rem; /* Уменьшаем отступ для компактности */
  }
  
  .founders-grid {
    flex-direction: row;
    align-items: center; /* Вертикальное центрирование всего блока */
    gap: 3rem;
  }
  
  .founders-photo {
    flex: 0 0 45%;
    max-width: 45%;
    height: 100%; /* Занимает всю доступную высоту */
    min-height: 400px; /* Минимальная высота для фотографии */
    object-fit: cover;
  }
  
  .founders-content {
    flex: 1;
    text-align: left;
    height: 100%; /* Занимает всю доступную высоту */
    padding: 2rem 0; /* Отступы сверху и снизу для центрирования */
  }
}

/* Анимации и медиа-запросы */
.fade-enter-active {
  transition: all 0.8s ease;
}
.fade-enter-from {
  opacity: 0;
  transform: translateY(20px);
}
.fade-enter-to {
  opacity: 1;
  transform: translateY(0);
}

@media (max-width: 768px) {
  .hero-title {
    font-size: 2.2rem;
  }

  .hero-subtitle {
    font-size: 1rem;
  }

  .text-image-section {
    flex-direction: column !important;
  }

  .timeline {
    padding-left: 1rem;
  }

  .timeline-item .year {
    width: 50px;
    font-size: 1rem;
  }

  .padded-section {
    padding: 0 1.5rem;
  }
  
  .philosophy-section {
    padding: 2rem 0;
  }
  
  .philosophy-container {
    padding: 0 1.5rem;
  }
  
  /* Для мобильных: заголовок над всем блоком */
  .founders-section h2 {
    margin-bottom: 1.5rem;
  }
}

@media (min-width: 769px) and (max-width: 1024px) {
  .padded-section {
    padding: 0 2rem;
  }
  
  .philosophy-container {
    padding: 0 2rem;
  }
}
</style>