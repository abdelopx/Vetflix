<template>

<loading v-if="isLoading"></loading>
  <div v-else>
      <card-list></card-list>
  </div>
</template>

<script>
import CardList from '../components/Cards/CardList.vue';
export default {
    components:{
        CardList,
    },
    created() {
        this.fetchData();
    },
    data() {
        return {
            isLoading: false,
        };
    },
    methods: {
        async fetchData() {
            this.isLoading = true;
            try {
                (
                    await this.$store.dispatch('shows/getShows'),
                    await this.$store.dispatch('movies/getMovies')
                    )
            } catch (err) {
                console.log(err);
            }
            this.isLoading = false;
        },
        

}
}
</script>

<style>

</style>