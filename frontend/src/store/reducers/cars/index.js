import { createReducer } from "@reduxjs/toolkit";

const INITIAL_STATE = []




export const carsReducer = createReducer(INITIAL_STATE, {
	'ADD_CAR': (state, action) => ([ ...state, action.payload ]),
	'ADD_CARS': (state, action) => ([ ...action.payload ])
})

/*
export const carsReducer = function(state = INITIAL_STATE, action) {

	switch(action.type) {

		case 'ADD_CAR':
			return [ ...state, action.payload ]

		case 'ADD_CARS':
			return [ ...action.payload ]

		default:
			return state
	}

}
*/