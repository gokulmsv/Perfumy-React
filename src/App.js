import Navbar from "./components/Navbar"
import Search from "./components/Search"
import Products from "./components/Products"
import About from "./components/About"
import Footer from "./components/Footer"

function app()
{
    return(
    <div>
        <Navbar></Navbar>
        <Search></Search>
        <Products></Products>
        <About></About>
        <Footer></Footer>
  </div>
    )
}

export default app