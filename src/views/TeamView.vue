<template>
  <div class="team-page">
    <!-- Hero-секция -->
    <section class="team-hero">
      <div class="hero-content">
        <h1>Наша команда</h1>
        <p>Профессионалы, создающие пространства с характером</p>
      </div>
    </section>

    <!-- Основной контент -->
    <div class="team-container">
      <!-- Карточки команды -->
      <div class="team-grid">
        <!-- Светлана Шерварли -->
        <div class="team-card">
          <div class="member-photo">
            <img src="/images/team/shervarly.jpg" alt="Светлана Шерварли" loading="lazy" />
          </div>
          <div class="member-info">
            <h2>Светлана Шерварли</h2>
            <div class="position">
              <span v-for="(pos, index) in positions.svetlana" :key="index">{{ pos }}</span>
            </div>
            <div class="education">
              <h3>Образование:</h3>
              <ul>
                <li v-for="(edu, index) in education.svetlana" :key="index">{{ edu }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Екатерина Тищенко -->
        <div class="team-card">
          <div class="member-photo">
            <img src="/images/team/tishchenko.jpg" alt="Екатерина Тищенко" loading="lazy" />
          </div>
          <div class="member-info">
            <h2>Екатерина Тищенко</h2>
            <div class="position">
              <span v-for="(pos, index) in positions.ekaterina" :key="index">{{ pos }}</span>
            </div>
            <div class="education">
              <h3>Образование:</h3>
              <ul>
                <li v-for="(edu, index) in education.ekaterina" :key="index">{{ edu }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Олег Высоков -->
        <div class="team-card">
          <div class="member-photo">
            <img src="/images/team/vysokov.jpg" alt="Олег Высоков" loading="lazy" />
          </div>
          <div class="member-info">
            <h2>Олег Высоков</h2>
            <div class="position">
              <span v-for="(pos, index) in positions.oleg" :key="index">{{ pos }}</span>
            </div>
            <div class="education">
              <h3>Образование:</h3>
              <ul>
                <li v-for="(edu, index) in education.oleg" :key="index">{{ edu }}</li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Александр Журавлёв -->
        <div class="team-card">
          <div class="member-photo">
            <img src="/images/team/zhuravlev.jpg" alt="Александр Журавлёв" loading="lazy" />
          </div>
          <div class="member-info">
            <h2>Александр Журавлёв</h2>
            <div class="position">
              <span v-for="(pos, index) in positions.alexander" :key="index">{{ pos }}</span>
            </div>
            <div class="education">
              <h3>Образование:</h3>
              <ul>
                <li v-for="(edu, index) in education.alexander" :key="index">{{ edu }}</li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      <!-- Цитата -->
      <div class="team-quote">
        <blockquote>"Наша сила — в разнообразии взглядов и единстве цели: создавать пространства, которые рассказывают истории."</blockquote>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'TeamView',
  data() {
    return {
      positions: {
        svetlana: ["Совладелец", "Руководитель проектов", "Дизайнер интерьера"],
        ekaterina: ["Совладелец", "Художественный руководитель", "Дизайнер интерьера"],
        oleg: ["Инженер-проектировщик"],
        alexander: ["3D-визуализатор"]
      },
      education: {
        svetlana: [
          "Красноярский государственный торгово-экономический институт",
          "Международная школа дизайна (Москва)",
          "Диплом Rhodec International Interior Design School (Великобритания)",
          "Международный арт-менеджмент (Российский экономический университет им. Г. В. Плеханова, Москва)"
        ],
        ekaterina: [
          "Московский государственный лингвистический университет",
          "Международная школа дизайна (Москва)",
          "Диплом Rhodec International Interior Design School (Великобритания)"
        ],
        oleg: [
          "Московский государственный строительный университет"
        ]
      }
    }
  }
}
</script>

<style scoped>
.team-page {
  font-family: 'Inter', 'Helvetica Neue', sans-serif;
  color: #1a1b22;
  background: #fff;
}

/* Hero секция */
.team-hero {
  position: relative;
  height: 60vh;
  background: 
  linear-gradient(rgba(0, 0, 0, 0.6), rgba(0, 0, 0, 0.6)),
  url('/images/team/team-hero.jpg') center/cover no-repeat;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: #fff;
}

.hero-content {
  max-width: 800px;
  padding: 0 2rem;
}

.hero-content h1 {
  font-size: 3.5rem;
  font-weight: 300;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
}

.hero-content p {
  font-size: 1.2rem;
  font-weight: 300;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;
}

/* Основной контейнер */
.team-container {
  max-width: 1200px;
  margin: 4rem auto;
  padding: 0 2rem;
}

/* Сетка команды */
.team-grid {
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(500px, 1fr));
  gap: 3rem;
  margin-bottom: 4rem;
}

/* Карточка сотрудника */
.team-card {
  display: flex;
  gap: 2rem;
  border-bottom: 1px solid #eee;
  padding-bottom: 3rem;
}

.member-photo {
  flex: 0 0 200px;
  height: 250px;
  overflow: hidden;
}

.member-photo img {
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.5s ease;
}

.team-card:hover .member-photo img {
  transform: scale(1.05);
}

.member-info {
  flex: 1;
}

.member-info h2 {
  font-size: 1.8rem;
  font-weight: 400;
  margin-bottom: 1rem;
  letter-spacing: -0.3px;
}

.position {
  margin-bottom: 1.5rem;
}

.position span {
  display: block;
  font-size: 0.95rem;
  color: #555;
  line-height: 1.6;
  position: relative;
  padding-left: 1.2rem;
}

.position span::before {
  content: "•";
  position: absolute;
  left: 0;
  top: 0;
  color: #000;
  font-size: 1.2rem;
  line-height: 1.4;
}

.education h3 {
  font-size: 1.1rem;
  font-weight: 500;
  margin-bottom: 0.8rem;
  text-transform: uppercase;
  letter-spacing: 0.5px;
  position: relative;
  display: inline-block;
  padding-bottom: 0.3rem;
}

.education h3::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 30px;
  height: 1px;
  background: #000;
}

.education ul {
  padding-left: 1.2rem;
}

.education li {
  margin-bottom: 0.7rem;
  line-height: 1.6;
  color: #444;
  list-style-type: disc;
}

/* Цитата */
.team-quote {
  max-width: 800px;
  margin: 0 auto;
  padding: 3rem 0;
  text-align: center;
  position: relative;
}

.team-quote::before,
.team-quote::after {
  content: "";
  position: absolute;
  font-size: 6rem;
  color: rgba(0, 0, 0, 0.05);
  font-family: Georgia, serif;
  line-height: 1;
}

.team-quote::before {
  top: 0;
  left: 0;
}

.team-quote::after {
  bottom: 0;
  right: 0;
  transform: rotate(180deg);
}

.team-quote blockquote {
  font-size: 1.4rem;
  font-weight: 300;
  font-style: italic;
  line-height: 1.7;
  color: #333;
  max-width: 700px;
  margin: 0 auto;
  position: relative;
  z-index: 1;
}

/* Адаптивность */
@media (max-width: 1024px) {
  .team-grid {
    grid-template-columns: 1fr;
  }
  
  .team-card {
    flex-direction: column;
    gap: 1.5rem;
  }
  
  .member-photo {
    flex: 0 0 auto;
    height: 350px;
    width: 100%;
  }
}

@media (max-width: 768px) {
  .hero-content h1 {
    font-size: 2.5rem;
  }
  
  .hero-content p {
    font-size: 1rem;
  }
  
  .team-container {
    padding: 0 1.5rem;
  }
  
  .team-grid {
    gap: 2rem;
  }
  
  .team-card {
    padding-bottom: 2rem;
  }
  
  .member-info h2 {
    font-size: 1.6rem;
  }
  
  .team-quote blockquote {
    font-size: 1.2rem;
  }
}

@media (max-width: 480px) {
  .team-hero {
    height: 50vh;
  }
  
  .hero-content h1 {
    font-size: 2rem;
  }
  
  .member-photo {
    height: 280px;
  }
  
  .team-quote {
    padding: 2rem 0;
  }
  
  .team-quote blockquote {
    font-size: 1.1rem;
  }
  
  .team-quote::before,
  .team-quote::after {
    font-size: 4rem;
  }
}
</style>