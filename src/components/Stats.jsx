import React from "react";

function Stats() {
  return (
    <section className="bg-linear-to-r from-[#9333ea] to-[#7c3aed] py-10 px-4">
      <div className="max-w-6xl mx-auto flex flex-wrap justify-center md:justify-between gap-8 text-white text-center">
        <div>
          <h3 className="text-5xl font-bold text-white" >50K+</h3>
          <p className="text-white text-xl mt-1">Active Users</p>
        </div>
        <div>
          <h3 className="text-5xl font-bold text-white" >200+</h3>
          <p className="text-white text-xl mt-1">Premium Tools</p> 
        </div>
        <div>
          <h3 className="text-5xl font-bold text-white" >4.9</h3>
          <p className="text-white text-xl mt-1">Rating</p>
        </div>
      </div>
    </section>
  );
}

export default Stats;
