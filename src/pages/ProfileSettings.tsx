import React from 'react';
import '../styles/ProfileSettings.css';

const ProfileSettings = () => {
    return (
        <div className="content-wrapper d-flex justify-content-center">
            <div className="content col-7 row justify-content-center g-0" style={{padding: "10px"}}>
                <div className="content-wrapper-content row g-0">
                    <div className="settings row justify-content-center g-0">

                        <div className="settings-wrapper row g-0">
                            <div className="block profile-info row g-0">
                                <div className="profile">
                                    <div className="profile-item d-flex justify-content-center">
                                        <img id="profile-photo" src="../img/photo.jpg" alt=""/>
                                            <section className="profile-text">
                                    <span className="profile-fullname row g-0">
                                        Nazhimedenov Niet
                                    </span>
                                                <span className="profile-name row g-0">
                                        vasyapupkin
                                    </span>
                                            </section>
                                    </div>
                                </div>
                            </div>
                            <div className="block personal-data row g-0">
                                <span id="title">Personal data</span>
                                <div className="form-group row justify-content-center g-0">
                                    <section className="row g-0">
                                        <section className="col">
                                            <label>
                                                Name:
                                            </label>
                                            <input className="form-control" placeholder="Change your name" type="name"/>
                                        </section>
                                        <section className="col">
                                            <label>
                                                Lastname:
                                            </label>
                                            <input className="form-control" placeholder="Change your lastname"
                                                   type="name"/>
                                        </section>
                                    </section>
                                    <section className="row g-0">
                                        <section className="col">
                                            <label>
                                                Pseudonym:
                                            </label>
                                            <input className="form-control" placeholder="Change your pseudonym"
                                                   type="name"/>
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
                                                   type="password"/>
                                        </section>
                                        <section className="col">
                                            <label>
                                                Repeat password:
                                            </label>
                                            <input className="form-control" placeholder="Repeat your password"
                                                   type="password"/>
                                        </section>
                                    </section>
                                    <section className="row g-0">
                                        <section className="col">
                                            <label>
                                                Email:
                                            </label>
                                            <input className="form-control" placeholder="Change your email"
                                                   type="email"/>
                                        </section>
                                    </section>
                                </div>
                            </div>
                            <div className="block form-group row mt-1 g-0">
                                <button className="submit-btn btn btn-primary" type="submit">
                                    Update
                                </button>
                            </div>
                        </div>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default ProfileSettings;