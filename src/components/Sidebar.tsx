import React, {useEffect, useState} from 'react';
import profilePhoto from '../img/photo.jpg';
import iconProfile from '../img/icons/user.png';
import iconAd from '../img/icons/classified.png';
import iconNotifications from '../img/icons/notification.png';
import iconAdHome from '../img/icons/home.png';
import iconMyAds from '../img/icons/credit-card.png';
import iconSettings from '../img/icons/settings.png';
import iconAbout from '../img/icons/info.png';
import { Link } from 'react-router-dom';

const Sidebar = () => {
    const [username, setUsername] = useState("")

    useEffect( () => {
        (
            async () => {
                const response = await fetch("http://localhost:8080/api/user/me", {
                    headers: {
                        'Accept': 'application/json',
                        'Content-Type': 'application/json'
                    },
                })

                const content = await response.json();

                // setUsername(content.data.username);
            }
        )();
    });

    return (
        <div className="sidebar g-0">
            <div className="sidebar-nav-panel d-flex align-items-center" style={{height: "100px"}}>
                <div className="sidebar-profile">
                    <div className="sidebar-profile-item">
                        <img id="sidebar-profile-photo" src={profilePhoto} alt=""/>
                    <span className="sidebar-profile-name">
                        {username}
                    </span>
                    </div>
                </div>
            </div>
            <div className="sidebar-nav-panel">
                <span className="heads">Actions</span>
                <ul className="sidebar-nav align-items-center justify-content-center">
                    <li className="sidebar-item"><img id="sidebar-icon" className="icon-color"
                                                      src={iconProfile}/> <a href="#">Profile</a></li>
                    <li className="sidebar-item"><img id="sidebar-icon" className="icon-color"
                                                      src={iconAd}/> <Link to="/">Ads</Link></li>
                    <li className="sidebar-item"><img id="sidebar-icon" className="icon-color"
                                                      src={iconNotifications}/> <a href="#">Notifications</a>
                    </li>
                </ul>
                <span className="heads">Services</span>
                <ul className="sidebar-nav">
                    <li className="sidebar-item"><img id="sidebar-icon" className="icon-color"
                                                      src={iconAdHome}/> <Link to="/">Ads</Link></li>
                </ul>
                <span className="heads">Menu</span>
                <ul className="sidebar-nav">
                    <li className="sidebar-item"><img id="sidebar-icon" className="icon-color"
                                                      src={iconMyAds}/> <a href="#">My Ads</a></li>
                    <li className="sidebar-item"><img id="sidebar-icon" className="icon-color"
                                                      src={iconAbout}/> <a href="#">About</a></li>
                    <li className="sidebar-item"><img id="sidebar-icon" className="icon-color"
                                                      src={iconSettings}/> <a href="#">Settings</a></li>
                </ul>
            </div>
        </div>
    );
};

export default Sidebar;