import { createApp } from 'vue'
import App from './App.vue'
import 'bootstrap/dist/css/bootstrap.min.css'
import 'bootstrap/dist/js/bootstrap.bundle.js'
import router from './components/routingtablamultiplicar/Router'
// eslint-disable-next-line
import Popper from 'popper.js'


createApp(App).use(router).mount('#app')
