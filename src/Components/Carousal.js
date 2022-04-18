import React from "react";

export default function Carousal() {
  return (
    <>
      <div
        id="carouselExampleCaptions"
        className="carousel slide w-100"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleCaptions"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <a href="https://www.google.com">
              <img
                style={{ height: "500px", objectFit: "cover" }}
                src="https://prnewswire2-a.akamaihd.net/p/1893751/sp/189375100/thumbnail/entry_id/0_t0cq4isx/def_height/2700/def_width/2700/version/100012/type/1"
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </a>
            <div className="carousel-caption d-md-block cor-bg rounded py-3 px-4 px-md-0">
              <h3>Ram Bus</h3>
              <p className="h4">Contact Us for bookings in Patna</p>
            </div>
          </div>
          <div className="carousel-item">
            <a href="https://www.google.com">
              <img
                style={{ height: "500px", objectFit: "cover" }}
                src="https://svmchaser.files.wordpress.com/2015/11/37c15-tsr2bwatermark2b-2b1168.jpg"
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </a>
            <div className="carousel-caption d-md-block cor-bg rounded py-3 px-4 px-md-0">
              <h3>Ram Bus</h3>
              <p className="h4">Contact Us for bookings in Patna</p>
            </div>
          </div>
          <div className="carousel-item">
            <a href="https://www.google.com">
              <img
                style={{ height: "500px", objectFit: "cover" }}
                src="https://i.ytimg.com/vi/jJqtYxliNMw/maxresdefault.jpg"
                className="d-block w-100 img-fluid"
                alt="..."
              />
            </a>
            <div className="carousel-caption d-md-block cor-bg rounded py-3 px-4 px-md-0">
              <h3>Ram Bus</h3>
              <p className="h4">Contact Us for bookings in Patna</p>
            </div>
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="prev"
        >
          <span
            className="carousel-control-prev-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Previous</span>
        </button>
        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#carouselExampleCaptions"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </>
  );
}
