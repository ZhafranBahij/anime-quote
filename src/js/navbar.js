const ModalAbout = () => {
  return (
    <div
      class="modal fade"
      id="modalabout"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title text-danger text-opacity-75"
              id="exampleModalLabel"
            >
              About
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-danger text-opacity-75">
            This web is for you who want get some motivation in the life from
            anime. <br /> The quotes get from{" "}
            <a href="https://animechan.vercel.app/guide">animechan</a> <br />
            Wallpaper from{" "}
            <a href="https://pngtree.com/free-backgrounds">
              free background photos from pngtree.com
            </a>{" "}
            <br />
            Chino and Her friend wallpaper from{" "}
            <a href="https://gochiusa.com/bloom/">Gochiusa</a> <br />
            I hope you enjoy it <br />
            ＼(＾▽＾)／
          </div>
        </div>
      </div>
    </div>
  );
};

const ModalTeam = () => {
  return (
    <div
      class="modal fade"
      id="modalteam"
      tabindex="-1"
      aria-labelledby="exampleModalLabel"
      aria-hidden="true"
    >
      <div class="modal-dialog">
        <div class="modal-content">
          <div class="modal-header">
            <h5
              class="modal-title text-danger text-opacity-75"
              id="exampleModalLabel"
            >
              Team
            </h5>
            <button
              type="button"
              class="btn-close"
              data-bs-dismiss="modal"
              aria-label="Close"
            ></button>
          </div>
          <div class="modal-body text-danger text-opacity-75">
            Just <b>M. Zhafran Bahij</b> and his inner self. (ᓀ ᓀ)
          </div>
        </div>
      </div>
    </div>
  );
};

const MainNavbar = () => {
  return (
    <nav class="navbar navbar-expand-lg navbar-dark bg-danger bg-opacity-50">
      <div class="container-fluid">
        <a class="navbar-brand" href="#">
          QuoteNime
        </a>
        <button
          class="navbar-toggler"
          type="button"
          data-bs-toggle="collapse"
          data-bs-target="#navbarTogglerDemo02"
          aria-controls="navbarTogglerDemo02"
          aria-expanded="false"
          aria-label="Toggle navigation"
        >
          <span class="navbar-toggler-icon"></span>
        </button>
        <div class="collapse navbar-collapse" id="navbarTogglerDemo02">
          <ul class="navbar-nav me-auto mb-2 mb-lg-0">
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#modalabout"
              >
                About
              </a>
            </li>
            <li class="nav-item">
              <a
                class="nav-link"
                href="#"
                data-bs-toggle="modal"
                data-bs-target="#modalteam"
              >
                Team
              </a>
            </li>
          </ul>
        </div>
      </div>
    </nav>
  );
};

const Navbar = () => {
  return (
    <div>
      <MainNavbar />
      <ModalAbout />
      <ModalTeam />
    </div>
  );
};

export default Navbar;
