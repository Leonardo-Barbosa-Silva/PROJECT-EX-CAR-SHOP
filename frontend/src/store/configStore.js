import { configureStore } from '@reduxjs/toolkit';

import { carsReducer } from './reducers/cars'
import { layoutReducer } from './reducers/layout'
import { itemsCartReducer } from './reducers/cart';
import { authReducer } from './reducers/auth';



const store = configureStore({
    reducer: {
        cars: carsReducer,
        layout: layoutReducer,
        cart: itemsCartReducer,
        auth: authReducer
    }
})

export default store;