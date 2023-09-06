import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './Pages/Home/Index'
import Cities from './Pages/Cities/Cities'
import CityDetail from './Pages/CityDetail/CityDetail'
import Layout from './Layouts/Layout'

import './App.css'
import SignIn from './Pages/SignIn/SignIn'

const router = createBrowserRouter([

      {path: '/', element: <Layout/>,
        children:[{path: '/', element: <Index/>},
                  {path: '/cities', element: <Cities/>},
                  {path: '/cities/detail/:id', element: <CityDetail/>},
                  {path: '/signIn', element: <SignIn/>}
      ]
    }
])

function App() {
  
  return (
      
      <>
        <RouterProvider router = {router}/>

      </>
   
  )
}

export default App
