import Datas from "./dataCarousel.js";

const Carousel = () => {
  return (
    <div
      id="carouselExampleControls"
      class="carousel slide carousel-fade mb-5"
      data-bs-ride="carousel"
    >
      <div class="carousel-inner">
        {Datas.map((data) => (
          <div class={data.class}>
            <img src={data.img} class="d-block w-100" alt={data.name} />
            <div class="carousel-caption d-none d-sm-block bg-danger bg-opacity-75">
              <h5>{data.call}</h5>
              <p>{data.call2}</p>
            </div>
          </div>
        ))}
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
