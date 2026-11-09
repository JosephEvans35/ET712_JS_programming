import React from "react";
import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Navbars from './navbars';
import Home from './home';

const Contact = function(){
    return(
        <>
        
        <header className ="header">
            <h1 className = "headertitle">Contact Us</h1>
        </header>
        </>
    )
}

export default Contact