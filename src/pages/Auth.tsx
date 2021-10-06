import React, {SyntheticEvent, useState} from 'react';
import {Redirect} from "react-router-dom";
import Login from './Login';
import Register from './Register';

const Auth = () => {
    const [signin, setsignin] = useState("border");
    const [signup, setsignup] = useState("none");

    const changeSignIn = () => {
        setsignin("flex");
        setsignup("none");
    }

    const changeSignUp = () => {
        setsignin("none");
        setsignup("flex");
    }

    return (

        <div className="container-fluid d-flex justify-content-center align-items-center">


            <div className="auth row">

                <span className="head d-flex w-auto">
                    <a onClick={changeSignIn}>
                        Sign in
                    </a>
                    <a onClick={changeSignUp}>
                        Sign up
                    </a>
                </span>

                <div className="sign-in" style={{display: signin}}>
                    <Login />
                </div>

                <div className="sign-up" style={{display: signup}}>
                    <Register />
                </div>
            </div>

        </div>
    );
};

export default Auth;
