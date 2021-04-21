<template>
    <div>
        <header class="banner image" :style="{ 'background-image': 'url(' + imageUrl + ')' }">
            <div class="pt-32 ml-10 font-medium text-6xl">
                <h1>{{name}}</h1>
            </div>
            
            <div class="flex flex-col justify-center gap-4 mt-12 w-1/3">
            <div class="ml-10 font-medium text-lg">
                <p class="overflow-clip overflow-hidden">{{overview}}...</p>
            </div>
            <div>
            <button class="bg-white text-black font-bold py-2 px-8 ml-10 rounded ">
                <fa icon="play" />
                Play
            </button>
            <button class="bg-gray-300 bg-opacity-30 hover:animate-ping text-white font-bold py-2 px-8 rounded ml-4 ">
                <fa icon="plus" />
                My list
            </button>
            </div>
            
            </div>
        </header> 
        
    </div>

</template>

<script>
    export default {
        data() {
            return {
            imageUrl: null,
            overview: null,
            name: null,
            };
        },
        created() {
            this.getSelectedShow();
        },
        methods: {
            getSelectedShow() {
                const shows = this.$store.getters['shows/getShows'];
                const random = Math.floor(Math.random() * 21);
                this.imageUrl = shows[random].backdrop_path;
                this.imageUrl = 'https://image.tmdb.org/t/p/original' + this.imageUrl;
                this.name = shows[random].name;
                this.overview = shows[random].overview.substr(0,235);
        },
        
        
        
    }
    }
</script>

<style scoped>
    .banner {
        /* background-image: url('https://image.tmdb.org/t/p/original/6x8vW5utEZahp6V3sSWxCTW0mHW.jpg'); */
        background-position: 0px 0px;
        background-size: cover;
        background-repeat: no-repeat;
        color: white;
        height: 472px;
        box-shadow: inset 1px 1px 350px #000;
    }
    .overview {
        height: 100px;
    }
    button:hover {
    transform: scale(1.15);
    cursor: pointer;
    transition-duration: 0.8s;
}

  
</style>