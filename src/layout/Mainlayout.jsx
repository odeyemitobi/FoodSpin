import React from "react";
import NavBar from "../components/NavBar/NavBar";

function Mainlayout({ children }) {
  return (
    <section className="font-sans">
      <NavBar />
      <div className="w-full">{children}</div>
    </section>
  );
}

export default Mainlayout;
