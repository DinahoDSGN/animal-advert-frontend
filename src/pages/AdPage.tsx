import React, {useEffect, useState} from 'react';
import '../styles/ad-page.css';
import profilePhoto from '../img/photo.jpg';
import iconPawprint from '../img/icons/pawprint.png';
import iconDollar from '../img/icons/dollar.png';
import iconGender from '../img/icons/gender.png';
import iconVaccinated from '../img/icons/syringe.png';
import iconSpayed from '../img/icons/spay.png';
import iconCP from '../img/icons/color-palette.png';
import axios from "axios";

const AdPage = (props: any) => {
    const [posts, setPosts] = useState([])

    const postId = props.match.params.id

    useEffect(() => {
        (
            async () => {
                await axios.get("http://localhost:8080/api/adv/" + postId)
                    .then(res => {
                        setPosts(res.data)
                    })
            }
        )()
    }, [])

    return (
        <div className="content-wrapper d-flex justify-content-center">
            <div className="content col-7 row justify-content-center g-0" style={{padding: "10px"}}>
                    <div className="content-wrapper-content row g-0">
                        {
                            Object.entries(posts).map(([,post]) =>

                                <div className="adv-wrapper row g-0">
                                    <div className="adv-info-wrapper col-8 g-0">
                                        <div className="photo-wrapper d-flex">
                                            <img className="photo " src={profilePhoto} alt=""/>
                                            <img className="photo " src={profilePhoto} alt=""/>
                                            <img className="photo " src={profilePhoto} alt=""/>
                                            <img className="photo " src={profilePhoto} alt=""/>
                                        </div>
                                        <div className="info-wrapper row g-0">

                                            <div className="block-info">
                                                <div className="block adv-title" data-toggle="modal"
                                                     data-target=".bd-example-modal-lg">
                                                    <span id="name">{post["title"]}</span>
                                                    <span id="spec">{post["Animal"]["type"]}</span>
                                                </div>
                                                <div className="block adv-types row g-0">
                                    <span className="spec-block col-auto">
                                        <span className="spec row-auto">
                                            <img id="adv-icon" className="col icon-color"
                                                 src={iconPawprint}/>
                                            <span id="spec-type">Breed</span>
                                        </span>
                                        <span className="spec row">
                                            <span id="spec-info">{post["Animal"]["Breed"]["name"]}</span>
                                        </span>
                                    </span>
                                                    <span className="spec-block col-auto">
                                        <span className="spec row-auto">
                                            <img id="adv-icon" className="col icon-color"
                                                 src={iconGender}/>
                                            <span id="spec-type">Gender</span>
                                        </span>
                                        <span className="spec row">
                                            <span id="spec-info">{post["Animal"]["gender"] ? "Female" : "Male"}</span>
                                        </span>
                                    </span>
                                                    <span className="spec-block col-auto">
                                        <span className="spec row-auto">
                                            <img id="adv-icon" className="col icon-color"
                                                 src={iconCP}/>
                                            <span id="spec-type">Color</span>
                                        </span>
                                        <span className="spec row">
                                            <span id="spec-info">{post["Animal"]["color"]}</span>
                                        </span>
                                    </span>
                                                    <span className="spec-block col-auto">
                                        <span className="spec row-auto">
                                            <img id="adv-icon" className="col icon-color"
                                                 src={iconVaccinated}/>
                                            <span id="spec-type">Vaccinated</span>
                                        </span>
                                        <span className="spec row">
                                            <span id="spec-info">{post["Animal"]["vaccinated"] ? "Yes" : "No"}</span>
                                        </span>
                                    </span>
                                                    <span className="spec-block col-auto">
                                        <span className="spec row-auto">
                                            <img id="adv-icon" className="col icon-color" src={iconSpayed}/>
                                            <span id="spec-type">Spayed</span>
                                        </span>
                                        <span className="spec row">
                                            <span id="spec-info">{post["Animal"]["spayed"] ? "Yes" : "No"}</span>
                                        </span>
                                    </span>
                                                    <span className="spec-block col-auto">
                                        <span className="spec row-auto">
                                            <img id="adv-icon" className="col icon-color"
                                                 src={iconDollar}/>
                                            <span id="spec-type">Passport</span>
                                        </span>
                                        <span className="spec row">
                                            <span id="spec-info">{post["Animal"]["passport"] ? "Yes" : "No"}</span>
                                        </span>
                                    </span>
                                                    <span className="spec-block col-auto">
                                        <span className="spec row-auto">
                                            <img id="adv-icon" className="col icon-color"
                                                 src={iconDollar}/>
                                            <span id="spec-type">Price</span>
                                        </span>
                                        <span className="spec row">
                                            <span id="spec-info">{post["Animal"]["price"]}</span>
                                        </span>
                                    </span>
                                                </div>
                                                <div className="block adv-desc row-auto g-0">
                                    <span className="desc">
                                        {post["description"]}
                                    </span>
                                                </div>
                                            </div>

                                        </div>
                                    </div>


                                    <div className="adv-action-wrapper col g-0">
                                        <div className="profile">
                                            <div className="profile-item col">
                                                <img id="profile-photo" src="../img/photo.jpg" alt=""/>
                                                <span className="profile-name">
                                    #vasyapupkin
                                </span>
                                                <span className="row profile-info">
                                    Last online: 4 hours ago.
                                </span>
                                            </div>
                                        </div>
                                        <div className="action-buttons row d-flex g-0">
                                            <div className="content-create-wrapper col align-items-center">
                                                <button type="button" className="btn-primary">Message</button>
                                            </div>
                                            <div className="content-create-wrapper col align-items-center">
                                                <button type="button" className="btn-primary">Call</button>
                                            </div>
                                        </div>
                                        <div className="map-integrated-wrapper row g-0">
                                            <div id="map">My map will go here</div>
                                        </div>
                                        <div className="adv-statistics row d-flex g-0">
                                            <span id="statistics">{post["ad_id"]}</span>
                                            <span id="statistics">Views: 666</span>
                                        </div>
                                    </div>

                                </div>
                            )}


                    </div>
            </div>
        </div>
    );
};

export default AdPage;
