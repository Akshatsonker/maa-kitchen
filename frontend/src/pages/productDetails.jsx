import React, { useState } from "react";
import { useParams, useNavigate, Link } from "react-router-dom";
import { products } from "./cart.jsx";

const ProductDetails = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const [quantity, setQuantity] = useState(1);
  const product = products.find((p) => p.id.toString() === id.toString());
  const finalPrice = quantity * product.price;

  if (!products || !Array.isArray(products)) {
    return <div className="p-4 text-center text-gray-600">Loading products...</div>;
  }
  if (!product) return <div className="p-4 text-center text-red-500">Product not found</div>;

  const handleAddToCart = () => {
    alert(`Added ${quantity} ${product.name}(s) to cart!`);
  };
  const handleOrderNow = () => {
    alert(`Ordered ${quantity} ${product.name}(s)!`);
    navigate("/");
  };

  return (
    <div className="min-h-screen w-full bg-gray-100 flex flex-col">
      {/* Header */}
      <div className="w-full bg-white shadow-sm py-3 px-4 sticky top-0 z-10">
        <div className="max-w-4xl mx-auto flex justify-between items-center">
          <Link 
            to="/menu" 
            className="flex items-center text-gray-700 hover:text-gray-900 transition-colors"
          >
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 mr-1" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 19l-7-7m0 0l7-7m-7 7h18" />
            </svg>
            <span>Menu</span>
          </Link>
          <h1 className="text-xl font-bold text-gray-800">Product Details</h1>
          <div className="w-5"></div> {/* Spacer for alignment */}
        </div>
      </div>

      {/* Main Content */}
      <main className="flex-1 w-full py-4 px-4">
        <div className="max-w-4xl mx-auto">
          {/* Product Card */}
          <div className="bg-white rounded-xl shadow-md overflow-hidden w-full">
            {/* Product Image */}
            <div className="w-full h-64 sm:h-80 md:h-96 bg-gray-200 overflow-hidden">
              <img 
                src={product.image} 
                alt={product.name} 
                className="w-full h-full object-cover"
              />
            </div>

            {/* Product Info */}
            <div className="p-4 sm:p-6 relative">
              {/* Price Tag */}
              <div className="absolute -top-5 left-1/2 transform -translate-x-1/2">
                <span className="inline-block bg-red-500 text-white text-lg font-bold px-4 py-2 rounded-full shadow-lg">
                  ₹{product.price}
                </span>
              </div>

              <h2 className="text-2xl font-bold text-gray-900 mt-4 mb-2 text-center">{product.name}</h2>
              <p className="text-gray-600 mb-6 text-center">{product.description}</p>

              {/* Quantity Selector */}
              <div className="flex flex-col sm:flex-row items-center justify-between mb-6">
                <div className="flex items-center mb-4 sm:mb-0">
                  <span className="text-gray-700 mr-3">Quantity:</span>
                  <div className="flex items-center border border-gray-300 rounded-full overflow-hidden">
                    <button 
                      onClick={() => setQuantity(q => Math.max(1, q - 1))}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      -
                    </button>
                    <span className="px-4 text-lg font-semibold">{quantity}</span>
                    <button 
                      onClick={() => setQuantity(q => q + 1)}
                      className="w-10 h-10 flex items-center justify-center bg-gray-100 hover:bg-gray-200 transition-colors"
                    >
                      +
                    </button>
                  </div>
                </div>
                <div className="bg-blue-50 px-4 py-2 rounded-lg">
                  <span className="font-bold">Total: </span>
                  <span className="text-xl font-bold text-blue-600">₹{finalPrice}</span>
                </div>
              </div>

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3">
                <button 
                  onClick={handleAddToCart}
                  className="flex-1 bg-blue-600 hover:bg-blue-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Add to Cart
                </button>
                <button 
                  onClick={handleOrderNow}
                  className="flex-1 bg-green-600 hover:bg-green-700 text-white py-3 px-4 rounded-lg font-medium transition-colors"
                >
                  Order Now
                </button>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
};

export default ProductDetails;