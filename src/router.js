import {createRouter, createWebHistory} from 'vue-router';
import store from './store/index.js'


import HomePage from './pages/HomePage.vue';
import VideoPage from './pages/VideoPage.vue'

const router = createRouter({
    history: createWebHistory(),
    routes:[
        { path: '/', component: HomePage },

        {path: '/trailer/:trailerId', component: VideoPage, props: true}

    ]
});

router.beforeEach(function(to, from, next) {
        store.dispatch('shows/getShows')
        .then(next);
},
);


export default router;