import {createRouter, createWebHistory} from 'vue-router';
import store from './store/index.js'


import HomePage from './pages/HomePage.vue';
import VideoPage from './pages/VideoPage.vue'
import ContentPage from './pages/ContentPage.vue';

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: HomePage },

        {path: '/trailer/:trailerId', component: VideoPage, props: true},

        {path: '/shows', component:ContentPage, props: true},

        {path: '/movies', component:ContentPage, props: true}

    ]
});

router.beforeEach(function(to, from, next) {
        store.dispatch('shows/getShows')
        .then(next);
},

);
router.beforeEach(function(to, from, next) {
    store.dispatch('movies/getMovies')
    .then(next);
},

);


export default router;