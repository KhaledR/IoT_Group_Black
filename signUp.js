import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
    createUserWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
import "./auth.css";

export const SignUp = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [ver_password, setVer_password] = useState("");

    const signUp = async(e) =>{
        e.preventDefault();
        try {

            if(password === ver_password){
                await createUserWithEmailAndPassword(auth, email, password);
            }
            else alert("Password Does Not Match")
        }
        catch (err) {
            console.error(err);
        } 
    };

    const signUpWithGoogle = async () => {
        try {
          await signInWithPopup(auth, googleProvider);
        } catch (err) {
          console.error(err);
        }
      };
    
 
    return(
        <div>
            <div>
            <div className="signup-container">
            <form>
            <h2>Sign-Up To Group Black AWS</h2>
            <h2>Create Your Acount Now</h2>
            
            <div>
                <input
                type="email"
                name="email"
                placeholder='Email'
                onChange={(e) => 
                    setEmail(e.target.value)
                  }
                />
            </div>
            <div>
                <input
                type="password"
                name="password"
                placeholder='Password'
                onChange={(e) => setPassword(e.target.value)}
                />
            </div>
            <div>
                <input
                type="password"
                name="ver_password"
                placeholder='Verify Password'

                onChange={(e) => setVer_password(e.target.value)}
                />
            </div>
            <div><button className="button3" onClick={ signUp }>Sign-Up</button></div>
            </form>
            <div><button className="button3" onClick={signUpWithGoogle}>Sign-Up With Google</button></div>
            </div>
            </div>
        </div>
    );
}


