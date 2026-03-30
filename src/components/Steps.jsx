import React from "react";
import userImg from "../assets/user.png";
import packageImg from "../assets/package.png";
import rocketImg from "../assets/rocket.png";

function Steps() {
  return (
    <section className="py-16 px-4 bg-[#F9FAFC]">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-2">
          Get Started in 3 Steps
        </h2>
        <p className="text-center text-gray-500 text-[16px] mb-12">
          Start using premium digital tools in minutes, not hours.
        </p>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-6 justify-items-center">
          
          <div className="w-full max-w-90 aspect-square bg-white rounded-2xl p-5 border border-gray-300">
            <div className="flex justify-end">
              <div className="w-9 h-9 rounded-full bg-linear-to-r from-[#9333ea] to-[#7c3aed] flex items-center justify-center text-sm text-white">
                01
              </div>
            </div>

            <div className="text-center mt-10">
              <div className="mx-auto w-22.5 h-22.5 rounded-full bg-violet-100 flex items-center justify-center">
                <img src={userImg} alt="" />
              </div>
              <h1 className="text-xl font-bold text-[#101727] my-2">Create Account</h1>
              <p className="text-gray-500 text-sm">Sign up for free in seconds. No credit card required to get started.</p>
            </div>
          </div>


          <div className="w-full max-w-90 aspect-square bg-white rounded-2xl p-5 border border-gray-300">
            <div className="flex justify-end">
              <div className="w-9 h-9 rounded-full bg-linear-to-r from-[#9333ea] to-[#7c3aed] flex items-center justify-center text-sm text-white">
                02
              </div>
            </div>

            <div className="text-center mt-10">
              <div className="mx-auto w-22.5 h-22.5 rounded-full bg-violet-100 flex items-center justify-center">
                <img src={packageImg} alt="" />
              </div>
              <h1 className="text-xl font-bold text-[#101727] my-2">Choose Products</h1>
              <p className="text-gray-500 text-sm">Browse our catalog and select the tools that fit your needs.</p>
            </div>
          </div>


          <div className="w-full max-w-90 aspect-square bg-white rounded-2xl p-5 border border-gray-300">
            <div className="flex justify-end">
              <div className="w-9 h-9 rounded-full bg-linear-to-r from-[#9333ea] to-[#7c3aed] flex items-center justify-center text-sm text-white">
                03
              </div>
            </div>

            <div className="text-center mt-10">
              <div className="mx-auto w-22.5 h-22.5 rounded-full bg-violet-100 flex items-center justify-center">
                <img src={rocketImg} alt="" />
              </div>
              <h1 className="text-xl font-bold text-[#101727] my-2">Start Creating</h1>
              <p className="text-gray-500 text-sm">Download and start using your premium tools immediately.</p>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Steps;