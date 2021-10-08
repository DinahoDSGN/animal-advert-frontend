import React from 'react';
import './App.css';
import './styles/sidebar.css';
import './styles/auth.css';
import Sidebar from './components/Sidebar';
import Auth from './pages/Auth';
import {BrowserRouter, Route} from 'react-router-dom';
import Home from './pages/Home';
import AdPage from "./pages/AdPage";
import ProfileSettings from "./pages/ProfileSettings";
require('dotenv').config()

function App() {

    return (
        <div className="App">


            <div className="container">

                <BrowserRouter>
                    <Route path="/auth" component={Auth}/>
                    <div>
                        <Sidebar/>
                        <Route path="/" exact component={Home}/>
                        <Route path="/ad" exact component={AdPage}/>
                        <Route path="/settings" component={ProfileSettings}/>
                    </div>
                </BrowserRouter>
            </div>

        </div>
    );
}

export default App;
