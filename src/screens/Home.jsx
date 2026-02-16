import React from "react";
import Footer from "../Components/Footer";
import Navbar from "../Components/Navbar";
import Card from "../Components/Card"
import Crouser from "../Components/Crouser";
export default function Home() {
  return (
    <div>
      <div>
        <Navbar />
      </div>
      <div><Crouser/></div>
      <div>
        <Card />
      </div>
      <div>
        <Footer />
      </div>
    </div>
  );
}
