import chino from "../img/Chinochan.jpg";
import rize from "../img/Rizesan.jpg";
import syaro from "../img/Syaro.jpg";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide carousel-fade mb-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        <div class="carousel-item active">
          <img src={chino} class="d-block w-100" alt="Chino" />
          <div class="carousel-caption d-none d-sm-block bg-danger bg-opacity-75">
            <h5>Welcome Back, Master!</h5>
            <p>I hope you have more energy to do some work today</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={rize} class="d-block w-100" alt="Rize" />
          <div class="carousel-caption d-none d-sm-block bg-danger bg-opacity-75">
            <h5>Are You Tired, Master?</h5>
            <p>there are more quotes below this picture.</p>
          </div>
        </div>
        <div class="carousel-item">
          <img src={syaro} class="d-block w-100" alt="Syaro" />
          <div class="carousel-caption d-none d-sm-block bg-danger bg-opacity-75">
            <h5>Wink</h5>
            <p>Do you need more sweet thing?</p>
          </div>
        </div>
      </div>
      <button
        class="carousel-control-prev"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="prev"
      >
        <span class="carousel-control-prev-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Previous</span>
      </button>
      <button
        class="carousel-control-next"
        type="button"
        data-bs-target="#carouselExampleControls"
        data-bs-slide="next"
      >
        <span class="carousel-control-next-icon" aria-hidden="true"></span>
        <span class="visually-hidden">Next</span>
      </button>
    </div>
  );
};

export default Carousel;
