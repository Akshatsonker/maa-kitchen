/*
import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../../pages/cart"; // Ensure this path is correct
//import {razorpay} from "../backend/controllers/paymentControllers"
const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id.toString() === id.toString());

  const finalPrice = quantity * product.price;

  if (!products || !Array.isArray(products)) {
    return <div>Loading products or products not available...</div>;
  }

  if (!product) return <div>Product not found.</div>;

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
    console.log(`Added ${quantity} ${product.name}(s) ${finalPrice} to cart!`);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleOrderNow = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_AdPqqYMPM3iAXM", // Replace with your Razorpay key
      amount: finalPrice * 100, // Amount in paise (e.g., 1000 paise = ₹10)
      currency: "INR",
      name: "Maa's Kitchen",
      description: `Order for ${quantity} ${product.name}(s)`,
      image: product.image,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate("/welcome");
      },
      prefill: {
        name: "Customer Name", // You can get this from user input
        email: "customer@example.com", // You can get this from user input
        contact: "9999999999", // You can get this from user input
      },
      notes: {
        address: "Customer Address", // You can get this from user input
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

  return (
    <div className="">
      <h1 className="text-center mt-10 text-5xl font-bold mt-5">Product Details</h1>
      <span className="absolute top-4 right-4 text-black text-2xl">
        <Link to="/menu">Menu</Link>
      </span>

      <div className="product-details items-center justify-center text-center p-5">
       <div className="flex justify-center"> // Centering container 
  <img
    src={product.image}
    alt={product.name}
    className="w-[400px] h-[400px] rounded-lg shadow-lg object-cover"
  />
</div>
        <h2 className="text-3xl text-gray-800 mt-4">{product.name}</h2>
        <div className="flex items-center justify-center h-full">
  <p className="text-lg text-gray-600 max-w-2xl text-center">
    {product.description}
  </p>
</div>
        <p className="text-2xl text-orange-700 font-bold mt-2">
          Price: {product.price} INR
        </p>
        <div className="mt-4 ">
          <button
            className="px-4 py-2 bg-gray-200 rounded-l-lg text-2xl"
            onClick={() => setQuantity((q) => Math.max(1, q - 1))}
          >
            -
          </button>
          <span className="px-4 py-1 bg-gray-100 text-xl">{quantity}</span>
          <button
            className="px-4 py-2 bg-gray-200 rounded-r-lg text-2xl"
            onClick={() => {
              setQuantity((q) => q + 1);
            }}
          >
            +
          </button>
        </div>
        <div className="mt-6 space-x-4 ">
          <button
            className="bg-blue-800 hover:bg-blue-700 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            onClick={handleAddToCart}
          >
            Add to Cart
          </button>
          <button
            className="bg-emerald-600 hover:bg-emerald-500 text-white font-bold py-3 px-6 rounded-lg transition duration-200"
            onClick={handleOrderNow}
          >
            Order Now
          </button>
        </div>
      </div>
    </div>
  );
};

export default ProductDetails;
*/

import React, { useState } from "react";
import { useParams, useNavigate } from "react-router-dom";
import { Link } from "react-router-dom";
import { products } from "../../pages/cart";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id.toString() === id.toString());
  const finalPrice = quantity * product.price;

  if (!products || !Array.isArray(products)) {
    return <div className="p-4 text-center text-gray-600">Loading products or products not available...</div>;
  }

  if (!product) return <div className="p-4 text-center text-red-500">Product not found.</div>;

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
    console.log(`Added ${quantity} ${product.name}(s) ${finalPrice} to cart!`);
  };

  const loadScript = (src) => {
    return new Promise((resolve) => {
      const script = document.createElement("script");
      script.src = src;
      script.onload = () => {
        resolve(true);
      };
      script.onerror = () => {
        resolve(false);
      };
      document.body.appendChild(script);
    });
  };

  const handleOrderNow = async () => {
    const res = await loadScript("https://checkout.razorpay.com/v1/checkout.js");

    if (!res) {
      alert("Razorpay SDK failed to load. Are you online?");
      return;
    }

    const options = {
      key: "rzp_test_AdPqqYMPM3iAXM",
      amount: finalPrice * 100,
      currency: "INR",
      name: "Maa's Kitchen",
      description: `Order for ${quantity} ${product.name}(s)`,
      image: product.image,
      handler: function (response) {
        alert(`Payment successful! Payment ID: ${response.razorpay_payment_id}`);
        navigate("/welcome");
      },
      prefill: {
        name: "Customer Name",
        email: "customer@example.com",
        contact: "9999999999",
      },
      notes: {
        address: "Customer Address",
      },
      theme: {
        color: "#3399cc",
      },
    };

    const paymentObject = new window.Razorpay(options);
    paymentObject.open();
  };

   return (
    <div className="min-h-screen bg-gray-50">
      {/* Compact Header */}
      <header className="sticky top-0 z-10 bg-white shadow-sm px-3 py-2">
        <div className="flex items-center justify-between">
          <Link to="/menu" className="flex items-center">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-gray-600" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
          </Link>
          <h1 className="text-lg font-medium text-gray-800">Product Details</h1>
          <div className="w-5"></div> {/* Spacer for balance */}
        </div>
      </header>

      {/* Tightly Spaced Product Content */}
      <main className="px-4 py-3">
        {/* Product Image */}
        <div className="mb-3 bg-white p-2 rounded-xl shadow-sm">
          <img
            src={product.image}
            alt={product.name}
            className="w-full h-auto max-h-[280px] object-contain mx-auto"
          />
        </div>

        {/* Product Info Card */}
        <div className="bg-white rounded-xl shadow-sm p-4">
          {/* Floating Price Tag */}
          <div className="flex justify-center -mt-9 mb-2">
            <span className="bg-gradient-to-r from-orange-500 to-red-500 text-white font-bold px-4 py-1 rounded-full shadow-sm text-sm">
              ₹{product.price}
            </span>
          </div>

          <h2 className="text-xl font-bold text-gray-800 text-center mt-1 mb-2">{product.name}</h2>
          <p className="text-gray-600 text-sm text-center mb-4 px-2">{product.description}</p>

          {/* Quantity Selector */}
          <div className="flex flex-col items-center mb-4">
            <span className="text-sm text-gray-500 mb-1">Quantity</span>
            <div className="flex items-center border border-gray-200 rounded-full bg-gray-50">
              <button
                onClick={() => setQuantity(q => Math.max(1, q - 1))}
                className="w-8 h-8 flex items-center justify-center text-orange-600 hover:bg-orange-50 rounded-l-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M5 10a1 1 0 011-1h8a1 1 0 110 2H6a1 1 0 01-1-1z" clipRule="evenodd" />
                </svg>
              </button>
              <span className="px-3 text-base font-medium text-gray-800">{quantity}</span>
              <button
                onClick={() => setQuantity(q => q + 1)}
                className="w-8 h-8 flex items-center justify-center text-orange-600 hover:bg-orange-50 rounded-r-full"
              >
                <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" viewBox="0 0 20 20" fill="currentColor">
                  <path fillRule="evenodd" d="M10 5a1 1 0 011 1v3h3a1 1 0 110 2h-3v3a1 1 0 11-2 0v-3H6a1 1 0 110-2h3V6a1 1 0 011-1z" clipRule="evenodd" />
                </svg>
              </button>
            </div>
          </div>

          {/* Total Price */}
          <div className="bg-orange-50 p-2 rounded-lg mb-4 flex justify-between items-center">
            <span className="text-sm font-medium text-gray-700">Total:</span>
            <span className="text-lg font-bold text-orange-600">₹{finalPrice}</span>
          </div>

          {/* Action Buttons */}
          <div className="space-y-4"> {/* Increased from space-y-2 to space-y-4 */}
            <button
              onClick={handleAddToCart}
              className="w-full h-15 bg-blue-600 hover:bg-blue-700 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center shadow-sm" 
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path d="M3 1a1 1 0 000 2h1.22l.305 1.222a.997.997 0 00.01.042l1.358 5.43-.893.892C3.74 11.846 4.632 14 6.414 14H15a1 1 0 000-2H6.414l1-1H14a1 1 0 00.894-.553l3-6A1 1 0 0017 3H6.28l-.31-1.243A1 1 0 005 1H3zM16 16.5a1.5 1.5 0 11-3 0 1.5 1.5 0 013 0zM6.5 18a1.5 1.5 0 100-3 1.5 1.5 0 000 3z" />
              </svg>
              Add to Cart
            </button>
            <button
              onClick={handleOrderNow}
              className="w-full h-15  bg-emerald-600 hover:bg-emerald-700 text-white py-3 rounded-lg font-medium text-sm flex items-center justify-center shadow-sm" /* Changed py-2.5 to py-3 */
            >
              <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 mr-2" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
              </svg>
              Order Now
            </button>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;