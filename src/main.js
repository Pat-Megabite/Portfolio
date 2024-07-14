import { createApp } from 'vue'
import App from './App.vue'
import router from './router'
import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap"
import Particles from 'particles.vue3'


const app = createApp(App)

app.use(router)
app.use(Particles)

app.mount('#app')
