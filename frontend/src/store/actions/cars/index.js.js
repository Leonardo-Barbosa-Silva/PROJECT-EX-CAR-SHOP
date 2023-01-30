import { createAction } from "@reduxjs/toolkit"




export const addCar = createAction('ADD_CAR')
export const addCars = createAction('ADD_CARS')

/*
export const addCar = function(car) {

    return {
        type: 'ADD_CAR',
        payload: car
    }
}
*/