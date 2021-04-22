import { createStore } from 'vuex';

import showsModule from './modules/shows/index.js';
import moviesModule from './modules/movies/index.js'



const store = createStore({
    modules: {
        shows :showsModule,
        movies: moviesModule,
        
    },
});


export default store;