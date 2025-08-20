<template>
  <section class="about-page">
    <!-- Hero с новым стилем из main.css -->
    <section class="hero-header-bg" :style="{ backgroundImage: `linear-gradient(rgba(0, 0, 0, 0.7), rgba(0, 0, 0, 0.7)), url('/images/about/main.jpg')` }">
      <div class="hero-header">
        <h1>E.S.S.E. <span class="hero-em">Design & Decoration</span></h1>
        <p class="hero-intro-text">Дизайн, вдохновлённый культурой и личностью</p>
      </div>
    </section>

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

.philosophy-section {
  color: #000;
  padding: 4rem 0;
  margin-bottom: 4rem;
}

.philosophy-container {
  max-width: 1140px;
  margin: 0 auto;
  padding: 0 1.5rem;
}

.philosophy-section .text {
  max-width: 600px;
  padding: 3rem;
  border-left: 3px solid #000;
}

.philosophy-section .text h2 {
  margin-bottom: 1.5rem;
  position: relative;
  padding-bottom: 0.5rem;
}

.philosophy-section .text ul {
  list-style: none;
  padding-left: 0;
}

.philosophy-section .text ul li {
  position: relative;
  padding-left: 2rem;
  margin-bottom: 1rem;
  line-height: 1.6;
  font-size: 1.1rem;
}

.philosophy-section .text ul li::before {
  content: '•';
  position: absolute;
  left: 0;
  font-size: 1.8rem;
  line-height: 1;
  top: -0.3rem;
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
  justify-content: center;
}

.founders-text {
  line-height: 1.6;
  color: #333;
}

.hero-em {
  font-weight: 300;
}

@media (min-width: 769px) {
  .founders-section h2 {
    text-align: left;
    margin-bottom: 0.5rem;
  }
  
  .founders-grid {
    flex-direction: row;
    align-items: center;
    gap: 3rem;
  }
  
  .founders-photo {
    flex: 0 0 45%;
    max-width: 45%;
    height: 100%;
    min-height: 400px;
    object-fit: cover;
  }
  
  .founders-content {
    flex: 1;
    text-align: left;
    height: 100%;
    padding: 2rem 0;
  }
}

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