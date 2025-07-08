<template>
  <div class="contacts-page">
    <!-- Декоративные круги -->
    <div class="decor-circle circle-1"></div>
    <div class="decor-circle circle-2"></div>
    
    <div class="container position-relative">
      <!-- Заголовок страницы -->
      <div class="row mb-5 pt-4">
        <div class="col-12">
          <h1 class="display-5 fw-light mb-4 position-relative">
            <span class="title-text">Контакты</span>
            <span class="title-line"></span>
          </h1>
        </div>
      </div>

      <div class="row gx-5 align-items-stretch">
        <!-- Объединенный блок контактов -->
        <div class="col-12 col-lg-6 d-flex flex-column mb-5 mb-lg-0">
          <div class="contact-block p-4 p-lg-5 position-relative h-100">
            <div class="decor-corner top-left"></div>
            <div class="decor-corner top-right"></div>
            <div class="decor-corner bottom-left"></div>
            <div class="decor-corner bottom-right"></div>
            
            <!-- Подраздел Design & Decoration -->
            <div class="mb-5">
              <h2 class="h3 fw-light mb-4 position-relative">
                <span class="brand-subtitle">E.S.S.E.</span> Design & Decoration
              </h2>
              
              <ul class="contact-list list-unstyled">
                <li class="mb-4 d-flex align-items-start">
                  <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                    <i class="bi bi-telephone text-white"></i>
                  </div>
                  <div class="contact-detail">
                    <div class="contact-label">Телефон</div>
                    <div>+7 915 225-43-43</div>
                  </div>
                </li>
                
                <li class="mb-4 d-flex align-items-start">
                  <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                    <i class="bi bi-envelope text-white"></i>
                  </div>
                  <div class="contact-detail">
                    <div class="contact-label">Email</div>
                    <div>office@esse.com.ru</div>
                  </div>
                </li>
                
                <li class="d-flex align-items-start">
                  <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                    <i class="bi bi-geo-alt text-white"></i>
                  </div>
                  <div class="contact-detail">
                    <div class="contact-label">Адрес</div>
                    <div>
                      Зубовский бульвар, дом 16-20, стр. 1,<br>
                      этаж 1, помещение XIV, комната 1<br>
                      Москва, 119034
                    </div>
                  </div>
                </li>
              </ul>
            </div>
            
            <!-- Подраздел Art & Poster -->
            <div>
              <h2 class="h3 fw-light mb-4 position-relative">
                <span class="brand-subtitle">E.S.S.E.</span> Art & Poster
              </h2>
              
              <ul class="contact-list list-unstyled">
                <li class="mb-4 d-flex align-items-start">
                  <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                    <i class="bi bi-telephone text-white"></i>
                  </div>
                  <div class="contact-detail">
                    <div class="contact-label">Телефон</div>
                    <div>+7 915 225-43-43</div>
                  </div>
                </li>
                
                <li class="d-flex align-items-start">
                  <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                    <i class="bi bi-instagram text-white"></i>
                  </div>
                  <div class="contact-detail">
                    <div class="contact-label">Instagram</div>
                    <div>
                      <a href="https://instagram.com/esse_art_poster" target="_blank" class="social-link">@esse_art_poster</a><br>
                      <a href="https://instagram.com/esse_poster_shop" target="_blank" class="social-link">@esse_poster_shop</a> (каталог)
                    </div>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <!-- Форма обратной связи -->
        <div class="col-12 col-lg-6 d-flex flex-column">
          <div class="contact-form p-4 p-lg-5 position-relative h-100">
            <div class="form-decor-line"></div>
            
            <h2 class="h3 fw-light mb-4 position-relative">
              <span class="title-text">Напишите нам</span>
              <span class="title-line"></span>
            </h2>
            
            <form @submit.prevent="submitForm" class="wide-inputs">
              <div class="mb-4">
                <input 
                  type="text" 
                  class="form-control border-0 border-bottom rounded-0 bg-transparent px-0" 
                  v-model="form.name"
                  required
                  aria-label="Ваше имя"
                  placeholder="Ваше имя"
                >
              </div>
              
              <div class="mb-4">
                <input 
                  type="email" 
                  class="form-control border-0 border-bottom rounded-0 bg-transparent px-0" 
                  v-model="form.email"
                  required
                  aria-label="Email"
                  placeholder="Email"
                >
              </div>
              
              <div class="mb-4">
                <input 
                  type="tel" 
                  class="form-control border-0 border-bottom rounded-0 bg-transparent px-0" 
                  v-model="form.phone"
                  aria-label="Телефон"
                  placeholder="Телефон"
                >
              </div>
              
              <div class="mb-4">
                <textarea 
                  class="form-control border-0 border-bottom rounded-0 bg-transparent px-0" 
                  rows="4" 
                  v-model="form.message"
                  required
                  aria-label="Сообщение"
                  placeholder="Сообщение"
                ></textarea>
              </div>
              
              <button type="submit" class="btn btn-dark rounded-0 px-4 py-3 position-relative">
                <span class="btn-text">Отправить</span>
                <i class="bi bi-arrow-right ms-2"></i>
              </button>
            </form>
          </div>
        </div>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  data() {
    return {
      form: {
        name: '',
        email: '',
        phone: '',
        message: ''
      }
    }
  },
  methods: {
    submitForm() {
      console.log('Форма отправлена:', this.form);
      alert('Сообщение отправлено! Мы свяжемся с вами в ближайшее время.');
      this.form = { name: '', email: '', phone: '', message: '' };
    }
  }
}
</script>

<style scoped>
.contacts-page {
  padding-top: 8rem;
  padding-bottom: 6rem;
  position: relative;
  overflow-x: hidden;
  background-color: #fafafa;
  min-height: 63.5vh;
}

/* Декоративные элементы */
.decor-circle {
  position: absolute;
  border-radius: 50%;
  z-index: -1;
}

.circle-1 {
  width: 300px;
  height: 300px;
  background: radial-gradient(circle, rgba(0,0,0,0.03) 0%, rgba(0,0,0,0) 70%);
  top: -150px;
  right: -150px;
}

.circle-2 {
  width: 200px;
  height: 200px;
  background: radial-gradient(circle, rgba(0,0,0,0.02) 0%, rgba(0,0,0,0) 70%);
  bottom: 100px;
  left: -100px;
}

/* Заголовки */
.title-text {
  display: inline-block;
  padding-bottom: 15px;
  position: relative;
  z-index: 2;
}

.title-line {
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: linear-gradient(90deg, transparent 0%, #000 20%, #000 80%, transparent 100%);
  z-index: 1;
}

.brand-subtitle {
  font-weight: 500;
  letter-spacing: 1px;
}

/* Контактные блоки */
.contact-block {
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s ease;
  position: relative;
  overflow-x: hidden;
  display: flex;
  flex-direction: column;
}

.contact-block:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.decor-corner {
  position: absolute;
  width: 15px;
  height: 15px;
  border-width: 2px;
  border-style: solid;
  border-color: #000;
  opacity: 0.1;
  transition: opacity 0.3s ease;
}

.contact-block:hover .decor-corner {
  opacity: 0.3;
}

.top-left {
  top: 15px;
  left: 15px;
  border-right: none;
  border-bottom: none;
}

.top-right {
  top: 15px;
  right: 15px;
  border-left: none;
  border-bottom: none;
}

.bottom-left {
  bottom: 15px;
  left: 15px;
  border-right: none;
  border-top: none;
}

.bottom-right {
  bottom: 15px;
  right: 15px;
  border-left: none;
  border-top: none;
}

/* Элементы контактов */
.contact-icon {
  width: 40px;
  height: 40px;
  border-radius: 50%;
  flex-shrink: 0;
  margin-right: 15px;
}

.contact-detail {
  line-height: 1.6;
}

.contact-label {
  font-size: 0.85rem;
  text-transform: uppercase;
  letter-spacing: 1px;
  color: #666;
  margin-bottom: 2px;
}

.social-link {
  color: #000;
  text-decoration: none;
  position: relative;
  transition: all 0.3s ease;
}

.social-link:after {
  content: '';
  position: absolute;
  bottom: -2px;
  left: 0;
  width: 0;
  height: 1px;
  background-color: #000;
  transition: width 0.3s ease;
}

.social-link:hover {
  color: #444;
}

.social-link:hover:after {
  width: 100%;
}

/* Форма */
.contact-form {
  background-color: #fff;
  border: 1px solid rgba(0,0,0,0.05);
  transition: all 0.4s ease;
  display: flex;
  flex-direction: column;
}

.contact-form:hover {
  transform: translateY(-5px);
  box-shadow: 0 10px 30px rgba(0,0,0,0.05);
}

.form-decor-line {
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 4px;
  background: linear-gradient(90deg, #000, #000 50%, transparent 50%, transparent);
  background-size: 20px 100%;
}

.form-control {
  padding: 1rem 0;
  border-radius: 0;
  border-color: #ddd;
  transition: all 0.3s ease;
  box-shadow: none !important;
  padding-left: 1.5rem;
  padding-right: 1.5rem;
}

.form-control:focus {
  border-color: #000;
  outline: none;
}

.btn-dark {
  background-color: #000;
  color: #fff;
  border-radius: 0;
  border: none;
  padding: 0.75rem 2rem;
  font-weight: 400;
  letter-spacing: 1px;
  transition: all 0.3s ease;
  display: inline-flex;
  align-items: center;
  position: relative;
  overflow-x: hidden;
  margin-left: 1.5rem;
}

.btn-dark:hover {
  background-color: #333;
}

.btn-dark i {
  transition: transform 0.3s ease;
}

.btn-dark:hover i {
  transform: translateX(5px);
}

/* Выравнивание высоты блоков на больших экранах */
@media (min-width: 992px) {
  .contact-block,
  .contact-form {
    height: 100%;
  }
}

/* Адаптивные стили */
@media (max-width: 991px) {
  .contacts-page {
    padding-right: 1.5rem;
  }

  .contact-form .form-control {
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .btn-dark {
    margin-left: 1rem;
  }
}

@media (max-width: 767px) {
  .contacts-page {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
  
  .contact-block, .contact-form {
    padding: 2rem !important;
  }
  
  .decor-circle {
    display: none;
  }

  .contact-form .form-control {
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
    padding-left: 1rem;
    padding-right: 1rem;
  }
  
  .btn-dark {
    margin-left: 1rem;
  }
  
  /* Убираем flex-структуру на мобильных */
  .col-12.d-flex {
    display: block !important;
  }
}

/* Дополнительные стили для объединенного блока */
.contact-block > div:first-child {
  margin-bottom: 3rem;
}

/* Улучшение отображения формы на всех экранах */
.wide-inputs .form-control {
  width: calc(100% - 3rem);
  margin-left: 1.5rem;
  margin-right: 1.5rem;
}

@media (max-width: 991px) {
  .wide-inputs .form-control {
    width: calc(100% - 2rem);
    margin-left: 1rem;
    margin-right: 1rem;
  }
}

/* Гарантируем, что кнопка формы не выходит за границы */
form.wide-inputs button {
  margin-top: 1rem;
}
</style>