<template>
<div v-if="isLoading">
    <loading></loading>
</div>
<div v-else>
    <Header></Header>
    <card-list></card-list>
</div>
</template>

<script>

import Header from '../components/Header.vue';
import CardList from '../components/Cards/CardList.vue';
export default {
    components:{
        Header,
        CardList,
    },
    created() {
        this.fetchData();
    },
    data() {
        return {
            isLoading: false,
        }
    },
    methods: {
        async fetchData() {
            this.isLoading = true;
            try {
                    await this.$store.dispatch('shows/getShows');
                    await this.$store.dispatch('movies/getMovies');
            } catch (err) {
                console.log(err);
            }
            this.isLoading = false;
        }
    }
}
</script>

<style scoped>



</style>