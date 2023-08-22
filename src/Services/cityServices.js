import axios from 'axios'

const citiesQueries = axios.create({
    baseURL:'http://localhost:3000/api/cities'

})
export const getAllCities = async (queryParams ="") =>{

            try {
                const response = await citiesQueries(queryParams)
                return response.data
                
            } catch (error) {
                return console.log(error);
            }
}
