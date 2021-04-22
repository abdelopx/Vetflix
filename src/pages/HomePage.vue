<template>

<Header></Header>
<card-list></card-list>


</template>
<script>

import Header from '../components/Header.vue';
import CardList from '../components/Cards/CardList.vue';
export default {
    components:{
        Header,
        CardList,
    },
    data() {
        return {
            isLoading: true,
        }
    },
}
</script>

<style scoped>



</style>