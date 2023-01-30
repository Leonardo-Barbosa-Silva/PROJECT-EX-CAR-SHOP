import axios from 'axios'


export default axios.create({
    baseURL: 'http://localhost:50005/v1/api/cars'
})