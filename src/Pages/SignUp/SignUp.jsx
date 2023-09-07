import { useState } from 'react';
import countries from '../../DataBase/countries.json'

const SignUp = () => {
  const [formData, setFormData] = useState({
    firstName: '',
    lastName: '',
    email: '',
    password: '',
    country: '',
    avatar: null, // Use this state to store the selected image file
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    
    if (name === 'avatar') {
      // Handle file input for avatar
      setFormData({ ...formData, avatar: files[0] });
    } else {
      // Handle other form inputs
      setFormData({ ...formData, [name]: value });
    }
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission here, you can send formData to your server or perform validation.
  };

  return (
    <>
      {/* Your existing HTML structure */}
      <div className="container h-screen md:flex mx-auto">
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
          <form onSubmit={handleSubmit} className="bg-white">
            <h1 className="text-gray-800 font-bold text-2xl mb-1">Sign Up</h1>
            {/* Add First Name Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="firstName"
                value={formData.firstName}
                onChange={handleChange}
                placeholder="First Name"
              />
            </div>
            {/* Add Last Name Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="lastName"
                value={formData.lastName}
                onChange={handleChange}
                placeholder="Last Name"
              />
            </div>
            {/* Add Email Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="Email Address"
              />
            </div>
            {/* Add Password Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className="pl-2 outline-none border-none"
                type="password"
                name="password"
                value={formData.password}
                onChange={handleChange}
                placeholder="Password"
              />
            </div>
            {/* Add Country Select */}
            <div >
              <select className="flex items-center border-2 py-2 px-3 bg-white  rounded-2xl mb-4 w-full"
                name="country"
                value={formData.country}
                onChange={handleChange}
              >
                <option value="">Select Country</option>

                {  countries.map((index)=>

                  <option key={index.id} value={index.name}>{index.name} </option>


                )}
               
              </select>
            </div>
            {/* Add Avatar Input */}
            <div className="flex items-center border-2 py-2 px-3 rounded-2xl mb-4">
              <input
                className="pl-2 outline-none border-none"
                type="text"
                name="urlimage"
                value={formData.urlimage}
                onChange={handleChange}
                placeholder="Insert an url of your avatar image"/>
            </div>
            {/* Add Submit Button */}
            <button
              type="submit"
              className="block w-full bg-fuchsia-600 mt-4 py-2 rounded-2xl text-white font-semibold mb-2"
            >
              Sign Up
            </button>
            {/* Your existing Google login button */}
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
                <span className="ml-4">Sign Up with Google</span>
              </div>
            </button>

            <br></br>
            <span className="text-sm ml-2">Already have an account?, </span>
            <a href="/SignIn">
            <span className="text-sm  font-semibold hover:text-fuchsia-600 cursor-pointer">
              Sign In here!
            </span>

            </a>
          </form>
        </div>
      </div>
    </>
  );
};

export default SignUp;
