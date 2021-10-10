import React, {useEffect, useState} from 'react';
import '../styles/sidebar.css';
import profilePhoto from '../img/photo.jpg';
import iconProfile from '../img/icons/user.png';
import iconAd from '../img/icons/classified.png';
import iconNotifications from '../img/icons/notification.png';
import iconAdHome from '../img/icons/home.png';
import iconMyAds from '../img/icons/credit-card.png';
import iconSettings from '../img/icons/settings.png';
import iconAbout from '../img/icons/info.png';
import {Link} from 'react-router-dom';


const Sidebar = (props: { username: string }) => {

    return (
        <div className="sidebar g-0">
            <div className="sidebar-nav-panel d-flex align-items-center" style={{height: "100px"}}>
                <div className="sidebar-profile">
                    <Link to="/profile">
                        <div className="sidebar-profile-item">
                            <img id="sidebar-profile-photo" src={profilePhoto} alt=""/>
                            <span className="sidebar-profile-name">
                                {props.username}
                            </span>
                        </div>
                    </Link>
                </div>
            </div>
            <div className="sidebar-nav-panel">
                <span className="heads">Actions</span>
                <ul className="sidebar-nav align-items-center justify-content-center">
                    <Link to="/profile">
                        <li className="sidebar-item">
                            <img id="sidebar-icon" className="icon-color"
                                 src={iconProfile}/>
                            <a href="#">Profile</a>
                        </li>
                    </Link>

                    <Link to="/ad">
                        <li className="sidebar-item">
                            <img id="sidebar-icon" className="icon-color"
                                 src={iconAd}/>
                            <a href="">Ads</a>
                        </li>
                    </Link>

                    <Link to="/notifications">
                        <li className="sidebar-item">
                            <img id="sidebar-icon" className="icon-color"
                                 src={iconNotifications}/>
                            <a href="#">Notifications</a>
                        </li>
                    </Link>
                </ul>
                <span className="heads">Services</span>
                <ul className="sidebar-nav">
                    <Link to="/ad">
                        <li className="sidebar-item">
                            <img id="sidebar-icon" className="icon-color"
                                 src={iconAdHome}/>
                            <a href="">Animal Ad</a>
                        </li>
                    </Link>
                </ul>
                <span className="heads">Menu</span>
                <ul className="sidebar-nav">
                    <Link to="/myads">
                        <li className="sidebar-item">
                            <img id="sidebar-icon" className="icon-color"
                                 src={iconMyAds}/>
                            <a href="">My Ads</a>
                        </li>
                    </Link>

                    <Link to="/about">
                        <li className="sidebar-item">
                            <img id="sidebar-icon" className="icon-color"
                                 src={iconAbout}/>
                            <a href="#">About</a>
                        </li>
                    </Link>

                    <Link to="/settings">
                        <li className="sidebar-item">
                            <img id="sidebar-icon" className="icon-color"
                                 src={iconSettings}/>
                            <a href="">Settings</a>
                        </li>
                    </Link>

                    <Link
                        to="/logout">
                        <li className="sidebar-item">
                            <img id="sidebar-icon" className="icon-color"
                                 src={iconSettings}/>
                            <a href="">Logout</a>
                        </li>
                    </Link>
                </ul>
            </div>

        </div>
    );
};

export default Sidebar;