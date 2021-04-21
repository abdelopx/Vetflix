<template>

<nav :class="{ 'scrolled': !view.atTopOfPage }"  class="transition duration-700 flex justify-between font-medium text-white fixed inset-x-0 h-16 top-0 bg-opacity-0">
<div class="flex m-2">
  <div class="mr-7">
      <router-link to="/"><img width="145" height="145" src="https://fontmeme.com/permalink/210419/dfd1e6030f57a8e561cf9c748aab2fb3.png" alt="netflix-font" border="0"></router-link>
  </div>
 
    <div class="flex p-3">
      <a href="" class="mx-5">Tv Shows</a>
      <a href="" class="mx-5">Movies</a>
      <a href="" class="mx-5">Recently Added</a>
      <a href="" class="mx-5">My List</a>
    </div>
  </div>
  <div class="p-3 flex gap-4">
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