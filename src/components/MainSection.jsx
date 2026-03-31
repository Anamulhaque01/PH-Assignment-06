import React, { useState, useEffect } from "react";
import { toast } from "react-toastify";
import ProductCard from "./ProductCard";
import CartItem from "./CartItem";

function MainSection({ cart, setCart }) {
  const [activeTab, setActiveTab] = useState("products");
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("products.json")
      .then((res) => res.json())
      .then((data) => {
        setProducts(data);
      })
      .catch(() => {
        toast.error("Ops! Could not load products.");
      });
  }, []);

  function handleAddToCart(product) {
    let alreadyAdded = false;
    for (let i = 0; i < cart.length; i++) {
      if (cart[i].id === product.id) {
        alreadyAdded = true;
      }
    }

    if (alreadyAdded === true) {
      toast.warn("Item already in cart!");
    } else {
      const newCart = [...cart, product];
      setCart(newCart);
      toast.success("Added to cart successfully!");
    }
  }

  function handleRemove(id) {
    const updatedCart = cart.filter((item) => item.id !== id);
    setCart(updatedCart);
    toast.error("Item removed from cart.");
  }

  function handleCheckout() {
    if (cart.length > 0) {
      setCart([]);
      toast.success("Checkout successful! Cart is now clear.");
    } else {
      toast.warn("Add something to cart first!");
    }
  }

  let totalPrice = 0;
  for (let i = 0; i < cart.length; i++) {
    totalPrice = totalPrice + cart[i].price;
  }

  return (
    <section className="py-14 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-bold text-center text-gray-900 mb-2">
          Premium Digital Tools
        </h2>
        <p className="text-center text-gray-500 mb-8 max-w-2xl mx-auto">
          Choose from our curated collection of premium digital products designed to boost your productivity and creativity.
        </p>

        <div className="flex justify-center mb-12">
          <div className="bg-white border border-gray-200 rounded-full p-1.5 flex gap-2">
            <button
              onClick={() => setActiveTab("products")}
              className={activeTab === "products" 
                ? "bg-violet-600 text-white px-8 py-2 rounded-full font-bold" 
                : "text-gray-600 px-8 py-2"}
            >
              Products
            </button>
            <button
              onClick={() => setActiveTab("cart")}
              className={activeTab === "cart" 
                ? "bg-violet-600 text-white px-8 py-2 rounded-full font-bold" 
                : "text-gray-600 px-8 py-2"}
            >
              Cart ({cart.length})
            </button>
          </div>
        </div>

        {activeTab === "products" && (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {products.map((product) => (
              <ProductCard 
                key={product.id} 
                product={product} 
                onAddToCart={handleAddToCart} 
              />
            ))}
          </div>
        )}

        {activeTab === "cart" && (
          <div className="max-w-4xl mx-auto bg-white border border-gray-100 rounded-3xl p-8 shadow-sm">
            <h3 className="text-xl font-bold mb-6 text-gray-900">Your Cart</h3>
            
            {cart.length === 0 ? (
              <div className="text-center py-10">
                <h3 className="text-xl font-semibold text-gray-400">Your cart is empty!</h3>
              </div>
            ) : (
              <div className="flex flex-col gap-4">
                {cart.map((item) => (
                  <CartItem key={item.id} item={item} onRemove={handleRemove} />
                ))}
                
                <div className="mt-4 flex justify-between items-center py-4 text-gray-900">
                  <span className="text-gray-500 text-lg">Total:</span>
                  <span className="text-3xl font-bold">${totalPrice}</span>
                </div>

                <button
                  onClick={handleCheckout}
                  className="w-full bg-violet-600 text-white py-4 rounded-full font-bold text-lg hover:bg-violet-700 transition-colors"
                >
                  Proceed To Checkout
                </button>
              </div>
            )}
          </div>
        )}
      </div>
    </section>
  );
}

export default MainSection;