import {
  getAuth,
  createUserWithEmailAndPassword,
  signInWithEmailAndPassword,
  signOut,
} from "firebase/auth";
import { toast } from "react-toastify";
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// import { auth } from "../Utils/firebase";

class AuthService {
  auth;
  constructor() {
    const firebaseConfig = {
      apiKey: ` ${process.env.REACT_APP_FIREBASE_API_KEY}`,
      authDomain: `${process.env.REACT_APP_FIREBASE_AUTH_DOMAIN}`,
      projectId: `${process.env.REACT_APP_FIREBASE_PROJECT_ID}`,
      storageBucket: `${process.env.REACT_APP_FIREBASE_STORAGE_BUCKET}`,
      messagingSenderId: `${process.env.REACT_APP_FIREBASE_MESSAGING_SENDER_ID}`,
      appId: `${process.env.REACT_APP_FIREBASE_APP_ID}`,
      measurementId: `${process.env.REACT_APP_FIREBASE_MEASUREMENT_ID}`,
    };
    // console.log(`${process.env.REACT_APP_FIREBASE_API_KEY}`);
    const app = initializeApp(firebaseConfig);
    const analytics = getAnalytics(app);
    this.auth = getAuth();
  }

  async signUp(email, password, name) {
    try {
      const userCredential = await createUserWithEmailAndPassword(
        this.auth,
        email,
        password
      );
      return userCredential.user;
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode + "  " + errorMessage, {
        className:
          "w-[70%] sm:w-[100%] sm:left-[0px] left-[100px] sm:left-[0px] top-[10px] ",
      });
    }
  }

  async login(email,password){
    try {
      const userCredential = await signInWithEmailAndPassword(this.auth,email,password)
      return userCredential.user;
      
    } catch (error) {
      const errorCode = error.code;
      const errorMessage = error.message;
      toast.error(errorCode + "  " + errorMessage, {
        className:
          "w-[70%] sm:w-[100%] sm:left-[0px] left-[100px] sm:left-[0px] top-[10px] ",
      });
    }
     
  }

  async logout(){
    try {
      
      await signOut(this.auth);
    } catch (error) {
      console.log("Error in SignOut", error);
    }
  }
}
const authService = new AuthService();
export default authService;
