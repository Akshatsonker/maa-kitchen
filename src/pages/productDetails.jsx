import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
// Make sure this is the correct path and export from cart.jsx
// cart.jsx should have: export const products = [...];
import {products}  from "./cart.jsx"; 

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id.toString() === id.toString());

  const finalPrice = quantity * product.price;

  // Add error handling for products array
  if (!products || !Array.isArray(products)) {
    return <div>Loading products or products not available...</div>;
  }

 

  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
    console.log(`Added ${quantity} ${product.name}(s) ${finalPrice} to cart!`);
  };

  const handleOrderNow = () => {
    alert(`Ordered ${quantity} ${product.name}(s)!`);
    navigate("/");
  };

  return (
    
   <div >
    <h1 className="text-center mt-10 text-5xl font-bold mt-5">Product Details</h1>
     <span className="absolute top-4 right-4 text-black text-2xl">
        <Link to="/menu">Menu</Link>
      </span>

    <div className="product-details items-center justify-center text-center p-5">
      <img  src={product.image} alt={product.name} style={{ width: 400,height:400,marginLeft: 580  }} />
      <h2 className="text-3xl text-gray-800">{product.name}</h2>
      <p className="">{product.description}</p>
      <p className="text-2xl text-orange-700">Price: {product.price} INR</p>
      <div>
        <button className="text-2xl"onClick={() => setQuantity(q => Math.max(1, q - 1))}>-</button>
        <span style={{ margin: "0 10px" }}>{quantity}</span>
        <button onClick={() => { setQuantity(q => q + 1) }}>+</button>
      </div>
      <button className="bg-blue-800 " onClick={handleAddToCart}>Add to Cart</button>
      <button className="bg-emerald-600 "onClick={handleOrderNow} style={{ marginLeft: 10  }}>Order Now</button>
    </div>
    </div>
  );
};

export default ProductDetails;