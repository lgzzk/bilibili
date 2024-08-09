import {createApp} from 'vue'
import './style.css'
import router from './router'
import App from './App.vue'
import {setCookie} from "@/utils/request";

setCookie()

createApp(App)
    .use(router)
    .mount('#app')
