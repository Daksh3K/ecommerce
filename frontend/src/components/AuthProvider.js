import { useState } from "react";
import { AuthContext } from "../context/AuthContext";
import axios from 'axios';
import { initializeApp } from "firebase/app";
import {
  getAuth,
  RecaptchaVerifier,
  signInWithPhoneNumber,
} from "firebase/auth";

const firebaseConfig = {
  apiKey: "AIzaSyAURXARTI8qZZN1VDw2Kbofp4f-f90-50M",
  authDomain: "ecommerce-35aae.firebaseapp.com",
  projectId: "ecommerce-35aae",
  storageBucket: "ecommerce-35aae.appspot.com",
  messagingSenderId: "1085439235208",
  appId: "1:1085439235208:web:57b352328bbb4dad98fb3d",
};

const app = initializeApp(firebaseConfig);
const auth = getAuth();

export default function AuthProvider({ children }) {
  const [user, setUser] = useState(null);

  const generateRecaptcha = () => {
    window.recaptchaVerifier = new RecaptchaVerifier(
      "recaptcha-container",
      {
        size: "invisible",
        callback: (response) => {},
      },
      auth
    );
  };

  const verifyOTP = (OTP, adderess, phone) => {
    let confirmationResult = window.confirmationResult;
    confirmationResult.confirm(OTP)
      .then((result) => {
        const user = result.user
        setUser(user);
        axios.post("http://localhost:3002/createuser", {
          uid: user.uid,
          address: adderess,
          phone: phone
        }, {
          headers: {
            "Content-Type": "application/json"
          }
        })
      })
      .catch((error) => {
        console.log(error)
      })
  };

  const userSignIn = (phone, address) => {
    generateRecaptcha();
    let appVerifier = window.recaptchaVerifier;
    signInWithPhoneNumber(auth, phone, appVerifier)
      .then((confirmationResult) => {
        window.confirmationResult = confirmationResult;
        var OTP = prompt("Enter OTP Sent on phone");
        verifyOTP(OTP, address, phone)
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const signOut = () => {
    setUser(null);
  }

  const value = {
    user: user,
    userSignIn: userSignIn,
    userSignOut: signOut
  };

  return <AuthContext.Provider value={value}>{children}</AuthContext.Provider>;
}
