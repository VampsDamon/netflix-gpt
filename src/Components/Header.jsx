import React, { useEffect } from "react";
import auth from "../Utils/FirebaseAuth";
import { useNavigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { addUser, removeUser } from "../Utils/userSlice";

const Header = () => {
  const PUser = useSelector((state) => state.user);
  const dispatch = useDispatch();
  const navigate = useNavigate();

  const logOutHandeler = () => {
    signOut(auth)
      .then(() => {})
      .catch((error) => {
        console.log("Error in Signing Out");
      });
  };

  useEffect(() => {
    onAuthStateChanged(auth, (user) => {
      if (user) {
        const { uid, email, displayName, photoURL } = user;
        dispatch(
          addUser({
            uid: uid,
            email: email,
            displayName: displayName,
            photoURL: photoURL,
          })
        );
        navigate("/browse");
      } else {
        dispatch(removeUser());
        navigate("/");
      }
    });
  }, []);

  return (
    <div className="flex  justify-between  px-4 py-2 sm:py-0 w-[100%] bg-black  ">
      <div className="logo ">
        <img
          className="w-40 md:w-48 mx-auto "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      {PUser && (
        <div className="text-white flex gap-5 list-none uppercase justify-center items-center font-bold ">
          <div className="">
            <img className="w-12 rounded-full" src={PUser.photoURL} alt="" />
          </div>
          <button
            className="text-white uppercase pr-6 cursor-pointer"
            onClick={logOutHandeler}
          >
            LogOut
          </button>
        </div>
      )}
    </div>
  );
};

export default Header;
