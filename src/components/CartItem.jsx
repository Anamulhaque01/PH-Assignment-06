import React from "react";

function CartItem({ item, onRemove }) {
  return (
    <div className="bg-white border border-gray-100 rounded-xl p-4 flex items-center justify-between shadow-sm">
      <div className="flex items-center gap-4">
        <span className="text-3xl">{item.icon}</span>
        <div>
          <h4 className="font-semibold text-gray-800 text-sm" style={{ fontFamily: "Sora, sans-serif" }}>
            {item.name}
          </h4>
          <p className="text-violet-600 font-bold text-sm">
            ${item.price}
            <span className="text-gray-400 font-normal text-xs ml-1">/{item.period}</span>
          </p>
        </div>
      </div>

      <button
        onClick={() => onRemove(item.id)}
        className="text-red-400 hover:text-red-600 transition-colors text-sm font-medium flex items-center gap-1 hover:cursor-pointer "
      >
        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16" />
        </svg>
        Remove
      </button>
    </div>
  );
}

export default CartItem;
