<template>
<div>
<section-title></section-title>
</div>

<div class="flex justify-around flex-wrap ">
    <single-card v-for="show in fetchedShows"
    :key="show.id"
    :id="show.id"
    :path="$route.path"
    :name="show.name"
    :poster_path="show.poster_path"
    :overview="show.overview"
    :vote_average="show.vote_average"
    ></single-card>
</div>



</template>

<script>
import SingleCard from './SingleCard.vue';
import SectionTitle from './SectionTitle.vue';

export default {
    components: {
        SingleCard,
        SectionTitle,
    },
    data() {
        return {
            shows: [],
        };
    },
    computed: {
        fetchedShows() {
            if(this.$route.path === '/shows') {
                return this.$store.getters['shows/getShows'];
            }
            else if(this.$route.path === '/movies') {
                return this.$store.getters['movies/getMovies'];
            }
            else {
                return this.$store.getters['shows/getShows'];
            }
        },
    }
}
</script>

<style>

</style>