import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import 'bootstrap/dist/css/bootstrap-grid.css'
import 'bootstrap/dist/css/bootstrap-utilities.css'
import '@/assets/styles/main.css'

const app = createApp(App)
app.use(router)
app.mount('#app')