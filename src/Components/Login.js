import React, { useRef, useState } from 'react';
import Header from './Header';
import { validateInputFields } from '../utils/auth';
import { createUserWithEmailAndPassword, signInWithEmailAndPassword, updateProfile } from 'firebase/auth';
import {auth} from '../utils/firebase'
import { useNavigate } from 'react-router-dom';
import { background_img } from '../utils/constants';

const Login = () => {
    const [isSignUp, setIsSignUp] = useState(false);
    const nameRef = useRef();
    const emailRef = useRef();
    const passwordRef = useRef();
    const [errorMessage,setErrorMessage] = useState(null);
    const navigate = useNavigate();

    const toggleAuthPage = () => {
        setIsSignUp(!isSignUp);
    }

    const handleAuth = (e) => {
        e.preventDefault();
        const message = validateInputFields(emailRef.current?.value,passwordRef.current?.value,nameRef.current?.value,isSignUp) ;
        setErrorMessage(message)
        if(message !== '') return;
        if( isSignUp) {
            createUserWithEmailAndPassword(auth, emailRef?.current?.value,passwordRef.current?.value)
            .then((userCredential) => {
              const user = userCredential.user;
              updateProfile(user, {
                displayName: nameRef?.current?.value, photoURL: "https://example.com/jane-q-user/profile.jpg"
              }).then(() => {
                // Profile updated!
                // ...
              }).catch((error) => {
                // An error occurred
                // ...
              });

            })
            .catch((error) => {
              setErrorMessage('Invalid Sign up Credentials')
            });
        } else {
            signInWithEmailAndPassword(auth, emailRef.current?.value,passwordRef?.current?.value)
            .then((userCredential) => {
                const user = userCredential.user;
            })
            .catch((error) => {
                setErrorMessage('Invalid Login Credentials')
            });
        }
    }

    return (
        <div>
            <Header/>
            <div className='absolute'>
                <img src={background_img}
                alt="Background logo"/>
            </div>
            <form class="w-3/12 absolute p-12 left-0 right-0 mx-auto my-36 bg-[rgba(0,0,0,0.7)]">
                <h1 className="text-white text-3xl font-bold">{isSignUp ? 'Sign Up' : 'Sign In'}</h1>
                {isSignUp && <input type="text" placeholder='Name' ref={nameRef} className='my-3 p-4 w-full text-white bg-[rgba(22,22,22,0.7)] rounded-md placeholder-white border-[rgba(128,128,128,0.7)] border-2'/>}
                <input type="text" placeholder='Email Address' ref={emailRef} className='my-3 p-4 w-full text-white bg-[rgba(22,22,22,0.7)] rounded-md placeholder-white border-[rgba(128,128,128,0.7)] border-2'/>
                <input type="password" placeholder='Password' ref={passwordRef} className='my-3 p-4 w-full text-white bg-[rgba(22,22,22,0.7)] rounded-md placeholder-white border-[rgba(128,128,128,0.7)] border-2'/>
                <p className="text-red-700 text-lg font-semibold">{errorMessage}</p>
                <button  onClick={handleAuth} className="my-3 p-4 w-full bg-red-600 text-white rounded-md">{isSignUp ? 'Sign Up' : 'Sign In'}</button>
                <p className='py-2 text-white cursor-pointer'>{isSignUp ? 'Already a Member ?' : 'New to Netflix ?'} <span className='underline' onClick={toggleAuthPage}>{isSignUp ? 'Sign In' : 'Sign Up'}</span></p>
            </form>
        </div>

    )
}

export default Login