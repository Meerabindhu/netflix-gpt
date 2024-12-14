import { getAuth, createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import {auth} from './firebase'

const validateInputFields = (email,password,name,isSignUpPage) => {
    let message="";
    if(!(/^[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}$/).test(email)) {
        message = 'Email Address is not valid'
    }
    if (!(/^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@.#$!%*?&])[A-Za-z\d@.#$!%*?&]{8,15}$/).test(password)) {
        message = "Password is not valid"
    }
    if(isSignUpPage && !(/^[a-zA-Z ]{2,30}$/).test(name)) {
        message = "Name is not valid"
    }
    return message
};

const handleSignUp = (email,password) => {
 createUserWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorMessage = error.code + "" + error.message;
    return errorMessage
  });
}

const handleSignIn = (email, password) => {
signInWithEmailAndPassword(auth, email, password)
  .then((userCredential) => {
    const user = userCredential.user;
    // ...
  })
  .catch((error) => {
    const errorMessage = error.code + "" + error.message;
    return errorMessage;
  });

}

export { validateInputFields,handleSignUp, handleSignIn };
