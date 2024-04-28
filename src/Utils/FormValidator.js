const FormValidator = (email,password) => {
    
    const isEmailvalid=/^[\w-\.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
    const isPasswordvalid =
      /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/gm.test(password);

      if(!isEmailvalid)
       return "email";

      if(!isPasswordvalid)
        return "password";

    return null;
}

export default FormValidator