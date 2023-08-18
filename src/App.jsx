import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './Pages/Home/Index'
import Cities from './Pages/Cities/Cities'
import CityDetail from './Pages/CityDetail/CityDetail';
import Layout from './Layouts/Layout'

import './App.css'

const router = createBrowserRouter([

      {path: '/', element: <Layout/>,
        children:[{path: '/', element: <Index/>},
                  {path: '/cities', element: <Cities/>},
                  {path: '/cities/:id', element: <Cities/>},
                  {path: '/citydetail', element: <CityDetail/>}
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
