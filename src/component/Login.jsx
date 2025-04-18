import React, { useRef, useState } from 'react'
import Header from './Header'
import { checkValidSignInInput } from '../utils/validate';
import { checkValidSignUpInput } from '../utils/validate';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from '../utils/firebase';

const Login = () => {
  const [isSignInForm, setIsSignInForm] = useState(true);

  const toggleIsSignInForm = () => {
    setIsSignInForm(!isSignInForm)
    setErrorMessage(null);
    emailRef.current.value = "";
    passwordRef.current.value = "";
    nameRef.current.value = "";
  };

  const [errorMessage, setErrorMessage] = useState(null);

  const emailRef = useRef(null);
  const passwordRef = useRef(null);
  const nameRef = useRef(null);

  const handleSignIn = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const message = checkValidSignInInput(email, password);
    setErrorMessage(message);
    if(message) return;

    signInWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      setErrorMessage("Invalid credentials. Or try Signup if you are a new user.");
    });
  }

  const handleSignUp = () => {
    const email = emailRef.current.value;
    const password = passwordRef.current.value;
    const name = nameRef.current.value;
    const message = checkValidSignUpInput(email, password, name);
    setErrorMessage(message);
    if(message) return;

    createUserWithEmailAndPassword(auth, email, password)
    .then((userCredential) => {
      const user = userCredential.user;
    })
    .catch((error) => {
      setErrorMessage("Signup not successful. Try again.");
    });
  } 

  return (
    <div>
      <Header />
      <div className='form-container-login min-h-[100vh] min-w-[100vw] py-[100px]'>
        <div className='form-container-login-container p-[65px] rounded-lg w-[450px] mx-auto'>
          <form onSubmit={(e) => {e.preventDefault();}}>
            <div className='form-container-login-subcontainer'>
              <h1 className='text-4xl text-white font-bold pb-4'>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
              </h1>
              {
                !isSignInForm && <input type="text" ref={nameRef} placeholder="Name" className='w-full text-white bg-gray-700 p-4 my-4 border-0' />
              }
              <input type="text" ref={emailRef} placeholder="Email Address" className='w-full text-white bg-gray-700 p-4 my-4 border-0' />
              <input type="password" ref={passwordRef} placeholder="Password" className='w-full text-white bg-gray-700 p-4 my-4 border-0' />
              <p className='py-2 text-lg text-red-700'>{errorMessage}</p>
              <button className='w-full rounded-lg my-4 bg-red-700 py-3 cursor-pointer' onClick={isSignInForm ? handleSignIn : handleSignUp}>
                {isSignInForm ? 'Sign In' : 'Sign Up'}
              </button>
              <p className='py-4 text-white cursor-pointer' onClick={toggleIsSignInForm}>
                {isSignInForm ? 'New to Netflix? Sign Up Now' : 'Already a Member? Sign In'}
              </p>
            </div>
          </form>
        </div>
      </div>
    </div>
  )
}

export default Login