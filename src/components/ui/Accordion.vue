<!-- Accordion.vue -->
<template>
  <div class="accordion">
    <button class="accordion-header" @click="toggleAccordion">
      {{ title }}
      <span class="icon">{{ isOpen ? '−' : '+' }}</span>
    </button>
    <transition name="slide">
      <div class="accordion-content" v-show="isOpen">
        <slot></slot>
      </div>
    </transition>
  </div>
</template>

<script>
export default {
  name: 'Accordion',
  props: {
    title: {
      type: String,
      required: true
    }
  },
  data() {
    return {
      isOpen: false
    }
  },
  methods: {
    toggleAccordion() {
      this.isOpen = !this.isOpen;
    }
  }
}
</script>

<style scoped>
.accordion {
  margin-top: 3rem;
  border: 1px solid #eee;
  transition: all 0.3s ease;
}

.accordion:hover {
  border-color: #ddd;
}

.accordion-header {
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
  padding: 1.5rem;
  background: #fff;
  border: none;
  cursor: pointer;
  font-size: 1.1rem;
  font-weight: 500;
  text-align: left;
  color: #000;
  transition: all 0.3s ease;
  position: relative;
}

.accordion-header:hover {
  background: #fafafa;
}

.accordion-header::after {
  content: "";
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 1px;
  background: #eee;
}

.icon {
  font-size: 1.5rem;
  font-weight: 300;
  transition: transform 0.3s ease;
}

.accordion-content {
  padding: 1.5rem;
  background: #fff;
}

/* Анимации для аккордеона */
.slide-enter-active, .slide-leave-active {
  transition: all 0.4s ease;
  overflow: hidden;
}

.slide-enter, .slide-leave-to {
  max-height: 0;
  opacity: 0;
  padding: 0 1.5rem;
}

.slide-enter-to, .slide-leave {
  max-height: 1000px;
  opacity: 1;
}
</style>