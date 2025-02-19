/*
import React from "react";
//import fileLoader from "react-dom"
import Logo from "../header/logo.png"

import { useNavigate } from "react-router-dom";


export default function Header(){

    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/Menu'); 
        // Navigate to the Cart page
    };
    return(
        <div className="container">
        <div className="h-40 w-full bg-black flex items-center justify-center">
            <img className="h-24 w-24 ml-20 mt-4 bg-white rounded-4xl" src={Logo} alt=""/>
            <h1 className="text-red-700 text-5xl">Maa Kitchen</h1>
            <ul className="ml-200 mt-30">
            <span className="text-[white] mr-10">Home</span>
            <span className="text-[white] mr-10 "  onClick={handleMenuClick}>Menu</span>
            <span className="text-[white] mr-10">SignIn</span>
            <span className="text-[white] mr-10">Login</span>
            </ul>
        </div>
    </div>
    );
} ;
 */
import React from "react";
import Logo from "../header/logo.png";
import { useNavigate } from "react-router-dom";

export default function Header() {
    const navigate = useNavigate();

    const handleMenuClick = () => {
        navigate('/Menu'); // Navigate to the CardDemo page
    };

    const handleLoginClick = () => {
        navigate('/Login'); // Navigate to the CardDemo page
    };

    const handleAboutUsClick = () => {
        navigate('/AboutUs'); // Navigate to the CardDemo page
    };

    return (
        <div className="container">
            <div className="h-40 w-full bg-black flex items-center justify-center">
                <img className="h-24 w-24 ml-20 mt-4 bg-white rounded-4xl" src={Logo} alt="Logo" />
                <h1 className="text-red-700 text-5xl">Maa Kitchen</h1>
                <ul className="ml-200 mt-30 flex space-x-10">
                    <span className="text-[white] mr-10">Home</span>
                    <span className="text-[white] mr-10 cursor-pointer" onClick={handleMenuClick}>Menu</span>
                   
                    <span className="text-[white] mr-10 cursor-pointer"onClick={handleLoginClick}>Login</span>
                    <span className="text-[white] mr-11 cursor-pointer"onClick={handleAboutUsClick}>AboutUs</span>
                </ul>
            </div>
        </div>
    );
}
