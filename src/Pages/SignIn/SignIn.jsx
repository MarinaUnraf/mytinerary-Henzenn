//import axios from "axios";
import { useRef, useState } from "react";
import { useDispatch} from "react-redux";
import userActions from "../../Redux/actions/users";
import { useNavigate } from "react-router-dom";
import Swal from "sweetalert2"; 

function SignIn() {
    const [error, setError] = useState("");
    const dispatch = useDispatch()
    const navigate = useNavigate()
   
  
    
    const emailInputRef = useRef();
    const passInputRef = useRef();

  const handlerSignIn = async (event) => {
  event.preventDefault();

  const email = emailInputRef.current.value;
  const password = passInputRef.current.value;

  if (!email || !password) {
    setError("Please enter both email and password.");
    return;
  }

 try {
  const response = await dispatch(userActions.sign_in({ email, password }));

  if (response.payload.user) {
    // Check if the response contains a user object
    Swal.fire({
      title: "Logged In!",
      text: "You have successfully logged in.",
      icon: "success",
      confirmButtonText: "OK",
    });

    // Redirect to another page or perform other actions as needed
    navigate("/");
  } else {
    // Handle other cases if needed
  }
} catch (error) {
  console.error("Authentication error:", error.message);

  // Display an error alert with the error message
  Swal.fire({
    title: "Error!",
    text: "Wrong email or password, please try again", // Display the error message
    icon: "error",
    confirmButtonText: "OK",
  });
}


};



      /* axios
        .post("http://localhost:3000/api/user/login", {
          email: emailInputRef.current.value,
          password: passInputRef.current.value,
        })
        .then((response) => {
          console.log(response.data.token);
          localStorage.setItem("token", response.data.token);
        })
        .catch((error) => {
          if (error.response) {
            // Check if error.response exists
            console.log(error.response.data.message); // Access error message
          } else {
            // Handle other errors (e.g., network errors)
            console.log("Network error:", error.message);
          }
        }); */
    

  


  return (
    <>
      <div className="container  h-screen md:flex mx-auto">
        <div className=" rounded-s-2xl relative overflow-hidden md:flex w-1/2 bg-gradient-to-r from-violet-500 to-fuchsia-500  i justify-around items-center hidden">
          <div>
            <h1 className="text-white font-bold text-4xl font-sans">
              MyTinerary
            </h1>
          </div>
          <div className="absolute -bottom-32 -left-40 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -bottom-40 -left-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-40 -right-0 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
          <div className="absolute -top-20 -right-20 w-80 h-80 border-4 rounded-full border-opacity-30 border-t-8"></div>
        </div>
        <div className="flex md:w-1/2 justify-center py-10 items-center bg-white rounded-e-2xl max-md:rounded-2xl ">
          <form className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">
              Hello Again!
            </h1>
            <p className="text-sm font-normal text-gray-600 mb-7">
              Welcome Back
            </p>

            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2"
                  d="M16 12a4 4 0 10-8 0 4 4 0 008 0zm0 0v1.5a2.5 2.5 0 005 0V12a9 9 0 10-9 9m4.5-1.206a8.959 8.959 0 01-4.5 1.207"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="email"
                name="email"
                id=""
                placeholder="Email Address"
                ref={emailInputRef}
                required
              />
            </div>
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                className="h-5 w-5 text-gray-400"
                viewBox="0 0 20 20"
                fill="currentColor"
              >
                <path
                  fillRule="evenodd"
                  d="M5 9V7a5 5 0 0110 0v2a2 2 0 012 2v5a2 2 0 01-2 2H5a2 2 0 01-2-2v-5a2 2 0 012-2zm8-2v2H7V7a3 3 0 016 0z"
                  clipRule="evenodd"
                />
              </svg>
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                id=""
                placeholder="Password"
                ref={passInputRef}
                required
              />
            </div>
            <button
              className="block w-full bg-fuchsia-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
              onClick={handlerSignIn}
            >
              Login
            </button>
            {/* Shows an error message if the inputs are empty */}
            {error && <div className="text-red-500 mt-2">{error}</div>}

            {/* Login with google */}
            <hr className="my-6 border-gray-300 w-full" />

            <button
              type="button"
              className="w-full block bg-white hover:bg-gray-100 focus:bg-gray-100 text-gray-900 font-semibold rounded-2xl px-4 py-3 border border-gray-300"
            >
              <div className="flex items-center justify-center">
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  xmlnsXlink="http://www.w3.org/1999/xlink"
                  className="w-6 h-6"
                  viewBox="0 0 48 48"
                >
                  <defs>
                    <path
                      id="a"
                      d="M44.5 20H24v8.5h11.8C34.7 33.9 30.1 37 24 37c-7.2 0-13-5.8-13-13s5.8-13 13-13c3.1 0 5.9 1.1 8.1 2.9l6.4-6.4C34.6 4.1 29.6 2 24 2 11.8 2 2 11.8 2 24s9.8 22 22 22c11 0 21-8 21-22 0-1.3-.2-2.7-.5-4z"
                    />
                  </defs>
                  <clipPath id="b">
                    <use xlinkHref="#a" overflow="visible" />
                  </clipPath>
                  <path clipPath="url(#b)" fill="#FBBC05" d="M0 37V11l17 13z" />
                  <path
                    clipPath="url(#b)"
                    fill="#EA4335"
                    d="M0 11l17 13 7-6.1L48 14V0H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#34A853"
                    d="M0 37l30-23 7.9 1L48 0v48H0z"
                  />
                  <path
                    clipPath="url(#b)"
                    fill="#4285F4"
                    d="M48 48L17 24l-4-3 35-10z"
                  />
                </svg>
                <span className="ml-4">Log in with Google</span>
              </div>
            </button>

            <br></br>
            <span className="text-sm ml-2">Don´t have an account?, </span>
            <a href="/SignUp">
              <span className="text-sm  font-semibold hover:text-fuchsia-600 cursor-pointer">
                Register yourself here!
              </span>
            </a>
          </form>
        </div>
      </div>
    </>
  );
}

export default SignIn;
