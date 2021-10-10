import React, {useEffect, useState} from 'react';
import '../styles/myads.css';
import axios from "axios";
import profilePhoto from '../img/photo.jpg';
import iconPlaceholder from '../img/icons/placeholder.png';
import {Link} from "react-router-dom";

const MyAds = (props: { userId: number }) => {

    const [posts, setPosts] = useState([])

    useEffect(() => {
        (
            async () => {
                await axios.get("http://localhost:8080/api/user/" + props.userId)
                    .then(res => {
                        setPosts(res.data["data"]["ad"])
                    })
            }
        )()
    }, [])

    return (
        <div className="content-wrapper d-flex justify-content-center">
            <div className="content col-7 row justify-content-center">
                <div className="content-wrapper-header row">
                    <section>
                    <span className="title">
                        My adv
                    </span>
                    </section>
                </div>
                <div className="content-wrapper-content row g-0">

                    {
                        posts.map(post =>
                            <div className="adv-wrapper row-auto g-0">
                                <Link to={"ad/" + post["ad_id"]}>
                                    <div className="block-photo row-auto">
                                        <img src={profilePhoto} alt=""/>
                                    </div>
                                    <div className="block-info col-9">
                                        <div className="adv-title" data-toggle="modal"
                                             data-target=".bd-example-modal-lg">
                                            <span id="name">{post["title"]}</span>
                                        </div>
                                        <div className="adv-location">
                            <span className="location">
                                <img id="adv-icon" className="col icon-color" src={iconPlaceholder}/>
                                <span id="location">{post["location"]}</span>
                            </span>
                                        </div>
                                    </div>
                                </Link>
                            </div>
                        )
                    }

                </div>
            </div>
        </div>
    );
};

export default MyAds;