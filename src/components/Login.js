import { useState, useRef } from "react"
import Header from "./Header"
import { ValidateData } from "../utils/AttributeValidator";
import { createUserWithEmailAndPassword, signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../utils/firebase";

const Login = () => {
    const [IsSignInForm, setIsSignInForm] = useState(true);
    const [errorMessage, setErrorMessage] = useState(null);
    const toggleSignInForm = () => {
        setIsSignInForm(!IsSignInForm);
    }

    const email = useRef();
    const password = useRef();

    const validateForm = () => {    
        const validationResult = ValidateData(email.current.value, password.current.value);
         setErrorMessage(validationResult);
    
    if (validationResult) return;
     if (IsSignInForm){
                signInWithEmailAndPassword(auth, email.current.value, password.current.value)
                .then((userCredential) => {
                    // Signed in 

                    // ...
                })
                .catch((error) => {
                    setErrorMessage(error.message);
                });
     }else{
                createUserWithEmailAndPassword(auth, email.current.value, password.current.value)
            .then((userCredential) => {
                // Signed in 
                // ...
            })
            .catch((error) => {
                setErrorMessage(error.message);
                // ..
            });
     }
    
}
    return (
        <div>
            <Header />
            <div className="absolute">
                <img src="https://assets.nflxext.com/ffe/siteui/vlv3/dc1cf82d-97c9-409f-b7c8-6ac1718946d6/14a8fe85-b6f4-4c06-8eaf-eccf3276d557/IN-en-20230911-popsignuptwoweeks-perspective_alpha_website_medium.jpg"
                alt="WallPaper"/>
            </div>
            <from onSubmit= {(e)=> e.preventDefault()} className="absolute bg-black/80 w-3/12 p-10 my-32 mx-auto right-0 left-0 text-white rounded-lg">
                <h1 className="font-bold text-3xl py-2">
                    {IsSignInForm ? "Sign In" : "Sign Up"}
                </h1>
                {!IsSignInForm && <input type="text" placeholder="Full Name" className="p-4 my-4 w-full bg-gray-700"/>} 
                <input ref={email} type="text" placeholder="Email or Phone number" className="p-4 my-4 w-full bg-gray-700"/>
                <input ref={password} type="password" placeholder="Password" className="p-4 my-4 w-full bg-gray-700"/>
                <p className="py-2 text-red-700 text-lg">{errorMessage}</p>
                <button className="p-4 my-6 rounded-lg w-full bg-red-600" onClick={validateForm}>
                    {IsSignInForm ? "Sign In" : "Sign Up"}
                </button>
                <p className="py-4 cursor-pointer font-bold" onClick={toggleSignInForm}>
                    {
                        IsSignInForm ? "New to Netflix? Sign Up Now." : "Already registered? Sign In Now."
                    }
                </p>
            </from>
        </div>
    )
}

export default Login