import React, { useState } from 'react'
import { Route,Routes,Navigate  } from 'react-router-dom'
import Home from './pages/Home'
import Login from './pages/Login'
import Category from './pages/Category'
import Productpages from './pages/Productpages'
import Products from './pages/Products'
import Page404 from './pages/Page404'
import Signup from './pages/Signup'
// import NaveBar from './components/NaveBar'
import NavigationBar from './components/NaviBar'
import 'bootstrap/dist/css/bootstrap.min.css';
import Footer from './components/Footer'
// import Registration from './pages/Registration'

function App() {
  const [ isuser,setisUser ] = useState(true)
 
  return (
    <>
    
    <NavigationBar/>
    {
      isuser
       ?
        (
          <Routes>
          <Route path='/' element={<Home/>} />
          <Route path='Products' element={<Products/>}/>
          <Route path='Products/:productID' element={<Productpages/>}/>
          <Route path="/products/Category/:CategoryName" element={<Category />} />
          <Route path='*' element={<Page404/>}/>
        </Routes>
        )
        :
        (
          <Routes>
          <Route path='/' element={<Home/>} />
          {/* <Route path='Registration' element={<Registration/>}/> */}
          <Route path='Login' element={<Login/>}/>
          <Route path='Signup' element={<Signup/>}/>
          <Route path='*' element={ <Navigate to="/Login" replace={true} />}/>
        </Routes>
        )
    }
  

   <Footer/>
  
    
    </>
  )
}

export default App
