import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './Pages/Home/Index'
import Cities from './Pages/Cities/Cities'
import CityDetail from './Pages/CityDetail/CityDetail'
import Layout from './Layouts/Layout'

import './App.css'
import SignIn from './Pages/SignIn/SignIn'
import SignUp from './Pages/SignUp/SignUp'
import { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import userActions from './Redux/actions/users'

const router = createBrowserRouter([

      {path: '/', element: <Layout/>,
        children:[{path: '/', element: <Index/>},
                  {path: '/cities', element: <Cities/>},
                  {path: '/cities/detail/:id', element: <CityDetail/>},
                  {path: '/signIn', element: <SignIn/>},
                  {path: '/signUp', element: <SignUp/>}
      ]
    }
])

function App() {

  /* dispatch action on redux */
  const dispatch = useDispatch()

  /* use effect for one time authenticate */

  useEffect(()=>{
    
     const token = localStorage.getItem("token");
    if (token) {
      dispatch(userActions.authenticate());
    }

  },[])
  

  return (
      
      <>
        <RouterProvider router = {router}/>

      </>
   
  )
}

export default App
