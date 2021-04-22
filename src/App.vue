<template>

  <nav-bar></nav-bar>
  <router-view></router-view>
  <p class="text-center text-white font-medium">Made by abdelopx ❤ https://github.com/abdelopx</p>

</template>

<script>


export default {
  name: 'App',
  created() {
    // this.$store.dispatch('shows/fetchTrailer');
    // this.$store.dispatch('movies/fetchTrailer');
  }
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
  background-color: black;
}
 
</style>


<style src="./assets/tailwind.css"/>