const API_KEY = process.env.API_KEY;

// eslint-disable-next-line import/no-anonymous-default-export
export default {
    fetchTrending: {
        title: 'Trending',
        url: `/trending/movie/week?api_key=${API_KEY}`,
    },
    fetchTopRated: {
        title: 'Top Rated',
        url: `/movie/top_rated?api_key=${API_KEY}`,
    },
    fetchActionMovies: {
        title: 'Action',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=28`,
    },
    fetchAnimation: {
        title: 'Animation',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=16`,
    },
    fetchComedyMovies: {
        title: 'Comedy',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=35`,
    },
    fetchHorrorMovies: {
        title: 'Horror',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=27`,
    },
    fetchRomanceMovies: {
        title: 'Romance',
        url: `/discover/movie?api_key=${API_KEY}&with_genres=10749`,
    },
}