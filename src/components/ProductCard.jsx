import React, { useState } from "react";

function ProductCard({ product, onAddToCart }) {
  const [added, setAdded] = useState(false);

  function handleBuy() {
    onAddToCart(product);
    setAdded(true);
    setTimeout(() => {
      setAdded(false);
    }, 2000);
  }

  function getTagColor(tagType) {
    if (tagType === "popular") return "bg-violet-100 text-violet-700";
    if (tagType === "new") return "bg-green-100 text-green-700";
    if (tagType === "best seller") return "bg-orange-100 text-orange-700";
    return "bg-gray-100 text-gray-600";
  }

  return (
    <div className="bg-white border border-gray-100 rounded-2xl p-6 flex flex-col gap-4 shadow-sm hover:shadow-md transition-shadow">
      <div className="flex items-center justify-between">
        <span className="text-4xl">{product.icon}</span>
        <span className={`text-xs font-semibold px-3 py-1 rounded-full ${getTagColor(product.tagType)}`}>
          {product.tag}
        </span>
      </div>

      <div>
        <h3 className="text-lg font-bold text-gray-800 mb-1" >
          {product.name}
        </h3>
        <p className="text-gray-500 text-sm leading-relaxed">{product.description}</p>
      </div>

      <ul className="flex flex-col gap-1">
        {product.features.map((f, i) => (
          <li key={i} className="flex items-center gap-2 text-sm text-gray-600">
            <svg className="w-4 h-4 text-violet-500 shrink-0" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
            </svg>
            {f}
          </li>
        ))}
      </ul>

      <div className="mt-auto">
        <div className="flex items-end gap-1 mb-4">
          <span className="text-2xl font-extrabold text-gray-900">
            ${product.price}
          </span>
          <span className="text-gray-400 text-sm mb-1">/{product.period}</span>
        </div>

        <button
          onClick={handleBuy}
          className={`w-full py-2.5 rounded-xl font-semibold text-sm transition-all ${
            added
              ? "bg-green-500 text-white hover:cursor-pointer "
              : "bg-violet-600 hover:bg-violet-700 text-white hover:cursor-pointer "
          }`}
        >
          {added ? "Added to Cart ✓" : "Buy Now"}
        </button>
      </div>
    </div>
  );
}

export default ProductCard;
