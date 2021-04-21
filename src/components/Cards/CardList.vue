<template>
<div>
<section-title></section-title>
</div>
<div class="flex flex-wrap ml-5 gap-x-4">
    <single-card v-for="show in fetchedShows"
    :key="show.id"
    :id="show.id"
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
            return this.$store.getters['shows/getShows'];
        }
    }
}
</script>

<style>

</style>