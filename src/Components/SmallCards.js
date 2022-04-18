import React from "react";

export default function SmallCards() {
  return (
    <>
      <div className="container">
        <div className="row my-3">
          <div className="p-2 col-sm-4">
            <div class="card">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    style={{ height: "160px" }}
                    src="rambhawan.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title pt-5">Ram Bhawan Prasad Singh</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 col-sm-4">
            <div class="card">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    style={{ height: "160px" }}
                    src="ramjee.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title pt-5">Dr. Ramjee Prasad Nirala</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div className="p-2 col-sm-4">
            <div class="card">
              <div class="row g-0">
                <div class="col-4">
                  <img
                    style={{ height: "160px" }}
                    src="Siddharth.jpg"
                    class="img-fluid rounded-start"
                    alt="..."
                  />
                </div>
                <div class="col-8">
                  <div class="card-body">
                    <h5 class="card-title pt-5">Dr. Siddharth Kumar</h5>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
