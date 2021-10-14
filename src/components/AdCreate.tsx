import React from 'react';

const AdCreate = () => {
    return (
        <div className="content-wrapper d-flex justify-content-center">
            <div className="content col-7 row justify-content-center g-0" style={{padding: "10px"}}>
                <div className="content-wrapper-content row g-0">
                    <form action="">

                        <label>Title:</label>
                        <input className="form-control" placeholder="title"/>
                        <label>Location:</label>
                        <input className="form-control" placeholder="location"/>
                        <label>Animal Name:</label>
                        <input className="form-control" placeholder="Animal Name"/>
                        <label>Animal Type:</label>
                        <input className="form-control" placeholder="Animal Type"/>
                        <label>Animal Color:</label>
                        <input className="form-control" placeholder="Animal Color"/>
                        <label>Animal gender:</label>
                        <input className="form-control" placeholder="Animal gender"/>
                        <label>Animal vaccinated:</label>
                        <input className="form-control" placeholder="Animal vaccinated"/>
                        <label>Animal spayed:</label>
                        <input className="form-control" placeholder="Animal spayed"/>
                        <label>Animal passport:</label>
                        <input className="form-control" placeholder="Animal passport"/>
                        <label>Price:</label>
                        <input className="form-control" placeholder="Price"/>

                    </form>
                </div>
            </div>
        </div>
    );
};

export default AdCreate;