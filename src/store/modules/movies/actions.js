export default {
    async getMovies(context) {
        const response = await fetch(`https://api.themoviedb.org/3/trending/movies/week?api_key=`+process.env.VUE_APP_KEY+ `&region=US`);
        const responseData = await response.json();


        const movies = [];
        for (const key in responseData.results) {
            const movie = {
                id: responseData.results[key].id,
                name: responseData.results[key].title,
                overview: responseData.results[key].overview,
                poster_path: responseData.results[key].poster_path,
                backdrop_path: responseData.results[key].backdrop_path,
                vote_average : responseData.results[key].vote_average,
            }
            movies.push(movie);
        }
        context.commit('setMovies',movies);
    },
    async fetchTrailer(_, payload) {
        const response = await fetch(`https://api.themoviedb.org/3/movie/${payload}/videos?api_key=`+process.env.VUE_APP_KEY+`&language=en-US`);

        const responseData = await response.json();
        
        return responseData.results[0].key;
    }

}