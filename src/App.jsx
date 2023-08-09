import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import Index from './Pages/Home/Index'
import Cities from './Pages/Cities/Cities'
import Layout from './Layouts/Layout'

import './App.css'

const router = createBrowserRouter([

      {path: '/', element: <Layout/>,
        children:[{path: '/', element: <Index/>},
                  {path: '/cities', element: <Cities/>}
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
