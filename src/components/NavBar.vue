<template>

<nav :class="{ 'scrolled': !view.atTopOfPage }"  class="transition duration-700 flex justify-between font-medium text-white fixed inset-x-0 h-16 top-0 bg-opacity-0">
<div class="flex m-2">
  <div class="mr-7 flex-none">
      <router-link to="/"><img width="145" height="145" src="https://fontmeme.com/permalink/210419/dfd1e6030f57a8e561cf9c748aab2fb3.png" alt="netflix-font" border="0"></router-link>
  </div>
 
    <div class="flex py-3">
      <router-link class="mx-3" to="/shows">TV Shows</router-link> 
      <router-link class="mx-3" to="/movies">Movies</router-link> 
      <a href="" class="hidden md:inline-flex mx-5">Recently Added</a>
      <a href="" class="hidden md:inline-flex mx-5">My List</a>
    </div>
  </div>
  <div class="hidden md:inline-flex p-3 mr-3 flex gap-4">
      <input v-if="isSearch" class="text-black bg-opacity-0 border-white outline-none rounded-full py-2 px-4" type="text" placeholder="Search...">
      <button class="focus:outline-none" @click="toggleSearch"><fa class="w-8" icon="search" /></button>
  </div>
</nav>
</template>

<script>

export default {
   data () {
    return {
        isSearch: false,
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
    handleScroll(){
        
        if(window.pageYOffset>0){
           
            if(this.view.atTopOfPage) this.view.atTopOfPage = false
        }else{
           
            if(!this.view.atTopOfPage) this.view.atTopOfPage = true
        }
    },
    toggleSearch() {
        this.isSearch = !this.isSearch;
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