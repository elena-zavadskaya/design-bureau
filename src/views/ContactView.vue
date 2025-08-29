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

      <div class="row gx-4 gx-lg-5 align-items-stretch">
        <!-- Блок Design & Decoration -->
        <div class="col-12 col-md-6 d-flex flex-column mb-4 mb-md-0">
          <div class="contact-block p-4 p-lg-5 position-relative h-100">
            <div class="decor-corner top-left"></div>
            <div class="decor-corner top-right"></div>
            <div class="decor-corner bottom-left"></div>
            <div class="decor-corner bottom-right"></div>
            
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
                  <div class="copyable" @click="copyToClipboard('+79152254343')">+7 915 225-43-43</div>
                </div>
              </li>
              
              <li class="mb-4 d-flex align-items-start">
                <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                  <i class="bi bi-envelope text-white"></i>
                </div>
                <div class="contact-detail">
                  <div class="contact-label">Email</div>
                  <div class="copyable" @click="copyToClipboard('office@esse.com.ru')">office@esse.com.ru</div>
                </div>
              </li>
              
              <li class="d-flex align-items-start">
                <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                  <i class="bi bi-geo-alt text-white"></i>
                </div>
                <div class="contact-detail">
                  <div class="contact-label">Адрес</div>
                  <div class="copyable" @click="copyToClipboard('Зубовский бульвар, дом 16-20, стр. 1, этаж 1, помещение XIV, комната 1, Москва, 119034')">
                    Зубовский бульвар, дом 16-20, стр. 1,<br>
                    этаж 1, помещение XIV, комната 1<br>
                    Москва, 119034
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>

        <!-- Блок Art & Poster -->
        <div class="col-12 col-md-6 d-flex flex-column">
          <div class="contact-block p-4 p-lg-5 position-relative h-100">
            <div class="decor-corner top-left"></div>
            <div class="decor-corner top-right"></div>
            <div class="decor-corner bottom-left"></div>
            <div class="decor-corner bottom-right"></div>
            
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
                  <div class="copyable" @click="copyToClipboard('+79152254343')">+7 915 225-43-43</div>
                </div>
              </li>
              
              <li class="d-flex align-items-start">
                <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                  <i class="bi bi-instagram text-white"></i>
                </div>
                <div class="contact-detail">
                  <div class="contact-label">Instagram</div>
                  <div>
                    <span class="copyable social-link" @click="copyToClipboard('@esse_art_poster')">@esse_art_poster</span><br>
                    <span class="copyable social-link" @click="copyToClipboard('@esse_poster_shop')">@esse_poster_shop</span> (каталог)
                  </div>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </div>

    <!-- Toast уведомление -->
    <transition name="fade">
      <div v-if="showToast" class="copied-toast">
        <i class="bi bi-check-circle-fill"></i> Скопировано в буфер обмена
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'ContactsPage',
  data() {
    return {
      showToast: false
    }
  },
  methods: {
    async copyToClipboard(text) {
      try {
        await navigator.clipboard.writeText(text);
        this.showToastMessage();
      } catch (err) {
        console.error('Ошибка при копировании: ', err);
        // Fallback для браузеров без поддержки Clipboard API
        const textArea = document.createElement('textarea');
        textArea.value = text;
        document.body.appendChild(textArea);
        textArea.select();
        document.execCommand('copy');
        document.body.removeChild(textArea);
        this.showToastMessage();
      }
    },
    showToastMessage() {
      this.showToast = true;
      setTimeout(() => {
        this.showToast = false;
      }, 3000);
    }
  }
}
</script>

<style scoped>
.contacts-page {
  font-family: 'Helvetica Neue Cyr', sans-serif;
  padding-top: 8rem;
  padding-bottom: 6rem;
  position: relative;
  overflow-x: hidden;
  background-color: #fafafa;
  min-height: 63.5vh;
}

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

.copyable {
  cursor: pointer;
  transition: all 0.3s ease;
}

.copyable:hover {
  color: #444;
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

@media (min-width: 992px) {
  .contact-block {
    height: 100%;
  }
}

@media (max-width: 991px) {
  .contacts-page {
    padding-right: 1.5rem;
  }
}

@media (max-width: 767px) {
  .contacts-page {
    padding-top: 6rem;
    padding-bottom: 4rem;
  }
  
  .contact-block {
    padding: 2rem !important;
  }
  
  .decor-circle {
    display: none;
  }
}

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
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.15);
  display: flex;
  align-items: center;
  gap: 10px;
}

.copied-toast i {
  font-size: 1.2rem;
}

/* Анимации для toast */
.fade-enter-active,
.fade-leave-active {
  transition: opacity 0.4s;
}
.fade-enter-from,
.fade-leave-to {
  opacity: 0;
}
</style>