import axios from 'axios'

export default axios.create({
    baseURL: "http://api.coingecko.com/api.v3"
})