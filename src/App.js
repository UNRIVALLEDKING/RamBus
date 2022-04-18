import "./App.css";
import Carousal from "./Components/Carousal";
import SmallCards from "./Components/SmallCards";
import Gallery from "./Components/Gallery";
import Contact from "./Components/Contact";
import { FiPhoneCall } from "react-icons/fi";

function App() {
  return (
    <>
      <nav className="navbar sticky-top navbar-expand-lg navbar-light bg-white border-bottom border-2 border-secondary">
        <div className="container">
          <a className="navbar-brand px-4 rounded py-2" href="/">
            <img
              src="https://i.ibb.co/qdJP9F8/kisspng-rolley-ethereum-enclosed-r-bitcoin-r-logo-5b081dd539d5e3-6981597315272585812369.png"
              alt=""
              width="30"
              className="d-inline-block align-text-top"
            />
            Ram Bus
          </a>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarNavAltMarkup"
            aria-controls="navbarNavAltMarkup"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse justify-content-end"
            id="navbarNavAltMarkup"
          >
            <div className="navbar-nav mt-3 mt-md-0">
              <a
                className="nav-link active px-4 rounded py-2 mx-0 mx-sm-3 h6"
                aria-current="page"
                href="#"
              >
                Home
              </a>
              <a
                className="nav-link px-4 rounded py-2 mx-0 mx-sm-3 text-dark h6"
                href="#gallery"
              >
                Gallery
              </a>
              <a
                className="nav-link px-4 rounded py-2 mx-0 mx-sm-3 text-dark h6"
                href="#contact"
              >
                Contact Us
              </a>
              <a
                className="nav-link px-4 rounded py-2 mx-0 mx-sm-3 text-dark h6"
                href="tel: +919308404927"
              >
                <FiPhoneCall /> : <span>+91 9308404927</span>
              </a>
              <a
                className="nav-link px-4 rounded py-2 mx-0 mx-sm-3 text-dark h6"
                href="tel: +919431490707"
              >
                <FiPhoneCall /> : +91 9431490707
              </a>
            </div>
          </div>
        </div>
      </nav>
      <Carousal />
      <SmallCards />
      <Gallery />
      <Contact />
    </>
  );
}

export default App;
