import React from "react";


function Pricing() {
  return (
    <section className="py-16 px-4 bg-white">
      <div className="max-w-6xl mx-auto">
        <h2 className="text-4xl font-extrabold text-center text-gray-900 mb-2">
          Simple, Transparent Pricing
        </h2>
        <p className="text-center text-gray-500 text-sm mb-12">
          Choose the plan that fits your needs. Upgrade or downgrade anytime.
        </p>

        <div className="flex flex-col md:flex-row gap-8">
          
          <div className="flex-1 border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Starter</h3>
              <p className="text-sm text-gray-500">Perfect for freelancers and individuals.</p>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold">$9</span>
              <span className="text-sm text-gray-400 mb-1">/month</span>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> 5 tools access</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> 1 GB storage</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Email support</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Basic analytics</li>
            </ul>
            <button className="mt-auto py-3 bg-violet-600 text-white rounded-xl font-bold hover:cursor-pointer">
              Get Started
            </button>
          </div>

          <div className="flex-1 bg-violet-600 text-white rounded-2xl p-8 flex flex-col gap-6 shadow-xl">
            <div>
              <h3 className="text-xl font-bold mb-2">Pro</h3>
              <p className="text-sm text-violet-100">Best for growing teams and professionals.</p>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold">$29</span>
              <span className="text-sm text-violet-200 mb-1">/month</span>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Unlimited tools</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> 50 GB storage</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Priority support</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Advanced analytics</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Team collaboration</li>
            </ul>
            <button className="mt-auto py-3 bg-white text-violet-600 rounded-xl font-bold hover:cursor-pointer">
              Get Started
            </button>
          </div>

          <div className="flex-1 border border-gray-200 rounded-2xl p-8 flex flex-col gap-6">
            <div>
              <h3 className="text-xl font-bold mb-2">Enterprise</h3>
              <p className="text-sm text-gray-500">For large organizations needing full control.</p>
            </div>
            <div className="flex items-end gap-1">
              <span className="text-4xl font-bold">$79</span>
              <span className="text-sm text-gray-400 mb-1">/month</span>
            </div>
            <ul className="flex flex-col gap-3">
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Everything in Pro</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> 500 GB storage</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Dedicated manager</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> Custom integrations</li>
              <li className="text-sm flex gap-2"><i class="ri-check-line text-green-400"></i> SSO & security</li>
            </ul>
            <button className="mt-auto py-3 bg-violet-600 text-white rounded-xl font-bold hover:cursor-pointer">
              Get Started
            </button>
          </div>

        </div>
      </div>
    </section>
  );
}

export default Pricing;