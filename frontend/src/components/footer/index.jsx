/*
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
    */
import React, { useState } from "react";
import { FiPhone, FiMail, FiMapPin, FiMessageCircle, FiX } from "react-icons/fi";
import Chatbot from "../../chatbot/chatbot.jsx";
import { Link } from 'react-router-dom';

export default function Footer() {
    const [showChatbot, setShowChatbot] = useState(false);

    const toggleChatbot = () => {
        setShowChatbot(!showChatbot);
    };

    return (
        <footer className="w-full bg-gradient-to-br from-gray-900 to-black text-white pt-12 pb-6 relative">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 mb-8">
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-red-400">Quick Links</h3>
                        <ul className="space-y-2">
                           <li><Link to="/welcome" className="hover:text-red-300 transition-colors">Home</Link></li>
                           <li><Link to="/menu" className="hover:text-red-300 transition-colors">Menu</Link></li>
                           <li><Link to="/aboutUs" className="hover:text-red-300 transition-colors">AboutUs</Link></li>
                          <li><Link to="/login" className="hover:text-red-300 transition-colors">Login</Link></li>
                        </ul>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-red-400">Contact Us</h3>
                        <div className="space-y-3">
                            <div className="flex items-center">
                                <FiPhone className="mr-3 text-red-400" />
                                <span>+91 XXXXX XXXXX</span>
                            </div>
                            <div className="flex items-center">
                                <FiMail className="mr-3 text-red-400" />
                                <span>contact@maakitchen.com</span>
                            </div>
                            <div className="flex items-center">
                                <FiMapPin className="mr-3 text-red-400" />
                                <span>NIT Jamshedpur, Jamshedpur</span>
                            </div>
                        </div>
                    </div>
                    
                    <div>
                        <h3 className="text-xl font-bold mb-4 text-red-400">Opening Hours</h3>
                        <div className="space-y-2">
                            <div className="flex justify-between">
                                <span>Monday - Friday</span>
                                <span>10 AM - 10 PM</span>
                            </div>
                            <div className="flex justify-between">
                                <span>Saturday - Sunday</span>
                                <span>11 AM - 11 PM</span>
                            </div>
                        </div>
                    </div>
                </div>
                
                <div className="border-t border-gray-700 pt-6 text-center text-gray-400">
                    <p>© {new Date().getFullYear()} MaaKitchen. All rights reserved.</p>
                </div>
            </div>

            {/* Chatbot Floating Button and Interface */}
           <Chatbot/>
        </footer>
    );
}
