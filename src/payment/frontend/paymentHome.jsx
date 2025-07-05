
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
       <div className="flex justify-center"> {/* Centering container */}
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
          <span className="px-4 py-2 bg-gray-100 text-xl">{quantity}</span>
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

