import React from "react";
import NavBar from "../components/NavBar/NavBar";

function Mainlayout({ children }) {
  return (
      <section className="">
          <NavBar/>
      <div className="full">{children}</div>
    </section>
  );
}

export default Mainlayout;
