import React from "react";
import bannerImg from "../assets/banner.png";
import playImg from "../assets/Play.png";


function Banner() {
  return (
    <section className="py-50 px-4">
      <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center gap-10">
        <div className="flex-1">
          <span className="text-violet-400 text-sm font-semibold  mb-3  bg-[#E1E7FF] rounded-full px-3 py-2 w-67 flex gap-2 items-center justify-center">

            <div className="w-4 h-4 bg-[#cfbefe] rounded-full flex items-center justify-center">
              <div className="w-2.5 h-2.5 bg-[#ad80fc] rounded-full flex items-center justify-center">
                <div className="w-1 h-1 bg-[#6c2af8] rounded-full flex items-center justify-center"></div>
              </div>
            </div>

            New: AI-Powered Tools Available
          </span>
          <h1 className="text-4xl md:text-6xl font-bold  mb-5 text-[#282e3d]">
            Supercharge Your <br />
            <span className="text-violet-500">Digital Workflow</span>
          </h1>
          <p className="text-gray-400 text-base mb-8 max-w-md leading-relaxed">
            Access premium AI tools, design assets, templates, and productivity
            software—all in one place. Start creating faster today.
            Explore Products

          </p>
          <div className="flex gap-4 flex-wrap">
            <button className="bg-linear-to-r from-[#9333ea] to-[#7c3aed] text-white px-5 py-3 rounded-full font-semibold hover:opacity-90 transition-opacity hover:cursor-pointer">
              Explore Products
          </button>
            <button className="border border-violet-500  hover:border-violet-500 transition-colors px-6 py-3 rounded-full font-semibold text-violet-500 flex items-center gap-2 hover:cursor-pointer">
              <img src= {playImg} alt="" />
              Watch Demo
            </button>
          </div>
        </div>

        <div className="flex-1 flex justify-center">
          <div className="w-90 h-100 rounded-2xl overflow-hidden shadow-2xl shadow-violet-900/30">
            <img
              src={bannerImg}
              alt="Digital tools"
              className="w-full h-full object-cover"
            />
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
