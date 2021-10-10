import React, {useEffect, useState} from 'react';
import profilePhoto from "../img/photo.jpg";
import {Link} from "react-router-dom";
import iconPlaceholder from "../img/icons/placeholder.png";
import iconPawprint from "../img/icons/pawprint.png";
import iconGender from "../img/icons/gender.png";
import iconDollar from "../img/icons/dollar.png";

const AdWrapper = (props: { posts: [] }) => {
    const [posts, setPosts] = useState([])

    useEffect(() => {

        setPosts(props.posts)
        console.log(posts)
    })

    return (
        <>
            {
                Object.entries(posts).map(([, post]) =>
                    <div className="adv-wrapper row g-0">
                        <div className="block-photo col-auto">
                            <img src={profilePhoto} alt=""/>
                        </div>
                        <div className="block-info col-9">
                            <Link to={"ad/" + post["ad_id"]}>
                                <div className="adv-title" data-toggle="modal" data-target=".bd-example-modal-lg">
                                    <span id="name">{post["title"]}</span>
                                    <span id="spec">{post["Animal"]["type"]}</span>
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
                                    <span id="spec-info">{post["Animal"]["Breed"]["name"]}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconGender}/>
                                    <span id="spec-type">Gender</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["Animal"]["Breed"]["gender"]}</span>
                                </span>
                            </span>
                                <span className="spec-block col-auto">
                                <span className="spec row-auto">
                                    <img id="adv-icon" className="col icon-color" src={iconDollar}/>
                                    <span id="spec-type">Price</span>
                                </span>
                                <span className="spec row">
                                    <span id="spec-info">{post["Animal"]["price"]}</span>
                                </span>
                            </span>
                            </div>
                            <div className="adv-desc row-auto g-0">
                            <span className="desc">
                                {post["description"]}
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