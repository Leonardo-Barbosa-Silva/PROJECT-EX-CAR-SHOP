import { configureStore } from '@reduxjs/toolkit';

import { carsReducer } from './reducers/cars'
import { layoutReducer } from './reducers/layout'
import { itemsCartReducer } from './reducers/cart';


const store = configureStore({
    reducer: {
        cars: carsReducer,
        layout: layoutReducer,
        cart: itemsCartReducer
    }
})

export default store;