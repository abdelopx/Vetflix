import { createApp } from 'vue'
import store from './store/index.js'
import router from './router.js'
import App from './App.vue'


import { library } from '@fortawesome/fontawesome-svg-core'
import { fas } from '@fortawesome/free-solid-svg-icons'
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import './assets/tailwind.css'
import "tailwindcss/tailwind.css"



import NavBar from './components/NavBar.vue';


library.add(fas)


const app = createApp(App);

app.component('nav-bar',NavBar);
app.component('fa', FontAwesomeIcon)

app.use(router);
app.use(store);


app.mount('#app');


