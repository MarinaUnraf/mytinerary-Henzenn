import Header from '../Components/Header/Index'
import Footer from '../Components/Footer/Index'

function Layout (props) {
  return (
    <>
     <Header/>
      { props}
      <Footer />
    </>
  )
}

export default Layout

