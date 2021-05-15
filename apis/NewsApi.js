import axios from 'axios';


export default axios.create({
    baseURL: 'https://newsapi.org/v2/'
});

//top-headlines?country=us&apiKey=6366504a3f964183b2083cba391d14d2