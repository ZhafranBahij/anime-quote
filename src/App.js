import "./App.css";
import Fetch from "./js/fetch.js";
import Navbar from "./js/navbar.js";
import Carousel from "./js/carousel.js";
import { react, useState, useEffect } from "react";

const Footer = () => {
  return (
    <footer class="mt-5 bg-danger bg-opacity-50 text-white text-opacity-75">
      <div class="container">Created by Zhafran Bahij</div>
    </footer>
  );
};

const Fusion = () => {
  const [linkToFetch, setLinkToFetch] = useState(
    "https://animechan.vercel.app/api/quotes"
  );

  const [link, setLink] = useState("");

  const addLink = (newLink) => {
    setLink(newLink);
  };

  useEffect(() => {
    if (link === "") {
      setLinkToFetch("https://animechan.vercel.app/api/quotes");
    } else {
      setLinkToFetch(
        `https://animechan.vercel.app/api/quotes/anime?title=${link}`
      );
    }
    // console.log(linkToFetch);
  }, [link, linkToFetch]);

  return (
    <div>
      <Navbar addLink={addLink} />
      <Carousel />
      <Fetch linkToFetch={linkToFetch} />
      <Footer />
    </div>
  );
};

function App() {
  return <Fusion />;
}

export default App;
