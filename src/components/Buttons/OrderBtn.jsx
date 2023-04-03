import React from "react";

function OrderBtn({ children, color }) {
  console.log(color);
  return (
    <button
      style={{ backgroundColor: color }}
      className={`text-sm text-white font-bold py-3 px-7 rounded-full`}
    >
      {children}
    </button>
  );
}

export default OrderBtn;
