import { createReducer } from "@reduxjs/toolkit"




const INITAL_STATE = {
    showAlert: false,
	messages: []
}


export const layoutReducer = createReducer(INITAL_STATE, {
	'ADD_MSG': (state, action) => ({
        ...state,
        messages: [ ...state.messages, action.payload ]
    }),
    
    'REMOVE_MSG': (state, action) => ({
        ...state,
        messages: state.messages.filter( (msg) => (msg !== action.payload))
    })
})