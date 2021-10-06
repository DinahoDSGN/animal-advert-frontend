import React, {SyntheticEvent, useState} from 'react';

const Login = () => {
    const [username, setUsername] = useState("");
    const [password, setPassword] = useState("");
    const [data, setData] = useState([]);

    const API_URL = "http://localhost:8080/";

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        let ok = await fetch("http://localhost:8080/auth/signin", {
            method: "POST",
            // headers: {"Content-Type" : "application/json"},
            // credentials: "include",
            body: JSON.stringify({
                username,
                password
            })
        })
            .then(res => res.json())
            .then(data => setData(data.id))

        alert(data)
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