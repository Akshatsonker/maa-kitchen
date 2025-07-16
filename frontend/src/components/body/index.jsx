import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import { FiSearch } from 'react-icons/fi';
import { Link } from 'react-router-dom';

const TypedText = () => {
    // State for search functionality
    const [searchTerm, setSearchTerm] = useState('');
    const [foodItems] = useState([
        "Egg Roll",
        "Chicken Chilly Roll",
        "Crispy Chicken Italian Roll",
        "Chicken Egg Roll",
        "Chicken",
        "Burger",
        "Biryani"
    ]);
    const [showDropdown, setShowDropdown] = useState(false);
    const [filteredFoodItems, setFilteredFoodItems] = useState([]);

    const handleChange = (event) => {
        const query = event.target.value.toLowerCase();
        setSearchTerm(query);
        if (query.length > 1) {
            const filteredData = foodItems.filter(item => item.toLowerCase().includes(query));
            setFilteredFoodItems(filteredData);
            setShowDropdown(true);
        } else {
            setShowDropdown(false);
        }
    };

    const handleClick = (event) => {
        setShowDropdown(false);
        setSearchTerm(event.target.innerText);
        setFilteredFoodItems([]);
    };

    const handleSearch = () => {
        console.log('Searching for:', searchTerm);
        // You can also call an API or filter a list based on the searchTerm
    };

    useEffect(() => {
        const options = {
            strings: ['Authentic Flavors', 'Homemade Taste', 'Grandma\'s Recipes'],
            typeSpeed: 60,
            backSpeed: 40,
            loop: true
        };

        const typed = new Typed('#element', options);
        return () => typed.destroy();
    }, []);

    return (
        <section className="w-full h-screen bg-[url('https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg')] bg-cover bg-center relative">
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col items-center justify-center px-4">
                <div className="text-center mb-12">
                    <h1 className="text-5xl md:text-7xl font-bold text-white mb-4">
                        Welcome to <span className="text-red-400">Maa Kitchen</span>
                    </h1>
                    <div className="h-16">
                        <span className="text-2xl md:text-4xl text-orange-200" id="element"></span>
                    </div>
                </div>
                
                <div className="w-full max-w-2xl bg-white bg-opacity-20 backdrop-blur-md rounded-xl p-1 shadow-xl relative">
                    <div className="flex">
                        <input
                            type="text"
                            placeholder="What are you craving today?"
                            className="flex-grow h-14 px-6 rounded-l-xl bg-white bg-opacity-90 focus:outline-none focus:ring-2 focus:ring-red-400 text-gray-800 placeholder-gray-500"
                            value={searchTerm}
                            onChange={handleChange}
                        />
                        <Link 
                            to="/menu"
                            className="w-14 h-14 bg-gradient-to-r from-red-500 to-orange-500 rounded-r-xl flex items-center justify-center text-white hover:opacity-90 transition-opacity"
                            onClick={handleSearch}
                        >
                            <FiSearch size={24} />
                        </Link>
                    </div>
                    {showDropdown && filteredFoodItems.length > 0 && (
                        <div className="absolute top-full left-0 right-0 mt-1 bg-white rounded-lg shadow-lg z-10 max-h-60 overflow-auto">
                            {filteredFoodItems.map((item, index) => (
                                <div 
                                    key={index}
                                    className="p-3 hover:bg-gray-100 cursor-pointer text-gray-800"
                                    onClick={handleClick}
                                >
                                    {item}
                                </div>
                            ))}
                        </div>
                    )}
                </div>
                
                <div className="mt-8 grid grid-cols-2 md:grid-cols-4 gap-4">
                    {["Biryani", "Rolls", "Curry", "Desserts"].map((item) => (
                        <div key={item} className="bg-white bg-opacity-10 backdrop-blur-sm rounded-lg p-3 text-center text-white hover:bg-opacity-20 transition-all cursor-pointer border border-white border-opacity-20">
                            {item}
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default TypedText;