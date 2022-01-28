import { createApp } from 'vue'
import App from './App.vue'
import router from './router'

import 'element-plus/dist/index.css'
import './assets/markdown.css';

import SSUI from '../packages';
import Preview from './components/Preview.vue';

const app = createApp(App)
app.component('Preview', Preview)
app.use(SSUI).use(router).mount('#app')
