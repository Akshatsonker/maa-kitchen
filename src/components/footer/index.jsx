import React from "react"
import Chatbot from "../../chatbot/chatbot.jsx"
import "./style.css"


export default function Footer(){
    return (
        <div className=" bg-gray-950 h-full w-full ">
        <div className="text-white bg-gray-950 text-center">
        <p>Contact Us - xxxxxxxxxx</p>
        <p>About Us</p>
        </div>
        <div className="text-white bg-gray-950 text-center py-4 h-24">
            <p>copyright &#169; MaaKitchen | All rights reserved</p>
        </div>
        <div className="fixed bottom-8 right-0 bg-gray-950 p-4 rounded-lg shadow-lg z-50">
  <Chatbot />
</div>
        </div>
    )
}