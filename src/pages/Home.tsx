import React, {useEffect, useState} from 'react';
import iconLoupe from '../img/icons/loupe.png';
import iconBurger from '../img/icons/menu-burger.png';
import iconGrid from '../img/icons/menu-grid.png';
import profilePhoto from '../img/photo.jpg';
import iconPlaceholder from '../img/icons/placeholder.png';
import iconPawprint from '../img/icons/pawprint.png';
import iconDollar from '../img/icons/dollar.png';
import iconGender from '../img/icons/gender.png';
import axios from 'axios';
import '../styles/home.css';

const Home = () => {
    const [posts, setPosts] = useState([])

    useEffect(() => {
        (
            async () => {
                await axios.get("http://localhost:8080/api/adv/")
                    .then(res => {
                        setPosts(res.data["data"])
                    })
            }
        )()
    }, [])

    // console.log(posts)


    return (
        <div className="content-wrapper d-flex justify-content-center">
            <div className="content col-7 row justify-content-center">
                <div className="content-wrapper-header row">
                    <div className="col-9 row filter-wrapper g-0">
                        <span id="filter-text">Filters</span>
                        <div className="filter-properties d-flex">
                            <div className="filter row g-0" style={{width: "130px"}}>
                                <span id="filter-head">Specify</span>
                                <div className="content-row dropdown content-filter-wrapper row">
                                    <button className="btn-secondary dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                        All
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Cat 1</a>
                                        <a className="dropdown-item" href="#">Dog 2</a>
                                        <a className="dropdown-item" href="#">Dragon 3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="filter row g-0" style={{width: "170px"}}>
                                <span id="filter-head">Price</span>
                                <input type="search" className="form-control" placeholder="From" aria-label="Search"
                                       aria-describedby="search-addon"/>
                                <input type="search" className="form-control" placeholder="To" aria-label="Search"
                                       aria-describedby="search-addon"/>
                            </div>
                            <div className="filter row g-0" style={{width: "130px"}}>
                                <span id="filter-head">Breed</span>
                                <div className="content-row dropdown content-filter-wrapper row">
                                    <button className="btn-secondary dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                        All
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Breed 1</a>
                                        <a className="dropdown-item" href="#">Breed 2</a>
                                        <a className="dropdown-item" href="#">Breed 3</a>
                                    </div>
                                </div>
                            </div>
                            <div className="filter row g-0" style={{width: "130px"}}>
                                <span id="filter-head">Sex</span>
                                <div className="content-row dropdown content-filter-wrapper row">
                                    <button className="btn-secondary dropdown-toggle" type="button"
                                            id="dropdownMenuButton" data-toggle="dropdown" aria-haspopup="true"
                                            aria-expanded="false">
                                        All
                                    </button>
                                    <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                        <a className="dropdown-item" href="#">Daun 1</a>
                                        <a className="dropdown-item" href="#">Ne daun 2</a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col actions-wrapper g-0">
                        <div className="content-row content-create-wrapper row align-items-center">
                            <button type="button" className="btn-primary">Create adv</button>
                        </div>
                        <div className="content-row dropdown content-filter-wrapper row ">
                            <button className="btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" href="#">By rating</a>
                                <a className="dropdown-item" href="#">By price</a>
                                <a className="dropdown-item" href="#">By asd</a>
                            </div>
                        </div>
                    </div>
                </div>
                <section className="content-row row">
                    <div className="content-search-wrapper col row g-0">
                        <div className="input-group">
                            <input type="search" className="form-control" placeholder="Search adv"/>
                            <span className="input-group-text border-0" id="search-addon">
                            <img id="adv-icon" className="col icon-color" src={iconLoupe}/>
                        </span>
                        </div>
                    </div>
                    <div className="content-view-wrapper align-items-center col row g-0">
                        <div className="form-group d-flex">
                            <button id="menu-burger" className="submit-btn btn btn-primary" type="submit">
                                <img id="menu-icon" className="col icon-color" src={iconBurger}/>
                            </button>
                            <button id="menu-grid" className="submit-btn btn btn-primary" type="submit">
                                <img id="menu-icon" className="col icon-color" src={iconGrid}/>
                            </button>
                        </div>
                    </div>
                </section>
                <div className="content-wrapper-content row g-0">

                    {posts.map(post=>
                        <div className="adv-wrapper row g-0">
                            <div className="block-photo col-auto">
                                <img src={profilePhoto} alt=""/>
                            </div>
                            <div className="block-info col-9">
                                <div className="adv-title" data-toggle="modal" data-target=".bd-example-modal-lg">
                                    <span id="name">{post["Animal"]["name"]}</span>
                                    <span id="spec">{post["Animal"]["type"]}</span>
                                </div>
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
                    )}

                </div>
            </div>
        </div>
    );
};

export default Home;