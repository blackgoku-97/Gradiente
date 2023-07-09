import axios from 'axios';

const movieDB = axios.create({
    baseURL: 'https://api.themoviedb.org/3/movie',
    params: {
        api_key: 'a35628f813c130c880c5bcda636e3bf1',
        language: 'es-ES'
    }
})

export default movieDB;