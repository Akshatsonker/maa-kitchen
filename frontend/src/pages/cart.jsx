import React from 'react';
import { cn } from '../components/header/utils.js';
import { Link } from 'react-router-dom';

export const products = [
  {
    id: 1,
    name: "Veg Roll",
    price: 55,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "A delicious veg roll made with fresh ingredients.",
  },
  {
    id: 2,  
    name:"Chicken Egg Roll",
    price: 90,  
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    description: "A tasty chicken egg roll with a perfect blend of spices.",
  },
  {
    id: 3,
    name: "Chilly Chicken Roll",
    price: 120, 
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "A spicy and flavorful chilly chicken roll.",
  },
  {
    id: 4,
    name: "Chicken Italian Roll",
    price: 120,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    description: "An Italian-inspired chicken roll with herbs and spices.",
  },
  {
    id: 5,
    name: "Paneer Roll",
    price: 100,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "A vegetarian paneer roll with a rich and creamy filling.",
  },
  {
    id: 6,
    name: "Egg Roll",
    price: 65,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    description: "A classic egg roll with a soft and fluffy texture.",
  },
  { 
    id: 7,
    name: "Margherita Pizza",
    price: 199,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    description: "A classic Margherita pizza with fresh basil and mozzarella cheese.",
  },
  {
    id: 8,
    name: "Garden Veg Pizza",
    price: 210,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    description: "A garden-fresh vegetable pizza loaded with seasonal veggies.",
  },
  {
    id: 9,
    name: "Mushroom,Onion,Capsicum Pizza",
    price: 220, 
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    description: "A savory pizza topped with mushrooms, onions, and capsicum.",
  },
  {
    id: 10,
    name: "Onion,Corn Pizza",
    price: 190,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",
    description: "A delicious pizza with a perfect blend of onions and corn.",
  },
  {
    id: 11,
    name: "Paneer,Capsicum,Onion Pizza",
    price: 225,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg",  
    description: "A flavorful pizza with paneer, capsicum, and onions.",  
  },
  {
    id: 12,
    name: "BBQ Chicken Pizza",
    price: 250,
    image: "https://images.pexels.com/photos/315755/pexels-photo-315755.jpeg", 
    description: "A smoky BBQ chicken pizza with a tangy sauce.",
  },
  {
    id: 13,
    name: "Veg Fried Rice",
    price: 80,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",  
    description: "A flavorful veg fried rice with a mix of vegetables.",
  },
  {
    id: 14,
    name: "Veg Noodles",
    price: 120,
    image: "https://images.pexels.com/photos/1640777/pexels-photo-1640777.jpeg",
    description: "Spicy vegetable noodles with a perfect blend of spices.",
  },
  {
    id: 15,
    name: "Egg Rice",
    price: 90,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg", 
    description: "A delicious egg rice dish with a hint of spices.",
  },
  {
    id: 16,
    name: "Egg Noodles",
    price: 140,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    description: "Egg noodles stir-fried with vegetables and spices.",
  },
  {
    id: 17,
    name: "Chicken Rice",
    price: 110,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    description: "A flavorful chicken rice dish with aromatic spices.",
  },
  {
    id: 18,
    name: "Chicken Noodles",
    price: 165,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    description: "Chicken noodles stir-fried with vegetables and sauces.",
  },
  {
    id: 19,
    name: "Chicken Egg Rice",
    price: 120,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    description: "A delicious chicken fried rice with a mix of vegetables and spices.",
  },
  {
    id: 20,
    name: "Chicken Egg Noodles",
    price: 199,
    image: "https://images.pexels.com/photos/2474661/pexels-photo-2474661.jpeg",
    description: "Chicken noodles stir-fried with vegetables and sauces.",
  }
];

// Helper function to filter products by category
const filterProductsByCategory = (category) => {
  const categoryMap = {
    "Rolls": [1, 2, 3, 4, 5, 6],
    "Pizza": [7, 8, 9, 10, 11, 12],
    "Rice & Noodles": [13, 14, 15, 16, 17, 18, 19, 20]
  };
  return products.filter(product => categoryMap[category].includes(product.id));
};

export default function Products() {
  return (
    <div className="container py-4 sm:py-8 px-3 sm:px-6">
      <span className="fixed top-3 right-3 sm:top-6 sm:right-6 z-50">
        <Link 
          to="/welcome" 
          className="bg-white/90 hover:bg-white text-black font-medium py-1 px-3 sm:py-2 sm:px-4 rounded-full shadow-sm sm:shadow-md transition-all duration-200 text-xs sm:text-base"
        >
          Home
        </Link>
      </span>

      {["Rolls", "Pizza", "Rice & Noodles"].map((category) => (
        <section key={category} className="mb-10 sm:mb-16">
          <h1 className="text-xl sm:text-3xl font-bold text-center mb-4 sm:mb-8">{category}</h1>
          <div className="grid grid-cols-2 xs:grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-3 sm:gap-6 max-w-7xl mx-auto">
            {filterProductsByCategory(category).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </section>
      ))}
    </div>
  );
}

// Corrected ProductCard with proper Link wrapping
export function ProductCard({ product }) {
  return (
    <Link 
      to={`/product/${product.id}`} 
      className="group relative block overflow-hidden rounded-lg sm:rounded-xl shadow-sm sm:shadow-md w-full aspect-[3/4] min-h-[160px] sm:min-h-[250px]"
    >
      {/* Image with zoom effect */}
      <div className="absolute inset-0 overflow-hidden">
        <div 
          className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
          style={{ backgroundImage: `url(${product.image})` }}
        />
        {/* Dark overlay that lightens on hover */}
        <div className="absolute inset-0 bg-black/30 group-hover:bg-black/10 transition-all duration-300"></div>
      </div>
      
      {/* Always visible product name and price */}
      <div className="absolute bottom-0 left-0 right-0 p-2 sm:p-4 z-10">
        <div className="flex justify-between items-center text-white">
          <h1 className="font-bold text-xs sm:text-base md:text-lg line-clamp-1">{product.name}</h1>
          <p className="text-xs sm:text-sm font-semibold text-yellow-300">₹{product.price}</p>
        </div>
      </div>

      {/* Description that appears on hover */}
      <div className="absolute inset-0 flex items-end p-2 sm:p-4 opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20">
        <div className="text-white w-full">
          <p className="text-[10px] sm:text-xs bg-black/70 p-2 rounded line-clamp-3">
            {product.description}
          </p>
        </div>
      </div>
    </Link>
  );
}