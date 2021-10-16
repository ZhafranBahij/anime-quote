import { react, useState, useEffect } from "react";
import Fetch from "./js/fetch.js";
import Navbar from "./js/navbar.js";
import Carousel from "./js/carousel.js";

const Fusion = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Fetch />
    </div>
  );
};

function App() {
  return <Fusion />;
}

export default App;
