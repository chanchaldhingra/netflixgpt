import React, { useState } from 'react'
import Header from './Header'
import backgroundImage from '../assets/background-image.jpg';

const Login = () => {

  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleIsSignInForm = () => {setIsSignInForm(!isSignInForm)};

  return (
    <div>
      <Header />
      <div className='form-container-login min-h-[100vh] min-w-[100vw] py-[100px]'>
        <div className='form-container-login-container p-[65px] rounded-lg w-[450px] h-[700px] mx-auto'>
          <form action="">
            <div className='form-container-login-subcontainer'>
              <h1 className='text-4xl text-white font-bold pb-4'>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
              </h1>
              {
                !isSignInForm && <input type="text" placeholder="Name" className='w-full text-white bg-gray-700 p-4 my-4 border-0' />
              }
              <input type="text" placeholder="Email Address" className='w-full text-white bg-gray-700 p-4 my-4 border-0' />
              <input type="password" placeholder="Password" className='w-full text-white bg-gray-700 p-4 my-4 border-0' />
              <button className='w-full rounded-lg my-4 bg-red-700 py-3' onClick={toggleIsSignInForm}>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
              </button>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login