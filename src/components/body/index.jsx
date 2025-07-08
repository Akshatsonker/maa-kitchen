/*
import React, { useEffect } from 'react';
import Typed from 'typed.js';

const TypedText = () => {

    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: ['Maa k haath', 'Ka Khana', 'Dil Bhar Jana'],
            typeSpeed: 50,
        };

        // Initialize Typed.js
        const typed = new Typed('#element', options);

        // Cleanup function to destroy Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, 
    []);
    const FoodSearch = () => {
      const [searchTerm, setSearchTerm] = useState('');
  
      const handleSearch = () => {
          // Handle the search logic here
          console.log('Searching for:', searchTerm);
          // You can also call an API or filter a list based on the searchTerm
      },
    
    []
    []); // Empty dependency array means this effect runs once on mount


    
    return (
      <div className="container">
        <div className="w-full h-96 bg-white  ">
            <span className="  text-bold text-9xl text-gray-100 ml-85 pt-32 " id="element"></span> {/* This is where the typed text will appear */
           /*
           <div>
            <div className="flex flex-col items-center mt-24">
            <input
                type="text"
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                placeholder="Search for food and restaurants here..."
                className="text-black ml-96 rounded-xl border-2 border-gray-300 p-2 w-1/3"
            />
            <button
                onClick={handleSearch}
                className="text-white ml-4 rounded-xl border-2 bg-black p-2"
            >
                Search
            </button>
        </div>
        </div>
        </div>
        
        </div>
    );
};
}
export default TypedText;
export default FoodSearch;

import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import './styles.css'

const TypedText = () => {
    useEffect(() => {
        // Options for Typed.js
        const options = {
            strings: ['Maa k haath', 'Ka Khana', 'Dil Bhar Jana !'],
            typeSpeed: 50,
        };

        // Initialize Typed.js
        const typed = new Typed('#element', options);

        // Cleanup function to destroy Typed instance on component unmount
        return () => {
            typed.destroy();
        };
    }, []); // Empty dependency array means this effect runs once on mount

    const [searchTerm, setSearchTerm] = useState('');

    const handleSearch = () => {
        // Handle the search logic here
        console.log('Searching for:', searchTerm);
        // You can also call an API or filter a list based on the searchTerm
    };

    return (
        <div className="container">
            <div className="w-full h-96 bg-white custom-background">
                <span className="text-bold text-9xl text-white ml-85 pt-32" id="element"></span> {/* This is where the typed text will appear */
                /*
                <div className="flex flex-col items-center mt-24">
                    <input
                        type="text"
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        placeholder="Search for food here..."
                        className="text-white ml-28rounded-xl  bg-black border-2 border-gray-300 p-2 w-1/3"
                    />
                    <button
                        onClick={handleSearch}
                        className="text-white ml-4 rounded-xl border-2 bg-black p-2"
                    >
                        Search
                    </button>
                </div>
            </div>
        </div>
    );
};

export default TypedText;
*/

/*
import React, { useEffect, useState } from 'react';
import Typed from 'typed.js';
import Suggestions from './suggestion'; // Ensure this is the correct path to your Suggestions component
import './styles.css';
import { Link } from 'react-router-dom';

const TypedText = () => {
    // State for typed text
    useEffect(() => {
        const options = {
            strings: ['Welcome to Maa Kitchen!'],
            typeSpeed: 50,
        };

        const typed = new Typed('#element', options);

        return () => {
            typed.destroy();
        };
    }, []);

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

    return (
        <div className="w-full">
            <div className="w-full h-96  bg-white custom-background">
             <span className="text-bold text-7xl  text-white flex justify-center items-center mt-36" id="element"></span>
                
               <div className="flex flex-row items-center justify-center mt-24 h-56">

  <div className="relative flex flex-col">
    <input
      type="text"
      value={searchTerm}
      onChange={handleChange}
      placeholder="Search for food here..."
      className="text-white h-8 rounded-xl bg-black border-2 border-gray-300 p-2 w-80"
    />
    {showDropdown && (
      <div className="absolute top-full left-0 w-full z-10">
        <Suggestions handleClick={handleClick} data={filteredFoodItems} />
      </div>
    )}
  </div>
 
  <button
  onClick={handleSearch}
  className="text-white h-8 rounded-xl border-2  bg-black p-2 w-32"
>
  <Link to="/menu" className=" w-full  h-full">
    Search
  </Link>
</button>
</div>


            </div>
        </div>
    );
};

export default TypedText;
*/
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
        <section className="w-full h-screen bg-[url('https://images.unsplash.com/photo-1606787366850-de6330128bfc')] bg-cover bg-center relative">
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