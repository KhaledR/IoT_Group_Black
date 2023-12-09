import React, { useState } from "react";
import { auth, googleProvider } from "../config/firebase";
import {
    signInWithEmailAndPassword,
    signInWithPopup,
  } from "firebase/auth";
import "./auth.css";

export const SignIn = () => {
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");

    const signIn = async(e) =>{
        e.preventDefault();
        
        try {
            await signInWithEmailAndPassword(auth, email, password)
            .then((userCredentaial) =>{
                console.log(userCredentaial)
            });
        }
        catch (err) {
            console.error(err);
        } 
    };

    const signInWithGoogle = async () => {
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
            <h2>Sign-In To Group Black AWS</h2>
            <h2>Go To Your Acount Now</h2>
            
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
            <div><button className="button3" type="submit" onClick={ signIn }>Sign-In</button></div>
            </form>
            <div><button className="button3" onClick={signInWithGoogle}> Sign-In With Google</button></div>
            </div>
            </div>
        </div>
    );
}


