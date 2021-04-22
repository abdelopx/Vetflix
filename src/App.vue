<template>

  <nav-bar></nav-bar>
  <router-view></router-view>
  <p class="text-center text-white font-medium mt-48">Made by abdelopx ❤ https://github.com/abdelopx</p>

</template>

<script>


export default {
  name: 'App',
  // async created() {
  //   try {
  //   this.isLoading = true;
  //   await this.$store.dispatch('shows/getShows');
  //   await this.$store.dispatch('movies/getMovies');
  //   } catch (err) {
  //     console.log(err);
  //   }
  //   this.isLoading = false;
  // },
  // data() {
  //   return {
  //     isLoading: false,
  //   };
  // },


}

 
</script>

<style>
@import url("https://fonts.googleapis.com/css2?family=Martel+Sans:wght@200&display=swap");
* {
  box-sizing: border-box;
}
html {
  font-family: 'Martel Sans', sans-serif;
}
body {
  margin: 0;
  background-color: black
}
 
</style>


<style src="./assets/tailwind.css"/>