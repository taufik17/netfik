const API_KEY = 'f49bf4172e7817e8cfdb26443c965e12';

const requests = {
    fetchTrending: `/trending/all/week?api_key=${API_KEY}&language=en-US`,
    fetchNetflixOriginals: `/discover/tv?api_key=${API_KEY}&with_networks=213`,
    fetchTopRated: `/movie/top_rated?api_key=${API_KEY}&language=en-US`,
    fetchActionMovies: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    fetchComedyMovies: `/discover/movie?api_key=${API_KEY}$with_genres=35`,
    fetchHorrorMovies: `/discover/movie?api_key=${API_KEY}$with_genres=27`,
    fetchRomanceMovies: `/discover/movie?api_key=${API_KEY}$with_genres=1079`,
    fetchDocumentaries: `/discover/movie?api_key=${API_KEY}$with_genres=99`,
}

export default requests;