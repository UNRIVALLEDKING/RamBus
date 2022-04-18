import React from "react";

export default function gallery() {
  return (
    <>
      <div id="gallery" className="container-fluid bg-light my-3">
        <div className="container">
          <h3
            style={{ textDecoration: "underline 3px" }}
            className="h1 text-center py-4"
          >
            Gallery
          </h3>
          <div className="row text-center">
            <div className="col-sm-12">
              <div className="p-3">
                <img className="img-fluid rounded" src="bus3.jpg" alt="" />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-2">
                <img
                  className="rounded"
                  style={{
                    height: "520px",
                    objectFit: "cover",
                    width: "100%",
                  }}
                  src="bus1.jpg"
                  alt=""
                />
              </div>
            </div>
            <div className="col-sm-6">
              <div className="p-2">
                <img className="img-fluid rounded" src="bus2.jpg" alt="" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
