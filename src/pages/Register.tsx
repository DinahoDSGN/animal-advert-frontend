import React, {SyntheticEvent, useState} from 'react';
import Login from './Login';
import Auth from './Auth';
import { Redirect } from 'react-router-dom';

const Register = () => {
    const [username, setUsername] = useState("");
    const [email, setEmail] = useState("");
    const [password, setPassword] = useState("");
    const [up, setUp] = useState(false);

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        let ok = await fetch("http://localhost:8080/auth/signup", {
            method: "POST",
            headers: {"Content-Type" : "application/json"},
            body: JSON.stringify({
                username,
                password
            })
        });

        if (ok.status != 200){
            alert("SOMETHING GOT WRONG")
            return
        }

        setUp(true)
    }

    if (up){
        return <Redirect to="/auth"/>
    }

    return (
        <form className="w-auto" onSubmit={submit}>
            <div className="form-group row justify-content-center">
                <label>
                    Name:
                </label>
                <input className="form-control" placeholder="Enter your name" type="name"
                       onChange={e => setUsername(e.target.value)}
                />
                <label>
                    Email:
                </label>
                <input className="form-control" placeholder="Enter your email address" type="email"
                       onChange={e => setEmail(e.target.value)}
                />
                <label>
                    Password:
                </label>
                <input className="form-control" placeholder="Enter your password" type="password"
                       onChange={e => setPassword(e.target.value)}
                />
                <label>
                    Repeat password:
                </label>
                <input className="form-control" placeholder="Repeat your password" type="password"
                       onChange={e => setPassword(e.target.value)}
                />
            </div>
            <div className="form-group row justify-content-center mt-1">
                <button className="submit-btn btn btn-primary" type="submit">
                    Sign up
                </button>
            </div>
        </form>
    );
};

export default Register;