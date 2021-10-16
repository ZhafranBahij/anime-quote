import "./App.css";
import Fetch from "./js/fetch.js";
import Navbar from "./js/navbar.js";
import Carousel from "./js/carousel.js";

const Fusion = () => {
  return (
    <div>
      <Navbar />
      <Carousel />
      <Fetch />
      <footer class="mt-5 bg-danger bg-opacity-50 text-white text-opacity-75">
        <div class="container">Created by Zhafran Bahij</div>
      </footer>
    </div>
  );
};

function App() {
  return <Fusion />;
}

export default App;
