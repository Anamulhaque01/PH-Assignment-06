import React from "react";
import digiImg from "../assets/DigiTools.png";
import cartImg from "../assets/products/shopping-cart.png";


function Navbar({ cartCount }) {
  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        <div className="">
          <img className="scale-75" src={digiImg} alt="" />
        </div>

        <div className="hidden md:flex items-center gap-7  text-[#101727]  font-medium">
          <a href="#" className="hover:text-violet-600 transition-colors">Products</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Features</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Pricing</a>
          <a href="#" className="hover:text-violet-600 transition-colors">Testimonials</a>
          <a href="#" className="hover:text-violet-600 transition-colors">FAQ</a>
        </div>

        <div className="flex items-center gap-3">
          <div className="relative cursor-pointer">
            <img src={cartImg} alt="" />
            {cartCount > 0 && (
              <span className="absolute -top-2 -right-2 bg-red-400 text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold">
                {cartCount}
              </span>
            )}
          </div>
          
          <button className="hover:cursor-pointer hover:text-violet-600">Login</button>
          <button className="bg-linear-to-r from-[#9333ea] to-[#7c3aed] text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer">
              Get Started
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Navbar;
