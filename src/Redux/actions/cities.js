
/* method for creating actions por redux */

import { createAction } from "@reduxjs/toolkit";


const get_cities = createAction('get_cities', (array)=>{
            return {
                payload: {
                    cities: array
                }
            }

})

const get_city = createAction('get_city', (array)=>{
            return {
                payload: {
                    city: array
                }
            }

})

const citiesActions = { get_cities, get_city}
export default citiesActions
