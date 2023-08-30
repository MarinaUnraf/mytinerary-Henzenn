import { createReducer } from "@reduxjs/toolkit";
import citiesActions from "../actions/cities";


const initialState = {
    cities: [{
        name:"",
        country: "",
        description: "",
        urlImage: "",
        itineraries:[{}]
    }]
}
const citiesReducer = createReducer(initialState, (builder)=>{

            return builder
                    .addCase(citiesActions.get_cities,(state,action)=>{
                        const newState = {...state, cities: action.payload.cities}
                        return newState
                    })
})

export default citiesReducer