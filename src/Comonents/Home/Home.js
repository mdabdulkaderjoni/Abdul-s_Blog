import React from 'react';
import NavigationBar from '../NavigationBar/NavigationBar';
import './Home.css'
import header from './header.svg'
const Home = () => {
    return (
        <div>
            <NavigationBar></NavigationBar>
            <div className="header-div">
                <img src={header} className="header-img" fluid alt=""/>
            </div>
        </div>
    );
};

export default Home;