import { createReducer } from "@reduxjs/toolkit";

const INITAL_STATE = []




export const itemsCartReducer = createReducer(INITAL_STATE, {
    'ADD_ITEM_CART': (state, action) => ([ ...state, action.payload ]),
    'REMOVE_ITEM_CART': (state, action) => (state.filter( (item) => item._id !== action.payload))
})