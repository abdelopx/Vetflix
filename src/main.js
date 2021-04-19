import { createApp } from 'vue'
import App from './App.vue'



import './assets/tailwind.css'
import "tailwindcss/tailwind.css"

import NavBar from './components/NavBar.vue';
import HomePage from './pages/HomePage.vue';

const app = createApp(App);

app.component('nav-bar',NavBar);
app.component('home-page',HomePage);


app.mount('#app');


