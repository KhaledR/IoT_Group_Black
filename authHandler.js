import { onAuthStateChanged, signOut } from "firebase/auth";
import React, { useEffect, useState } from "react";
import Popup from 'reactjs-popup';
import 'reactjs-popup/dist/index.css';
import { auth } from "../config/firebase";
import {SignIn} from '../components/signIn.js';
import {SignUp} from '../components/signUp.js';

const AuthHandler = () => {
  const [authUser, setAuthUser] = useState(null);

  useEffect(() => {
    const listen = onAuthStateChanged(auth, (user) => {
      if (user) {
        setAuthUser(user);
      } else {
        setAuthUser(null);
      }
    });

    return () => {
      listen();
    };
  }, []);

  const userSignOut = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  const userSignUp = () => {
    signOut(auth)
      .then(() => {
        console.log("sign out successful");
      })
      .catch((error) => console.log(error));
  };

  return (
    <div>
        
            
      {authUser ? (
        <>
        <div className="logedin">
            <p> Welcome </p>
          <button className="button2"  onClick={userSignOut}>Sign Out</button>
        </div>
        
        </>
      ) : (
        <>
          <Popup trigger=
                {<button className="button2"> Sign In </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div>
                                <button className="button1" onClick=
                                    {() => close()}>
                                        X
                                </button>
                            </div>
                           {<SignIn />}
                            
                        </div>
                    )
                }
            </Popup>

            <Popup trigger=
                {<button className="button2"> Sign Up </button>} 
                modal nested>
                {
                    close => (
                        <div className='modal'>
                            <div>
                                <button className="button1" onClick=
                                    {() => close()}>
                                        X
                                </button>
                            </div>
                           {<SignUp />}
                            
                        </div>
                    )
                }
            </Popup>
        </>
      )}
    </div>
  );
};

export default AuthHandler;