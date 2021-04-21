import { createStore } from 'vuex';

import showsModule from './modules/shows/index.js';



const store = createStore({
    modules: {
        shows :showsModule,
        
    },
});


export default store;