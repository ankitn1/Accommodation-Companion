import React from 'react';

//import routes and route
import {Routes,Route} from "react-router-dom"

//import components
import Header from "./components/Header"
import Footer from "./components/Footer"
//import pages
import Home from "./pages/Home"
import PropertyDetails from './pages/PropertyDetails';
import Signin from "./pages/Signin"
import Signup from "./pages/Signup"
import ForgotPassword from "./pages/ForgotPassword"
import OwnerSignup from './pages/OwnerSignup';
import PropertyForm from './pages/PropertyForm';

const App = () => {
  return (
  <div className='max-w-[1440px] mx-auto bg-white'>
    <Header/>
    <Routes>
      <Route path='/' element={<Home/>}/>
      <Route path='/property/:id' element={<PropertyDetails/>}/>
      <Route path="/signin" element={<Signin/>}/>
      <Route path="/signup" element={<Signup/>}/>
      <Route path="/OwnerSignup" element={<OwnerSignup/>}/>
      <Route path="/PropertyForm" element={<PropertyForm/>}/>
      <Route path="/forgot-password" element={<ForgotPassword/>}/>


   
 
    </Routes>
    <Footer/>
  </div>
  );
};

export default App;
