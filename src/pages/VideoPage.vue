<template>
  <div class="flex flex-wrap justify-center mt-16 h-512px">
          <embed class="w-full" :src="trailerLink">
  </div>
</template>

<script>
export default {
    props:['trailerId'],

    computed: {
        trailerLink() {
            return 'https://www.youtube.com/embed/'+this.trailerId +'?autoplay=1';
        }
    }

}
</script>

<style>
embed {
    height: 90vh;
}
</style>