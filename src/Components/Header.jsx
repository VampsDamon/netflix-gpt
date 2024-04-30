import React from "react";

const Header = () => {
  return (
    <div className="flex sm:justify-start justify-center  px-4 py-2 sm:py-0 ">
      <div className="logo ">
        <img
          className="w-40 md:w-48 mx-auto "
          src="https://cdn.cookielaw.org/logos/dd6b162f-1a32-456a-9cfe-897231c7763c/4345ea78-053c-46d2-b11e-09adaef973dc/Netflix_Logo_PMS.png"
          alt="logo"
        />
      </div>
      <div className="text-white flex gap-5 list-none uppercase justify-center items-center font-bold ">
        <li>Home</li>
        <li>Login</li>
        <li>SignUp</li>
      </div>
    </div>
  );
};

export default Header;
