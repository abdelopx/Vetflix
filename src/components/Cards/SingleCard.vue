<template>
<div class="mt-8">
    <img @click="getTrailer" class="card" :src="posterPath" alt="">
</div>

</template>
<script>
export default {
    props:['name','poster_path','backdrop_path','overview','vote_average','id','path'],
    computed: {
        posterPath() {
            return 'https://image.tmdb.org/t/p/original' + this.poster_path;
        },
    },
    methods: {
        async getTrailer() {
            let trailerId = null;
            try {
                if (this.path === '/shows') {
                    console.log(this.path);
                    trailerId = await this.$store.dispatch('shows/fetchTrailer',this.id);
                }
                else if (this.path === '/movies') {
                    trailerId = await this.$store.dispatch('movies/fetchTrailer',this.id);
                }
                else {
                    trailerId = await this.$store.dispatch('shows/fetchTrailer',this.id);
                }
            } catch (err) {
                console.log(err);
            }
            this.$router.push({path: `/trailer/${trailerId}`});
        },
    }

}
</script>

<style scoped>

div {
    height: 242px;
    width: 172px;
    background-size: contain;
    background-repeat: no-repeat;
    margin-bottom: 1.2rem;
}

img:hover {
    transform: scale(1.2);
    cursor: pointer;
    transition-duration: 1.1s;
}


</style>