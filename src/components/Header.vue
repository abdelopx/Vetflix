<template>
    <div>
        <header class="banner mb-4" :style="{ 'background-image': 'url(' + imageUrlBackdrop + ')' }">
            <img src="" alt="">
            <div class="pt-32 ml-10 font-medium text-lg md:text-4xl lg:text-6xl">
                <h1>{{name}}</h1>
            </div>
            
            <div class="flex flex-col flex-nowrap justify-center gap-4 mt-12 w-1/3 min-w-484">
            <div class="title font-medium text-lg mb-4 ml-10 ">
                <p class="hidden overflow-clip overflow-hidden lg:inline-flex">{{overview}}...</p>
            </div>
            <div class="flex flex-col min-w-177 md:flex-row  ">
            
                <button class="bg-white text-black font-bold py-1 px-8 ml-10 w-32 rounded flex-grow-0 mb-4 mt-4">
                <fa icon="play" />
                Play
            </button>
                <button class="bg-gray-300 bg-opacity-30 hover:animate-ping text-white w-32 font-bold flex-grow-0 py-1 px-4 rounded ml-10 md:ml-8 mb-4 mt-4 ">
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
            imageUrlPoster: null,
            imageUrlBackdrop: null,
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
                this.imageUrlBackdrop = shows[random].backdrop_path;
                this.imageUrlPoster = shows[random].poster_path;
                this.imageUrlBackdrop = 'https://image.tmdb.org/t/p/original' + this.imageUrlBackdrop;
                this.name = shows[random].name;
                this.overview = shows[random].overview.substr(0,235);
        },
        
        
        
    }
    }
</script>

<style scoped>
    .banner {
        /* background-image: url('https://image.tmdb.org/t/p/original/aiy35Evcofzl7hASZZvsFgltHTX.jpg'); */
        background-position: 0px 0px;
        background-size: cover;
        background-repeat: no-repeat;
        color: white;
        height: 500px;
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