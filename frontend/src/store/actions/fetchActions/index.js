import apiCars from '../../../services/cars/api';
import apiUsers from '../../../services/users/api'

import { addCars } from '../../actions/cars/index.js';
import { addCar } from '../../actions/cars/index.js';
import { login } from '../auth';


export const getAllCars = () => (
    (dispatch) => {
        apiCars.get('/')
            .then( (resp) => {
                dispatch(addCars(resp.data.items))
            })
            .catch(console.log)
    }
)


export const setCar = (car) => (
    (dispatch) => {
        apiCars.post('/', car)
            .then( (resp) => {
                dispatch(addCar(resp.data.item))
            })
            .catch(console.log)
    }
)


export const loginUser = (form) => (
    (dispatch) => {
        apiUsers.post('/login', form)
            .then( (resp) => {
                localStorage.setItem('userToken', resp.data.token)
                dispatch(login())

                window.location.pathname = '/add'
            })
            .catch(console.log)
    }
)