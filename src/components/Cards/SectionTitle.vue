<template>
  <div class="ml-4 text-white text-xl font-bold mt-16">
      <h1 v-if="isMovies">Movies</h1>
      <h1 v-else>TV Shows</h1>
  </div>
</template>

<script>
export default {
  computed: {
    isMovies() {
      if (this.$route.path === '/movies') {
        return true
      }
      else {
        return false;
      }
    },
    isShows() {
      if (this.$route.path === '/shows') {
        return true
      }
      else {
        return false;
      }
    }

  }

}
</script>

<style>

</style>