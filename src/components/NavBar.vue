<template>

<nav :class="{ 'scrolled': !view.atTopOfPage }"  class="transition duration-700 flex justify-between text-white fixed inset-x-0 h-16 top-0 bg-opacity-0">
<div class="flex m-2">
  <div class="mr-7">
      <a class="" href="/"><img width="145" height="145" src="https://fontmeme.com/permalink/210419/dfd1e6030f57a8e561cf9c748aab2fb3.png" alt="netflix-font" border="0"></a>
  </div>
 
    <div class="flex p-3">
      <a href="" class="mx-5">Tv Shows</a>
      <a href="" class="mx-5">Movies</a>
      <a href="" class="mx-5">Recently Added</a>
      <a href="" class="mx-5">My List</a>
    </div>
  </div>
  <div class="p-3">
      <input class="bg-black text-white outline-none rounded-full py-2 px-4" type="text" name="" id="" placeholder="Search Here">
  </div>
</nav>
</template>

<script>
export default {
   data () {
    return {
        view: {
            atTopOfPage: true
        }
    }
},

// a beforeMount call to add a listener to the window
beforeMount () {
    window.addEventListener('scroll', this.handleScroll);
},

methods: {
    // the function to call when the user scrolls, added as a method
    handleScroll(){
        // when the user scrolls, check the pageYOffset
        if(window.pageYOffset>0){
            // user is scrolled
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
            // user is at top of page
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    }
}

}
</script>

<style>
nav.scrolled {
    @apply bg-black;
    border-bottom: 0px;
}

</style>