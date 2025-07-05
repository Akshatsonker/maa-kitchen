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
  {/* Input and Suggestions Wrapper */}
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
  {/* Search Button */}
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
