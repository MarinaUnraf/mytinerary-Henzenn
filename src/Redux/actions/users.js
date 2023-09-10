import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const sign_in = createAsyncThunk("sign_in", async (payload) => {
  try {
    let { email, password } = payload;

    const user = await axios
      .post("http://localhost:3000/api/user/login", {
        email: email,
        password: password,
      })
      .then((response) => {
        localStorage.setItem("token", response.data.token);
        console.log("succesfully logged in");
        return response.data.user;
      })
      .catch((error) =>
        error.response.data.message.forEach((message) => console.log(message))
      );
    return {
      user: user,
    };
  } catch (e) {
    console.log(e.message);
  }
});


const authenticate = createAsyncThunk('authenticate', async ()=>{
        
        try {
           let token = localStorage.getItem("token"); 
            console.log(token);
           let user = await axios.post("http://localhost:3000/api/user/authenticated",null, {
                headers: {
                    Authorization: 'Bearer '+token
                }
            })
            .then((response)=>{
                console.log("authenticated succesfully");
                localStorage.setItem("token", response.data.token)
                return response.data.user
            })
            return {
                user: user
            }
        
        } catch (error) {
            console.log(error.message);
        }


})

const sign_out = createAsyncThunk( 'sign_out', async ()=>{
        try {
            await axios.post("http://localhost:3000/api/user/logout")
            .then((response) => {
                    localStorage.removeItem("token");
                
                console.log(response)})

        } catch (error) {
            console.log(error.message);
        }
})



const userActions = {sign_in, sign_out, authenticate}
export default userActions 