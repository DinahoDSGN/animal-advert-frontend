import Cookies from 'js-cookie';
import React from 'react';
import { Redirect } from 'react-router-dom';

const Logout = () => {
    Cookies.remove("jwttoken")
    window.location.reload()

    return (
        <span>a</span>
    );
};

export default Logout;