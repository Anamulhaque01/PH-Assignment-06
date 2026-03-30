import React, { useState } from "react";
import digiImg from "../assets/DigiTools.png";
import cartImg from "../assets/products/shopping-cart.png";

function Navbar({ cartCount }) {
  const [isOpen, setIsOpen] = useState(false);

  function toggleMenu() {
    setIsOpen(!isOpen);
  }

  return (
    <nav className="w-full bg-white shadow-sm sticky top-0 z-50">
      <div className="max-w-6xl mx-auto px-4 py-3 flex items-center justify-between">
        
        <div>
          <img className="scale-75" src={digiImg} alt="" />
        </div>

        <div className="hidden md:flex items-center gap-7 text-[#101727] font-medium">
          <a href="#" className="hover:text-violet-600">Products</a>
          <a href="#" className="hover:text-violet-600">Features</a>
          <a href="#" className="hover:text-violet-600">Pricing</a>
          <a href="#" className="hover:text-violet-600">Testimonials</a>
          <a href="#" className="hover:text-violet-600">FAQ</a>
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
          
          <button className="hidden md:block hover:cursor-pointer hover:text-violet-600">Login</button>
          
          <button className="hidden md:block bg-linear-to-r from-[#9333ea] to-[#7c3aed] text-white px-5 py-3 rounded-full font-semibold hover:cursor-pointer">
            Get Started
          </button>

          <button className="md:hidden text-2xl" onClick={toggleMenu}>
            {isOpen ? "✕" : "☰"}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 p-4 flex flex-col gap-4 text-center">
          <a href="#" className="text-[#101727] font-medium" onClick={() => setIsOpen(false)}>Products</a>
          <a href="#" className="text-[#101727] font-medium" onClick={() => setIsOpen(false)}>Features</a>
          <a href="#" className="text-[#101727] font-medium" onClick={() => setIsOpen(false)}>Pricing</a>
          <a href="#" className="text-[#101727] font-medium" onClick={() => setIsOpen(false)}>Testimonials</a>
          <a href="#" className="text-[#101727] font-medium" onClick={() => setIsOpen(false)}>FAQ</a>
          <hr className="border-gray-100" />
          <button className="text-violet-600 font-medium">Login</button>
          <button className="bg-linear-to-r from-[#9333ea] to-[#7c3aed] text-white px-5 py-3 rounded-full font-semibold">
            Get Started
          </button>
        </div>
      )}
    </nav>
  );
}

export default Navbar;