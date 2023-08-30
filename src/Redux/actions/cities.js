
/* method for creating actions por redux */

import { createAction } from "@reduxjs/toolkit";


const get_cities = createAction('get_cities', (array)=>{
            return {
                payload: {
                    cities: array
                }
            }

})
const citiesActions = { get_cities}
export default citiesActions
