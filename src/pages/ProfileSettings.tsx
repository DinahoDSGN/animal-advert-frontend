import React, {SyntheticEvent, useEffect, useState} from 'react';
import '../styles/ProfileSettings.css';
import Cookies from "js-cookie";
import axios from "axios";

const ProfileSettings = (props: {
    userId: number
    username: string
    name: string
    lastname: string
}) => {

    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")
    const [email, setEmail] = useState("")

    const submit = async (e: SyntheticEvent) => {
        e.preventDefault()

        await axios.put("http://localhost:8080/api/user/" + props.userId, {
            name: name,
            lastname: lastname,
            username: username,
            password: password,
            email: email,
        },
            {
                withCredentials: false,
            })

        // const rawResponse = await fetch("http://localhost:8080/api/user/" + props.userId, {
        //     method: 'PUT',
        //     // mode: "no-cors",
        //     headers: {
        //         'Content-type': 'application/json; charset=UTF-8'
        //     },
        //     body: JSON.stringify({
        //         name: name,
        //         lastname: lastname,
        //         username: username,
        //         password: password,
        //         email: email,
        //     })
        // })
        // const content = await rawResponse.json();

        window.location.reload()
    }

    return (
        <div className="content-wrapper d-flex justify-content-center">
            <div className="content col-7 row justify-content-center g-0" style={{padding: "10px"}}>
                <div className="content-wrapper-content row g-0">
                    <div className="settings row justify-content-center g-0">

                        <form onSubmit={submit} method="put">
                            <div className="settings-wrapper row g-0">
                                <div className="block profile-info row g-0">
                                    <div className="profile">
                                        <div className="profile-item d-flex justify-content-center">
                                            <img id="profile-photo" src="../img/photo.jpg" alt=""/>
                                            <section className="profile-text">
                                    <span className="profile-fullname row g-0">
                                        {props.lastname} {props.name}
                                    </span>
                                                <span className="profile-name row g-0">
                                                    {props.username}
                                    </span>
                                            </section>
                                        </div>
                                    </div>
                                </div>
                                <div className="block personal-data row g-0">
                                    <span id="title">Personal data</span>
                                    <div className="form-group-ps row justify-content-center g-0">
                                        <section className="row g-0">
                                            <section className="col">
                                                <label>
                                                    Name:
                                                </label>
                                                <input className="form-control" placeholder="Change your name"
                                                       type="name"
                                                       onChange={e => setName(e.target.value)}/>
                                            </section>
                                            <section className="col">
                                                <label>
                                                    Lastname:
                                                </label>
                                                <input className="form-control-ps" placeholder="Change your lastname"
                                                       type="name"
                                                       onChange={e => setLastname(e.target.value)}/>
                                            </section>
                                        </section>
                                        <section className="row g-0">
                                            <section className="col">
                                                <label>
                                                    Username:
                                                </label>
                                                <input className="form-control" placeholder="Change your username"
                                                       type="name"
                                                       onChange={e => setUsername(e.target.value)}/>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                                <div className="block preferences row g-0">
                                    <span id="title">Account preferences</span>
                                    <div className="form-group row justify-content-center g-0">
                                        <section className="row g-0">
                                            <section className="col">
                                                <label>
                                                    Password:
                                                </label>
                                                <input className="form-control" placeholder="Change your password"
                                                       type="password"
                                                       onChange={e => setPassword(e.target.value)}/>
                                            </section>
                                            <section className="col">
                                                <label>
                                                    Repeat password:
                                                </label>
                                                <input className="form-control" placeholder="Repeat your password"
                                                       type="password"
                                                       onChange={e => setPassword(e.target.value)}/>
                                            </section>
                                        </section>
                                        <section className="row g-0">
                                            <section className="col">
                                                <label>
                                                    Email:
                                                </label>
                                                <input className="form-control" placeholder="Change your email"
                                                       type="email"
                                                       onChange={e => setEmail(e.target.value)}/>
                                            </section>
                                        </section>
                                    </div>
                                </div>
                                <div className="block form-group-ps row mt-1 g-0">
                                    <button className="submit-btn btn btn-primary" type="submit">
                                        Update
                                    </button>
                                </div>
                            </div>
                        </form>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;