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
              <span class="brand-subtitle">E.S.S.E. Design & Decoration</span>
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
              
              <li class="mb-4 d-flex align-items-start">
                <div class="contact-icon bg-dark d-flex align-items-center justify-content-center">
                  <svg class="vk-icon-small" width="16" height="16" viewBox="0 0 24 24" fill="white">
                    <path d="M15.07 2H8.93C3.33 2 2 3.33 2 8.93V15.07C2 20.67 3.33 22 8.93 22H15.07C20.67 22 22 20.67 22 15.07V8.93C22 3.33 20.67 2 15.07 2M18.15 16.27H16.69C16.14 16.27 15.97 15.82 15 14.83C14.12 14 13.74 13.88 13.53 13.88C13.24 13.88 13.15 13.96 13.15 14.38V15.69C13.15 16.04 13.04 16.26 12.11 16.26C10.57 16.26 8.86 15.32 7.66 13.59C5.85 11.05 5.36 9.13 5.36 8.75C5.36 8.54 5.43 8.34 5.85 8.34H7.32C7.69 8.34 7.83 8.5 7.97 8.9C8.69 10.96 9.89 12.76 10.38 12.76C10.57 12.76 10.65 12.66 10.65 12.25V10.1C10.6 9.12 10.07 9.03 10.07 8.68C10.07 8.5 10.21 8.34 10.44 8.34H12.73C13.04 8.34 13.15 8.5 13.15 8.88V11.77C13.15 12.08 13.28 12.19 13.53 12.19C13.75 12.19 14.05 12.08 14.37 11.74C15.43 10.57 16.16 8.76 16.16 8.76C16.28 8.55 16.43 8.34 16.81 8.34H18.18C18.57 8.34 18.72 8.68 18.6 8.97C18.34 9.94 16.41 12.05 16.43 12.05C16.27 12.27 16.21 12.35 16.43 12.65C16.58 12.88 17.09 13.49 17.43 13.91C18.05 14.7 18.53 15.28 18.66 15.59C18.78 15.9 18.66 16.27 18.15 16.27Z"/>
                  </svg>
                </div>
                <div class="contact-detail">
                  <div class="contact-label">ВКонтакте</div>
                  <a href="https://vk.com/esse.designdecoration" target="_blank" rel="noopener noreferrer" class="social-link">
                    vk.com/esse.designdecoration
                  </a>
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
              <span class="brand-subtitle">E.S.S.E. Art & Poster</span>
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

.vk-icon-small {
  width: 18px;
  height: 18px;
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