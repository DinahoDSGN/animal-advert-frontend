import axios from 'axios';
import React, {SyntheticEvent, useState} from 'react';
import Cookies from 'js-cookie'
import { Redirect } from 'react-router-dom';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [redirect, setRedirect] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        const rawResponse = await fetch("http://localhost:8080/auth/signin", {
            method: "POST",
            body: JSON.stringify({
                username,
                password
            })
        })

        const content = await rawResponse.json();

        document.cookie = `jwttoken=Bearer=${content.token}`

        setRedirect(true)
    }

    if (redirect){
        return <Redirect to="/ad"/>
    }

    return (
        <form className="w-auto" onSubmit={submit}>
            <div className="form-group row justify-content-center">
                <label>
                    Email:
                </label>
                <input aria-describedby="usernameHelp" className="form-control" placeholder="Enter your username"
                       type="name"
                       onChange={e => setUsername(e.target.value)}
                />
                <label>
                    Password:
                </label>
                <input className="form-control" placeholder="Enter your password" type="password"
                       onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group row justify-content-center mt-1">
                <button className="submit-btn btn btn-primary" type="submit">
                    Sign in
                </button>
            </div>
            <div className="form-group row">
                            <span>
                                <a href="">
                                    Forgot password?
                                </a>
                            </span>
            </div>
        </form>
    );
};

export default Login;