import apiCars from '../../../services/cars/api';

import { addCars } from '../../actions/cars/index.js';
import { addCar } from '../../actions/cars/index.js';


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