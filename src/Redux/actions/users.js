import { createAsyncThunk } from "@reduxjs/toolkit";
import axios from "axios"


const sign_in = createAsyncThunk("sign_in", async (payload) => {
  try {
    let { email, password } = payload;

    const response = await axios.post("http://localhost:3000/api/user/login", {
      email: email,
      password: password,
    });

    if (response.data.user) {
      localStorage.setItem("token", response.data.token);
      console.log("successfully logged in");
      return {
        user: response.data.user,
      };
    } else {
      throw new Error("User not found"); // Throw an error for the error case
    }
  } catch (error) {
    console.log(error.message);

    // Handle the 400 error and return it as part of the rejected action
    if (error.response && error.response.status === 400) {
      throw new Error("Invalid input. Please check your email and password.");
    }

    throw error; // Rethrow the error for error handling in your component
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

export const sign_out = createAsyncThunk('sign_out', async (_, thunkAPI) => {
  try {
    // Perform the asynchronous operation (e.g., remove the token from localStorage)
    localStorage.removeItem('token');

    // Return a response or data you want to include in the action
    return null;
  } catch (error) {
    // Handle any errors here
    return thunkAPI.rejectWithValue(error.message);
  }
});

const sign_up = createAsyncThunk('sign_up', async (body, { rejectWithValue }) => {
  try {
    const response = await axios.post("http://localhost:3000/api/user/register", body);
    return response.data;
  } catch (error) {
    if (error.response) {
      // The server responded with an error status code (e.g., 400)
      console.log("Server error response:", error.response.data);
      return rejectWithValue(error.response.data); // Pass the server error data to the Redux store
    } else if (error.request) {
      // The request was made, but no response was received
      console.log("No response received from server:", error.request);
    } else {
      // Something else happened while setting up the request
      console.log("Error setting up the request:", error.message);
    }
    throw error; // Re-throw the error to propagate it further
  }
});


const userActions = {sign_in, sign_out, sign_up, authenticate}
export default userActions 