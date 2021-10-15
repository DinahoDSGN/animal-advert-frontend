import React, {useEffect, useState} from 'react';
import profilePhoto from "../img/photo.jpg";
import {Link} from "react-router-dom";
import iconPlaceholder from "../img/icons/placeholder.png";
import iconPawprint from "../img/icons/pawprint.png";
import iconGender from "../img/icons/gender.png";
import iconDollar from "../img/icons/dollar.png";
import iconVaccinated from '../img/icons/syringe.png';
import iconSpayed from '../img/icons/spay.png';
import iconCP from '../img/icons/color-palette.png';

const AdWrapper = (props: { posts: [] }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        setPosts(props.posts)
    })

    return (
        <>
            {
                Object.entries(posts).map(([, post]) =>
                    <div className="adv-wrapper row g-0">
                        <div className="block-photo col-auto">
                            <img src={profilePhoto} alt=""/>
                        </div>
                        <div className="block-info col">
                            <Link to={"ad/" + post["ad_id"]}>
                                <div className="adv-title" data-toggle="modal" data-target=".bd-example-modal-lg">
                                    <span id="name">{post["title"]}</span>
                                    <span id="spec">{post["animal"]["type"]}</span>
                                </div>
                            </Link>
                            <div className="adv-location">
                            <span className="location">
                                <img id="adv-icon" className="col icon-color" src={iconPlaceholder}/>
                                <span id="location">{post["location"]}</span>
                            </span>
                            </div>
                            <div className="adv-types row g-0">
                            <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconPawprint}/>
                                    <span id="spec-type">Breed</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["animal"]["breed"]["name"]}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconGender}/>
                                    <span id="spec-type">Gender</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["animal"]["gender"] ? "Female" : "Male"}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconCP}/>
                                    <span id="spec-type">Color</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["animal"]["color"]}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconVaccinated}/>
                                    <span id="spec-type">Vaccinated</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["animal"]["vaccinated"] ? "Yes" : "No"}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconSpayed}/>
                                    <span id="spec-type">Spayed</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["animal"]["spayed"] ? "Yes" : "No"}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconSpayed}/>
                                    <span id="spec-type">Passport</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["animal"]["passport"] ? "Yes" : "No"}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconDollar}/>
                                    <span id="spec-type">Price</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["animal"]["price"]}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconDollar}/>
                                    <span id="spec-type">Profit</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["animal"]["profit"]}</span>
                                </span>
                            </span>
                            </div>
                            <div className="adv-desc row-auto g-0">
                            <span className="desc">
                                desc
                            </span>
                            </div>
                        </div>
                    </div>
                )
            }
        </>
    );

};

export default AdWrapper;