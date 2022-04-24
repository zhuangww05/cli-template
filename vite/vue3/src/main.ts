import { createApp } from 'vue'
import App from './App.vue'

import store from '@/store/index'
import router from '@/router/index'

import ElementPlus from 'element-plus'
import 'element-plus/dist/index.css'

createApp(App).use(router).use(store).use(ElementPlus).mount('#app')
