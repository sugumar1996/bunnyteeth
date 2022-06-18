import axios from 'axios'

export const Base_URL = () => {
    let url;
    if (process.env.REACT_APP_ENV === 'development') {
        url = 'https://www.alphabet.school/'
    }
    if (process.env.REACT_APP_ENV === 'staging') {
        url = 'https://www.alphabet.school/'
    }
    if (process.env.REACT_APP_ENV === 'production') {
        console.log("production if");
        url = 'https://www.alphabet.school/'
    }
    return url;
}

export const API_VERSION = "wp-json/wp/v2/"

const instance = axios.create({
    baseURL: Base_URL()
});

export default instance