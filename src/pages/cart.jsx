/*
import React from 'react';
import { cn } from '../components/header/utils.js';
import { Link } from 'react-router-dom';

export const products = [
  {
    id: 1,
    name: "Veg Roll",
    price: 55,
    image: "https://wbcdn.in/assets/img/uploads/mywb/uploads/img_7da6ad49d67349e5fe81ba0df42255eaf7cdb929.jpg",
    description: "A delicious veg roll made with fresh ingredients.",
  },
  {
    id: 2,  
    name:"Chicken Egg Roll",
    price: 90,  
    image: "https://www.recipemasters.in/wp-content/uploads/2014/03/chicken-egg-roll.jpg",
    description: "A tasty chicken egg roll with a perfect blend of spices.",
  },
  {
    id: 3,
    name: "Chilly Chicken Roll",
    price: 120, 
    image: "https://i.ytimg.com/vi/pMCS1TR4Wyo/maxresdefault.jpg",
    description: "A spicy and flavorful chilly chicken roll.",
  },
  {
    id: 4,
    name: "Chicken Italian Roll",
    price: 120,
    image: "https://blackandbrownbakers.com/wp-content/uploads/2020/06/Chicken-Italian-Roll.jpg",
    description: "An Italian-inspired chicken roll with herbs and spices.",
  },
  {
    id: 5,
    name: "Paneer Roll",
    price: 100,
    image: "https://ministryofcurry.com/wp-content/uploads/2019/10/paneer-kathi-rolls-1-850x1275.jpg",
    description: "A vegetarian paneer roll with a rich and creamy filling.",
  },
  {
    id: 6,
    name: "Egg Roll",
    price: 65,
    image: "https://i.pinimg.com/originals/ef/3d/52/ef3d52c67ab18e806c0b09a6e9b5835d.jpg",
    description: "A classic egg roll with a soft and fluffy texture.",
  },
  { 
    id: 7,
    name: "Margherita Pizza",
    price: 199,
    image: "https://laurenslatest.com/wp-content/uploads/2021/01/margherita-pizza-recipe-01-1066x1536.jpg",
    description: "A classic Margherita pizza with fresh basil and mozzarella cheese.",
  },
  {
    id: 8,
    name: "Garden Veg Pizza",
    price: 210,
    image: "https://images.squarespace-cdn.com/content/v1/580a73c320099eeb9bb90e68/1502218388325-O0XGNFS6NHHBOK58TEB4/Pizza-with-mushrooms-tomatoes-and-peppers.JPG",
    description: "A garden-fresh vegetable pizza loaded with seasonal veggies.",
  },
  {
    id: 9,
    name: "Mushroom,Onion,Capsicum Pizza",
    price: 220, 
    image: "https://alibaik.in/wp-content/uploads/2023/12/vegpizza-9.jpg",
    description: "A savory pizza topped with mushrooms, onions, and capsicum.",
  },
  {
    id: 10,
    name: "Onion,Corn Pizza",
    price: 190,
    image: "https://i.pinimg.com/originals/fa/15/5d/fa155d0be811f2b071493389d706c093.jpg",
    description: "A delicious pizza with a perfect blend of onions and corn.",
  },
  {
    id: 11,
    name: "Paneer,Capsicum,Onion Pizza",
    price: 225,
    image: "https://i.pinimg.com/originals/72/b2/14/72b2141e2ca565f2e92a58910fc2afd2.jpg",  
    description: "A flavorful pizza with paneer, capsicum, and onions.",  
  },
  {
    id: 12,
    name: "BBQ Chicken Pizza",
    price: 250,
    image: "https://www.tasteandtellblog.com/wp-content/uploads/2021/01/BBQ-Chicken-Pizza-4.jpg", 
    description: "A smoky BBQ chicken pizza with a tangy sauce.",
  },
  {
    id: 13,
    name: "Veg Fried Rice",
    price: 80,
    image: "https://i.ytimg.com/vi/5xshVkXD3oE/maxresdefault.jpg",  
    description: "A flavorful veg fried rice with a mix of vegetables.",
  },
  {
    id: 14,
    name: "Veg Noodles",
    price: 120,
    image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Spicy_Vegetable_Noodles_Recipe-1.jpg",
    description: "Spicy vegetable noodles with a perfect blend of spices.",
  },
  {
    id: 15,
    name: "Egg Rice",
    price: 90,
    image: "https://1.bp.blogspot.com/-NlrU-L6jZPY/WUynCXGP5sI/AAAAAAAADiY/aA-7knSL7JsEvog1n2_b7uOnxA3afyJMACLcBGAs/s1600/Trial-3.jpg", 
    description: "A delicious egg rice dish with a hint of spices.",
  },
  {
    id: 16,
    name: "Egg Noodles",
    price: 140,
    image: "https://www.justspices.co.uk/media/recipe/Egg-Fried-Noodles_Chinese_Allrounder.webp",
    description: "Egg noodles stir-fried with vegetables and spices.",
  },
  {
    id: 17,
    name: "Chicken Rice",
    price: 110,
    image: "https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg",
    description: "A flavorful chicken rice dish with aromatic spices.",
  },
  {
    id: 18,
    name: "Chicken Noodles",
    price: 165,
    image: "https://www.urdupalace.com/wp-content/uploads/2016/11/chicken-noodles.jpg",
    description: "Chicken noodles stir-fried with vegetables and sauces.",
  },
  {
    id: 19,
    name: "Chicken Egg Rice",
    price: 120,
    image: "https://www.thesouthafrican.com/wp-content/uploads/2020/06/b2c6bacf-chicken-fried-rice-recipe-scaled.jpeg",
    description: "A delicious chicken fried rice with a mix of vegetables and spices.",
  },
  {
    id: 20,
    name: "Chicken Egg Noodles",
    price: 199,
    image: "https://png.pngtree.com/background/20230611/original/pngtree-chicken-egg-noodles-with-vegetables-picture-image_3136988.jpg",
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
    <div className="container py-8">
      <span className="absolute top-2 right-4 text-black text-2xl">
        <Link to="/welcome">Home</Link>
      </span>

      // Rolls Section 
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-center mb-8">Rolls</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {filterProductsByCategory("Rolls").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      //Pizza Section 
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-center mb-8">Pizza</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {filterProductsByCategory("Pizza").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>

      //Rice & Noodles Section 
      <section className="mb-16">
        <h1 className="text-3xl font-bold text-center mb-8">Rice & Noodles</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6 max-w-6xl mx-auto px-4">
          {filterProductsByCategory("Rice & Noodles").map((product) => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
      </section>
    </div>
  );
}

// Improved ProductCard component
export function ProductCard({ product }) {
  
  return (
    <div className="group relative overflow-hidden rounded-lg shadow-lg h-96 w-full">
      // Image with proper loading 
     <Link  to={`/product/${product.id}`} className="absolute inset-0 z-10">
  <div 
    className="h-full w-full bg-cover bg-center transition-transform duration-300 group-hover:scale-110"
    style={{ backgroundImage: `url(${product.image})` }}
  >
    <div className="absolute inset-0 bg-opacity-30 group-hover:bg-opacity-50 transition-all duration-300"></div>
  </div>
</Link>
      
      // Content 
      <div className="relative h-full flex flex-col justify-end p-4 text-white">
        <h1 className="font-bold text-xl md:text-2xl mb-2">{product.name}</h1>
        <p className="text-lg font-semibold text-yellow-300 mb-2">{product.price} INR</p>
        <p className="text-sm opacity-0 group-hover:opacity-100 transition-opacity duration-300">
          {product.description}
        </p>
      </div>
    </div>
  );
}
  */

import React from 'react';
import { cn } from '../components/header/utils.js';
import { Link } from 'react-router-dom';

export const products = [
  // ... (keep your existing products array exactly as is)
 {
    id: 1,
    name: "Veg Roll",
    price: 55,
    image: "https://wbcdn.in/assets/img/uploads/mywb/uploads/img_7da6ad49d67349e5fe81ba0df42255eaf7cdb929.jpg",
    description: "A delicious veg roll made with fresh ingredients.",
  },
  {
    id: 2,  
    name:"Chicken Egg Roll",
    price: 90,  
    image: "https://www.recipemasters.in/wp-content/uploads/2014/03/chicken-egg-roll.jpg",
    description: "A tasty chicken egg roll with a perfect blend of spices.",
  },
  {
    id: 3,
    name: "Chilly Chicken Roll",
    price: 120, 
    image: "https://i.ytimg.com/vi/pMCS1TR4Wyo/maxresdefault.jpg",
    description: "A spicy and flavorful chilly chicken roll.",
  },
  {
    id: 4,
    name: "Chicken Italian Roll",
    price: 120,
    image: "https://blackandbrownbakers.com/wp-content/uploads/2020/06/Chicken-Italian-Roll.jpg",
    description: "An Italian-inspired chicken roll with herbs and spices.",
  },
  {
    id: 5,
    name: "Paneer Roll",
    price: 100,
    image: "https://ministryofcurry.com/wp-content/uploads/2019/10/paneer-kathi-rolls-1-850x1275.jpg",
    description: "A vegetarian paneer roll with a rich and creamy filling.",
  },
  {
    id: 6,
    name: "Egg Roll",
    price: 65,
    image: "https://i.pinimg.com/originals/ef/3d/52/ef3d52c67ab18e806c0b09a6e9b5835d.jpg",
    description: "A classic egg roll with a soft and fluffy texture.",
  },
  { 
    id: 7,
    name: "Margherita Pizza",
    price: 199,
    image: "https://laurenslatest.com/wp-content/uploads/2021/01/margherita-pizza-recipe-01-1066x1536.jpg",
    description: "A classic Margherita pizza with fresh basil and mozzarella cheese.",
  },
  {
    id: 8,
    name: "Garden Veg Pizza",
    price: 210,
    image: "https://images.squarespace-cdn.com/content/v1/580a73c320099eeb9bb90e68/1502218388325-O0XGNFS6NHHBOK58TEB4/Pizza-with-mushrooms-tomatoes-and-peppers.JPG",
    description: "A garden-fresh vegetable pizza loaded with seasonal veggies.",
  },
  {
    id: 9,
    name: "Mushroom,Onion,Capsicum Pizza",
    price: 220, 
    image: "https://alibaik.in/wp-content/uploads/2023/12/vegpizza-9.jpg",
    description: "A savory pizza topped with mushrooms, onions, and capsicum.",
  },
  {
    id: 10,
    name: "Onion,Corn Pizza",
    price: 190,
    image: "https://i.pinimg.com/originals/fa/15/5d/fa155d0be811f2b071493389d706c093.jpg",
    description: "A delicious pizza with a perfect blend of onions and corn.",
  },
  {
    id: 11,
    name: "Paneer,Capsicum,Onion Pizza",
    price: 225,
    image: "https://i.pinimg.com/originals/72/b2/14/72b2141e2ca565f2e92a58910fc2afd2.jpg",  
    description: "A flavorful pizza with paneer, capsicum, and onions.",  
  },
  {
    id: 12,
    name: "BBQ Chicken Pizza",
    price: 250,
    image: "https://www.tasteandtellblog.com/wp-content/uploads/2021/01/BBQ-Chicken-Pizza-4.jpg", 
    description: "A smoky BBQ chicken pizza with a tangy sauce.",
  },
  {
    id: 13,
    name: "Veg Fried Rice",
    price: 80,
    image: "https://i.ytimg.com/vi/5xshVkXD3oE/maxresdefault.jpg",  
    description: "A flavorful veg fried rice with a mix of vegetables.",
  },
  {
    id: 14,
    name: "Veg Noodles",
    price: 120,
    image: "https://www.archanaskitchen.com/images/archanaskitchen/0-Archanas-Kitchen-Recipes/2016/1-Archana/Spicy_Vegetable_Noodles_Recipe-1.jpg",
    description: "Spicy vegetable noodles with a perfect blend of spices.",
  },
  {
    id: 15,
    name: "Egg Rice",
    price: 90,
    image: "https://1.bp.blogspot.com/-NlrU-L6jZPY/WUynCXGP5sI/AAAAAAAADiY/aA-7knSL7JsEvog1n2_b7uOnxA3afyJMACLcBGAs/s1600/Trial-3.jpg", 
    description: "A delicious egg rice dish with a hint of spices.",
  },
  {
    id: 16,
    name: "Egg Noodles",
    price: 140,
    image: "https://www.justspices.co.uk/media/recipe/Egg-Fried-Noodles_Chinese_Allrounder.webp",
    description: "Egg noodles stir-fried with vegetables and spices.",
  },
  {
    id: 17,
    name: "Chicken Rice",
    price: 110,
    image: "https://i.ytimg.com/vi/CIVBFsEyViQ/maxresdefault.jpg",
    description: "A flavorful chicken rice dish with aromatic spices.",
  },
  {
    id: 18,
    name: "Chicken Noodles",
    price: 165,
    image: "https://www.urdupalace.com/wp-content/uploads/2016/11/chicken-noodles.jpg",
    description: "Chicken noodles stir-fried with vegetables and sauces.",
  },
  {
    id: 19,
    name: "Chicken Egg Rice",
    price: 120,
    image: "https://www.thesouthafrican.com/wp-content/uploads/2020/06/b2c6bacf-chicken-fried-rice-recipe-scaled.jpeg",
    description: "A delicious chicken fried rice with a mix of vegetables and spices.",
  },
  {
    id: 20,
    name: "Chicken Egg Noodles",
    price: 199,
    image: "https://png.pngtree.com/background/20230611/original/pngtree-chicken-egg-noodles-with-vegetables-picture-image_3136988.jpg",
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