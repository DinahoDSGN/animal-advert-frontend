import React, {useEffect, useState} from 'react';
import './App.css';
import Sidebar from './components/Sidebar';
import Auth from './pages/Auth';
import {BrowserRouter, Redirect, Route} from 'react-router-dom';
import Home from './pages/Home';
import AdPage from "./pages/AdPage";
import ProfileSettings from "./pages/ProfileSettings";
import MyAds from "./pages/MyAds";
import Cookies from "js-cookie";
import Logout from './pages/Logout';
import Profile from "./pages/Profile";
import About from "./pages/About";
import Notifications from "./pages/Notifications";
import AdCreate from "./components/AdCreate";

function App() {
    const [userId, setUserId] = useState(0)
    const [username, setUsername] = useState("")
    const [name, setName] = useState("")
    const [lastname, setLastname] = useState("")
    const [isAuth, setIsAuth] = useState(false)
    let auth;

    useEffect(() => {
        (
            async () => {
                const response = await fetch("http://localhost:8080/api/user/me")

                const content = await response.json();

                setUserId(content.data["id"]);
                setUsername(content.data["username"])
                setName(content.data["name"])
                setLastname(content.data["lastname"])

                let jwt = Cookies.get("jwttoken")
                if (jwt != null) {
                    console.log("authed")
                    setIsAuth(true)
                    auth = true
                    // return
                }else{
                    console.log("unauthed")
                    setIsAuth(false)
                    auth = false
                }

                console.log(isAuth)
                console.log("auth = " + auth)

            }
        )();
    }, []);

    return (
        <div className="App">
            <div className="container">
                <BrowserRouter>
                    {
                        isAuth ?
                            <div>
                                <Sidebar username={username}/>
                                <Route path="/" exact component={Home}/>
                                <Route path="/ad" exact component={Home}/>
                                <Route path="/ad/create" component={AdCreate}/>
                                <Route path="/ad/:id" sensitive={true} component={AdPage}/>
                                <Route path="/settings" component={() => <ProfileSettings
                                    userId={userId}
                                    username={username}
                                    name={name}
                                    lastname={lastname}
                                />}/>
                                <Route path="/myads" component={() => <MyAds userId={userId}/>}/>
                                <Route path="/logout" component={Logout}/>
                                <Route path="/profile" component={Profile}/>
                                <Route path="/about" component={About}/>
                                <Route path="/notifications" component={Notifications}/>

                            </div>
                            :
                            <div>
                                {/*<Redirect to="/auth"/>*/}
                                <Route path="/auth" component={Auth}/>
                            </div>
                    }
                </BrowserRouter>
            </div>
        </div>
    );
}

export default App;
