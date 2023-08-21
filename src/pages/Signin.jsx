import React from "react";
import imglogo from "../assets/img/login5.webp"
import { SocialIcon } from 'react-social-icons';
import { Link } from "react-router-dom";

const Signin = () => {
  return (
    <>
      <section className="bg-gray-100 min-h-screen flex items-center justify-center">
        {/* login container */}
        <div className="bg-gray-50 flex rounded-2xl shadow-lg max-w-3xl p-5">
          {/* form  */}
          <div className="sm:w-1/2 px-16">
              <h2 className="font-bold text-2xl text-violet-900">Log in</h2>
              <p className="text-sm mt-4">Already have an account, log in </p>
              <form className="flex flex-col gap-4">
                <input className="p-2 mt-8 rounded-xl border" type="text" name="email" placeholder="Email" />
               <div className="relative">
               <input className="p-2 rounded-xl  w-full border" type="password" name="password" placeholder="Password" 
               />
               </div>
                <button className="bg-violet-700 rounded-xl text-white py-2 hover:scale-105 duration-300">Login </button>
              </form>
              <div className="mt-10 grid grid-cols-3 items-center text-gray-400">
                <hr className="border-gray-400"/>
                <p className="text-center">OR</p>
                <hr className="border-gray-400"/>
              </div>

                <p className="p-2">Signin with social platforms</p>
              <div className="flex p-2 justify-center px-2 space-x-2 rounded-xl">
              
              <SocialIcon url="https://www.google.com/" />
              <SocialIcon url="https://www.facebook.com/" />
              <SocialIcon url="https://www.linkedin.com/" />
              <SocialIcon url="https://www.twitter.com/" />
              </div>
           <Link className="mt-10 text-xs border-b border-gray-400 py-4 hover:text-violet-900 transition font-semibold" to={`/forgot-password`}>Forgot your password?  
           </Link>  
           <div className="mt-3 text-xs border-b py-4 flex font-medium">
            <p>If you don't have an account..</p>
      
            <Link
            className="bg-white border   px-5 py-2 font-semibold rounded-xl hover:scale-105 duration-300"
            to={`/signup`}
          >
            Register {" "}
          </Link>
           </div>
              

          </div>
          {/* image */}
          <div className=" sm:block hidden  w-1/2 mt-4">
            <img className=" rounded-2xl" src={imglogo} alt=""/>
          </div>
        </div>

      </section>
    </>
  );
};

export default Signin;
