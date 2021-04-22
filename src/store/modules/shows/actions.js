export default {
    async getShows(context) {
        const response = await fetch(`https://api.themoviedb.org/3/trending/tv/week?api_key=`+process.env.VUE_APP_KEY+ `&region=US`);

        const responseData = await response.json();

        const shows = [];
        for (const key in responseData.results) {
            const show = {
                id: responseData.results[key].id,
                name: responseData.results[key].name,
                overview: responseData.results[key].overview,
                poster_path: responseData.results[key].poster_path,
                backdrop_path: responseData.results[key].backdrop_path,
                vote_average : responseData.results[key].vote_average,
            }
            shows.push(show);
        }
        context.commit('setShows',shows);
    },
    async fetchTrailer(_, payload) {
        const response = await fetch(`https://api.themoviedb.org/3/tv/${payload}/videos?api_key=`+process.env.VUE_APP_KEY+`&language=en-US`);

        const responseData = await response.json();
        
        return responseData.results[0].key;
    }
}