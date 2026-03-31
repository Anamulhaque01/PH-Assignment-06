import React from "react";
import DigiImg from "../assets/DigiToolsWhite.png";

function Footer() {
  return (
    <footer className="bg-[#101727] text-white pt-14 pb-5 px-4">
      <div className="max-w-6xl mx-auto">
        <div className="grid grid-cols-1 md:grid-cols-5 gap-10 mb-20">
          <div>
            <img src={DigiImg} alt="" className="scale-75 -ml-5 mb-3"/>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium digital tools for creators, professionals, and businesses. Work smarter with our suite of powerful tools.
            </p>
          </div>

          <div className="ml-0 sm:ml-20">
            <h4 className="font-semibold mb-4 text-sm  tracking-wider text-gray-300">Product</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Features</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Pricing</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Templates</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Integrations</a></li>
            </ul>
          </div>

          <div className="ml-0 sm:ml-10">
            <h4 className="font-semibold mb-4 text-sm  tracking-wider text-gray-300">Company</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-violet-400 transition-colors">About</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Blog</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Careers</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Press</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm  tracking-wider text-gray-300">Resourced</h4>
            <ul className="flex flex-col gap-2 text-gray-400 text-sm">
              <li><a href="#" className="hover:text-violet-400 transition-colors">Documentations</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Help Center</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Community</a></li>
              <li><a href="#" className="hover:text-violet-400 transition-colors">Contact</a></li>
            </ul>
          </div>

          <div>
            <h4 className="font-semibold mb-4 text-sm  tracking-wider text-gray-300">Social Links</h4>
            <div className="flex gap-3">
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#101727] hover:cursor-pointer"><i class="ri-instagram-fill"></i></div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#101727] hover:cursor-pointer"><i class="ri-facebook-fill"></i></div>
              <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center text-[#101727] hover:cursor-pointer"><i class="ri-twitter-x-line"></i></div>
            </div>
          </div>
        </div>

        <div className="border-t border-gray-800 pt-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-sm">
            © 2025 DigiTools. All rights reserved.
          </p>
          <div className="flex gap-3 text-sm text-gray-500">
            <p>Privacy Policy</p>
            <p>Terms of Service </p>
            <p>Cookies</p>
          </div>
        </div>

      </div>
    </footer>
  );
}

export default Footer;
