import React from "react";
import Header from "./Header";
import FormValidator from "../Utils/FormValidator";
import { useState } from "react";
import { toast } from "react-toastify";
import { useNavigate } from "react-router-dom";
import { ReactComponent as ShowIcon } from "../Images/eye-password-show-svgrepo-com(1).svg";
import { ReactComponent as HideIcon } from "../Images/eye-password-hide-svgrepo-com(1).svg";
import { useDispatch } from "react-redux";
import { addUser } from "../Utils/userSlice";
import { USER_AVTAR } from "../Utils/constant";
import {
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  updateProfile,
} from "firebase/auth";

import auth from "../Utils/FirebaseAuth";

const Login = () => {
  const [isSignIn, setIsSignIn] = useState(true);
  const navigate = useNavigate();
  const dispatch = useDispatch();

  const [state, setState] = useState({
    name: { isFocused: false, hasContent: false, value: "" },
    email: { isFocused: false, hasContent: false, value: "" },
    password: { isFocused: false, hasContent: false, value: "" },
  });

  const [isPasswordVisible, setIsPasswordVisible] = useState(false);

  const togglePasswordVisibility = () => {
    setIsPasswordVisible((prev) => !prev);
  };

  const handleFocus = (field) => {
    setState((prevState) => ({
      ...prevState,
      [field]: { ...prevState[field], isFocused: true },
    }));
  };

  const handleBlur = (field, e) => {
    setState((prevState) => ({
      ...prevState,
      [field]: {
        ...prevState[field],
        isFocused: false,
        hasContent: e.target.value !== "",
      },
    }));
  };

  const handleChange = (field, e) => {
    setState((prevState) => ({
      ...prevState,
      [field]: { ...prevState[field], value: e.target.value },
    }));
  };

  const signInHandeler = () => {
    setIsSignIn((prev) => !prev);
    setState((prevState) => ({
      name: { value: "", isFocused: false, hasContent: false },
      email: { value: "", isFocused: false, hasContent: false },
      password: { value: "", isFocused: false, hasContent: false },
    }));
  };

  const onFormHandeler = (e) => {
    const msg = FormValidator(state.email.value, state.password.value);
    if (state.email.value === "" || state.password.value === "")
      toast.warning("Empty  Fields !", {
        className: "w-[70%] sm:w-[100%] left-[100px] sm:left-[0px] top-[10px] ",
      });
    else {
      if (msg === "email")
        toast.warning("Invalid email address, please check and try again.", {
          className:
            "w-[70%] sm:w-[100%] left-[100px] sm:left-[0px] top-[10px] bg-opacity-70 ",
        });
      else if (msg === "password") {
        toast.warning(
          "Password must be 8+ characters with uppercase, lowercase, and a special symbol.",
          {
            className:
              "w-[70%] sm:w-[100%] sm:left-[0px] left-[100px] sm:left-[0px] top-[10px] ",
          }
        );
      }
    }
    if (msg) return;
    if (!isSignIn) {
      createUserWithEmailAndPassword(
        auth,
        state.email.value,
        state.password.value
      )
        .then((userCredential) => {
          updateProfile(auth.currentUser, {
            displayName: state.name.value,
            photoURL: USER_AVTAR,
          })
            .then(() => {
              const { uid, email, displayName, photoURL } = auth.currentUser;
              dispatch(
                addUser({
                  uid: uid,
                  email: email,
                  displayName: displayName,
                  photoURL: photoURL,
                })
              );
            })
            .catch((error) => {
              console.log("Error in Updating Profile");
            });
        })
        .catch((error) => {
          const errorMessage = error.message;
          toast.warning(errorMessage, {
            className:
              "w-[70%] sm:w-[100%] sm:left-[0px] left-[100px] sm:left-[0px] top-[10px] ",
          });
        });
    } else {
      signInWithEmailAndPassword(auth, state.email.value, state.password.value)
        .then((userCredential) => {})
        .catch((error) => {
          toast.warning("Invalid user ID and Password", {
            className:
              "w-[70%] sm:w-[100%] sm:left-[0px] left-[100px] sm:left-[0px] top-[10px] ",
          });
        });
    }
  };
  return (
    <div className="relative w-screen min-h-screen  bg-login-bg bg-center bg-cover">
      <div className="absolute inset-0  bg-gradient-to-br from-black to-black opacity-50"></div>
      <main className="relative  mb-36 ">
        <Header />
      </main>

      <div className="form relative  top-[150px] mt-[100px] left-1/2 w-[400px]  -translate-x-[50%] -translate-y-[50%] sm:p-16 p-10 bg-black rounded-lg sm:max-w-[70%] max-w-[90%] bg-opacity-70 text-white">
        <form
          action=""
          className="flex flex-col  gap-5  "
          onSubmit={(e) => e.preventDefault()}
        >
          <h2 className="text-white font-bold text-4xl">
            {" "}
            {isSignIn ? "Sign In" : "Sign Up"}
          </h2>
          {!isSignIn && (
            <div className="relative w-full">
              <input
                type="name"
                value={state.name.value}
                onFocus={() => handleFocus("name")}
                onBlur={(e) => handleBlur("name", e)}
                onChange={(e) => handleChange("name", e)}
                className={`px-4 py-3 my-2 rounded-md bg-slate-800 bg-opacity-55 outline-none border border-gray-500
              w-full h-[50px]  `}
              />
              <label
                className={`absolute pointer-events-none top-0 left-0 px-4 py-2 transition-all duration-200 ease-in-out ${
                  state.name.isFocused || state.name.hasContent
                    ? "-mt-2 text-xs font-bold"
                    : "mt-3 text-base"
                }`}
              >
                Full Name
              </label>
            </div>
          )}
          <div className="relative w-full">
            <input
              type="email"
              value={state.email.value}
              onFocus={() => handleFocus("email")}
              onBlur={(e) => handleBlur("email", e)}
              onChange={(e) => handleChange("email", e)}
              className={`px-4 py-3 my-2 rounded-md bg-slate-800 bg-opacity-55 outline-none border border-gray-500
              w-full h-[50px]  `}
            />
            <label
              className={`absolute pointer-events-none top-0 left-0 px-4 py-2 transition-all duration-200 ease-in-out ${
                state.email.isFocused || state.email.hasContent
                  ? "-mt-2 text-xs font-bold"
                  : "mt-3 text-base"
              }`}
            >
              Email
            </label>
          </div>

          <div className="relative w-full">
            <input
              type={isPasswordVisible ? "text" : "password"}
              value={state.password.value}
              onFocus={() => handleFocus("password")}
              onBlur={(e) => handleBlur("password", e)}
              onChange={(e) => handleChange("password", e)}
              className="px-4 py-3 my-2 rounded-md bg-slate-800 bg-opacity-55 outline-none border border-gray-500 w-full h-[50px]"
            />

            <label
              className={`absolute pointer-events-none top-0 left-0 px-4 py-2 transition-all duration-200 ease-in-out ${
                state.password.isFocused || state.password.hasContent
                  ? "-mt-2 text-xs font-bold"
                  : "mt-3 text-base"
              }`}
            >
              Password
            </label>

            <button
              type="button"
              onClick={togglePasswordVisibility}
              className="absolute top-1/2 right-4 transform -translate-y-1/2 focus:outline-none"
            >
              {isPasswordVisible ? <HideIcon /> : <ShowIcon />}
            </button>
          </div>

          <button
            className="bg-btn-red px-4 py-2 rounded-md hover:bg-red-800 text-white text-xl "
            onClick={onFormHandeler}
          >
            {isSignIn ? "Sign In" : "Sign Up"}
          </button>
          <p className="text-center cursor-pointer" onClick={signInHandeler}>
            {isSignIn
              ? "New to Netflix? Sign Up Now"
              : "Already Registered? Sign In Now"}
          </p>
        </form>
      </div>
    </div>
  );
};

export default Login;
