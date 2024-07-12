// api.js
import axios from 'axios';

const API_KEY = 'eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiJmMTE1ZjI4MDM1YzY2M2Q2YzAzMGIzMzM1N2UxMmIxNiIsIm5iZiI6MTcyMDc3Mzk1My42NTA1MzMsInN1YiI6IjY2OGVjYWIxZmQ0YmU4Zjg0MTM5YzYzOCIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.U-7gn5WZFEJ59rdpkiIc8p8cTVmFAA2bsF_Qsct7b-M';

const api = axios.create({
    baseURL: 'https://api.themoviedb.org/3',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${API_KEY}`
    }
});

export const getNowPlayingMovies = () => {
    return api.get('/movie/now_playing?language=en-US&page=1')
        .then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching now playing movies:', error);
            throw error;
        });
};

export const getTopRatedMovies = () => {
    return api.get('/movie/top_rated?language=en-US&page=1')
        .then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching top-rated movies:', error);
            throw error;
        });
};

export const getPopularMovies = () => {
    return axios.get('http://10.0.2.2:8000/api/helodata')
        .then(response => response.data.results)
        .catch(error => {
            console.error('Error fetching popular movies:', error);
            throw error;
        });
};
