
import { createApp } from 'vue'
import App from './App.vue'
import './assets/tailwind.css'
import router from './router'
import loading from './plugins/loading/loading.js'


createApp(App).use(router,loading).mount('#app')

