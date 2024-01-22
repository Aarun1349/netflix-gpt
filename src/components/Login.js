import React, { useRef, useState } from "react";
import Header from "./Header";
import { validateForm } from "../utils/validate";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
} from "firebase/auth";
import { auth } from "../utils/firebase";
function Login() {
  const [signUp, setSignUp] = useState(false);
  const [result, setResult] = useState(null);
  const email = useRef(null);
  const password = useRef(null);
  const name = useRef(null);
  const toggleSignUp = (e) => {
    e.preventDefault();
    setSignUp(!signUp);
  };
  const handleSubmit = (e) => {
    e.preventDefault();
    if (signUp) {
      setResult(
        validateForm(
          email.current.value,
          password.current.value,
          signUp,
          name.current.value
        )
      );
    } else {
      setResult(
        validateForm(email.current.value, password.current.value, signUp)
      );
    }
    if (result) return;

    if (result === null) {
      // create a new user
      if (signUp) {
        // create new user

        createUserWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed up
            const user = userCredential.user;
            if (user) {
              email.current.value = "";
              name.current.value = "";
              password.current.value = "";
            }
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
      } else {
        // sign in
        signInWithEmailAndPassword(
          auth,
          email.current.value,
          password.current.value
        )
          .then((userCredential) => {
            // Signed in
            const user = userCredential.user;
            if (user) {
              email.current.value = "";
              password.current.value = "";
            }
            console.log(user);
          })
          .catch((error) => {
            const errorCode = error.code;
            const errorMessage = error.message;
            console.log(errorCode);
            console.log(errorMessage);
          });
      }
    }
  };
  return (
    <div>
      <Header />
      <div className="absolute min-h-max min-w-max">
        <img
          className="bg-center fixed md:flex"
          src="https://assets.nflxext.com/ffe/siteui/vlv3/594f8025-139a-4a35-b58d-4ecf8fdc507c/410cd3dc-6fc2-4bbe-8dcb-16cb744ee011/SG-en-20240108-popsignuptwoweeks-perspective_alpha_website_large.jpg"
          alt="netflix_logo"
        />
      </div>
      <form className=" absolute flex my-36 py-14  mx-auto right-0 left-0 m-3/12 px-8  rounded flex-col w-[550px] text-white  bg-black bg-opacity-80">
        <h3 className="mx-2 my-5 font-sans font-bold text-3xl">
          {signUp ? "Sign Up" : "Sign In"}
        </h3>
        {signUp ? (
          <input
            ref={name}
            className="p-4 my-4 
         
          rounded bg-gray-600 font-sans w-full 
          "
            type="text"
            placeholder="Full Name"
          ></input>
        ) : null}
        <input
          ref={email}
          className="p-4 my-4 
         
          rounded bg-gray-600 font-sans w-full 
          "
          type="text"
          placeholder="Email or phone number"
        ></input>
        <input
          ref={password}
          className="p-4 my-4  bg-gray-600 rounded w-full"
          type="password"
          placeholder="Password"
        ></input>
        <button
          className="py-4 px-2  my-4 rounded bg-red-700 font-semibold w-full"
          onClick={(e) => handleSubmit(e)}
        >
          {signUp ? "Sign Up" : "Sign In"}
        </button>
        <p className="text-center capitalize font-bold text-red-600">
          {result}
        </p>
        <p
          className="font-bold py-4 cursor-pointer"
          onClick={(e) => toggleSignUp(e)}
        >
          {!signUp
            ? "New to Netflix? Sign up now"
            : "Already  reqistered? Sign In now"}
        </p>
      </form>
    </div>
  );
}

export default Login;
