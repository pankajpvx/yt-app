import axios from "axios";
const KEY = 'AIzaSyB4ftwlRdhs_tC_WL2ZqkGHA7JpejEzyvw';

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3',
    params: {
        part: 'snippet',
        type: 'video',
        maxResults: 50   ,
        key: KEY
    }
})
