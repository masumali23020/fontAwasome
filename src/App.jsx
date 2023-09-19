import { Outlet, RouterProvider, createBrowserRouter } from "react-router-dom"
import './App.css'
import Footer from './components/Footer'
import Navber from './components/Navber'
import Search from "./pages/Search"



function App() {

  // layout components 
  const Layout = () => {
    return (
      <div className='w-full '>
        <div className="mx-3 sm:mx-30 md:mx-10 lg:mx-28 m-auto  p-6 ">

        <Navber />
        </div>
        
        
        <div className="mx-3 sm:mx-30 md:mx-10 lg:mx-28   ">
          <Outlet />
        </div>
       
        <div className="  bg-[#183153]">
          <div className="mx-3 sm:mx-30 md:mx-10 lg:mx-28 m-auto ">
           <Footer/>
          </div>

        </div>
      </div>
    )
  }
  // all routes components 
  const router = createBrowserRouter([
    {
      path: "/",
      element: <Layout />,
      children:[
        {
          path: "/",
          element: <Search />,
        },
      
      ],
    },
  ])
  return <RouterProvider router={router} />
  
}

export default App
