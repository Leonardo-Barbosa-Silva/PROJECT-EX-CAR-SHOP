import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = {
    isLogged: false
}



export const authReducer = createReducer(INITIAL_STATE, {
    'LOGIN': (state, action) => ({ ...state, isLogged: true }),
    'LOGOUT': (state, action) => ({ ...state, isLogged: false })
})