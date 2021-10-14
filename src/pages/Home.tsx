import React, {SyntheticEvent, useEffect, useState} from 'react';
import iconLoupe from '../img/icons/loupe.png';
import iconBurger from '../img/icons/menu-burger.png';
import iconGrid from '../img/icons/menu-grid.png';
import axios from 'axios';
import '../styles/home.css';
import AdWrapper from "../components/AdWrapper";
import AdCreate from "../components/AdCreate";
import {Link, Redirect} from 'react-router-dom';

const Home = () => {
    const [posts, setPosts] = useState([] as any)
    const [unsortedPosts, setUnsortedPosts] = useState([] as any)

    const [typeData, setTypeData] = useState([])
    const [breedData, setBreedData] = useState([])
    const [genderData, setGenderData] = useState([])

    const [moneyFrom, setMoneyFrom] = useState("")
    const [moneyTo, setMoneyTo] = useState("")

    useEffect(() => {
        (
            async () => {
                await axios.get("http://localhost:8080/api/adv/all")
                    .then(res => {
                        setPosts(res.data["data"])
                        sortByUniqueKeys({posts: posts}, "breed")
                        sortByUniqueKeys({posts: posts}, "gender")
                        sortByUniqueKeys({posts: posts}, "type")
                        setUnsortedPosts(posts)
                    })
            }
        )()
    }, [])

    if (parseInt(moneyFrom, 10) >= 0 && parseInt(moneyTo, 10) >= parseInt(moneyFrom, 10)) {
        const rangedPosts = sortByPriceRange(parseInt(moneyFrom, 10), parseInt(moneyTo, 10))
        setPosts(rangedPosts)
        setMoneyFrom('')
        setMoneyTo('')
    }

    function sortByUniqueKeys({posts}: { posts: any }, val: string) {
        let temp = [] as any;
        if (val === "type") {
            for (let i = 0; i < posts.length; i++) temp[i] = posts[i]["animal"]["type"]
            setTypeData(Array.from(new Set(temp)))
        }
        if (val === "breed") {
            for (let i = 0; i < posts.length; i++) temp[i] = posts[i]["animal"]["breed"]["name"]
            setBreedData(Array.from(new Set(temp)))
        }
        if (val === "gender") {
            for (let i = 0; i < posts.length; i++) {
                if (posts[i]["animal"]["gender"] === true) {
                    temp[i] = "Female"
                } else {
                    temp[i] = "Male"
                }

            }
            setGenderData(Array.from(new Set(temp)))
        }
    }

    function sortByPriceRange(f: number, t: number) {
        let arr = [] as any
        [...posts].map(post => {
            if (post["animal"]["price"] >= f &&
                post["animal"]["price"] <= t) {
                arr.push(post)
            }
        })

    }

    const createAdHandler = () => {

    }

    const sortByPriceDesc = () => {
        const sorted = [...posts].sort((a, b) => b["animal"]["price"] - a["animal"]["price"]);
        setPosts(sorted)
    }

    const sortByPriceAsc = () => {
        const sorted = [...posts].sort((b, a) => b["animal"]["price"] - a["animal"]["price"]);
        setPosts(sorted)
    }

    const sortByDefault = () => {
        setPosts(unsortedPosts)
    }

    const sortByValue = async (e: SyntheticEvent) => {
        e.preventDefault()
        setPosts(unsortedPosts)

        let param = e.currentTarget

        if (param.id == "sex"){
            await axios.get(("http://localhost:8080/api/adv/sort?sex=" + param.textContent).toLowerCase(), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    setPosts(res.data["data"])
                })
        }

        if (param.id == "specify"){
            await axios.get(("http://localhost:8080/api/adv/sort?specify=" + param.textContent).toLowerCase(), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    setPosts(res.data["data"])
                })
        }

        if (param.id == "breed"){
            await axios.get(("http://localhost:8080/api/adv/sort?breed=" + param.textContent).toLowerCase(), {
                headers: {
                    'Content-Type': 'application/json'
                }
            })
                .then(res => {
                    setPosts(res.data["data"])
                })
        }


    }

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
                                        {
                                            typeData.map(type =>
                                                <>
                                                    <a className="dropdown-item" id="specify" onClick={sortByValue}>{type}</a>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                            <div className="filter row g-0" style={{width: "170px"}}>
                                <span id="filter-head">Price</span>
                                <input type="search" className="form-control" placeholder="From" aria-label="Search"
                                       aria-describedby="search-addon"
                                       onChange={e => setMoneyFrom(e.target.value.toLowerCase)}/>
                                <input type="search" className="form-control" placeholder="To" aria-label="Search"
                                       aria-describedby="search-addon"
                                       onChange={e => setMoneyTo(e.target.value.toLowerCase)}/>
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
                                        {
                                            breedData.map(breed =>
                                                <>
                                                    <a className="dropdown-item" id="breed" onClick={sortByValue}>{breed}</a>
                                                </>
                                            )
                                        }
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
                                        {
                                            genderData.map(gender =>
                                                <>
                                                    <a className="dropdown-item" id="sex" onClick={sortByValue}>{gender}</a>
                                                </>
                                            )
                                        }
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="col actions-wrapper g-0">
                        <div className="content-row content-create-wrapper row align-items-center">
                            <Link to="ad/create">
                                <button type="button" className="btn-primary">Create adv</button>
                            </Link>
                        </div>
                        <div className="content-row dropdown content-filter-wrapper row ">
                            <button className="btn-secondary dropdown-toggle" type="button" id="dropdownMenuButton"
                                    data-toggle="dropdown" aria-haspopup="true" aria-expanded="false">
                                Filter
                            </button>
                            <div className="dropdown-menu" aria-labelledby="dropdownMenuButton">
                                <a className="dropdown-item" onClick={sortByDefault}>Default</a>
                                <a className="dropdown-item" onClick={sortByPriceAsc}>By price ascending</a>
                                <a className="dropdown-item" onClick={sortByPriceDesc}>By price descending</a>
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

                    {<AdWrapper posts={posts}/>}

                </div>
            </div>
        </div>
    );
};

export default Home;