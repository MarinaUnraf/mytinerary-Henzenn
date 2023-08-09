import Header from '../Components/Header/Index'
import Footer from '../Components/Footer/Index'
import { Outlet } from 'react-router-dom'

function Layout () {
  return (
    <>
     <Header/>
      <Outlet />
      <Footer />
    </>
  )
}

export default Layout

