import React from "react";

function Crouser() {
  return (
    <div style={{ position: "relative" }}>
      <div
        id="carouselExampleIndicators"
        className="carousel slide"
        data-bs-ride="carousel"
      >
        <div className="carousel-indicators">
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="0"
            className="active"
            aria-current="true"
            aria-label="Slide 1"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="1"
            aria-label="Slide 2"
          ></button>
          <button
            type="button"
            data-bs-target="#carouselExampleIndicators"
            data-bs-slide-to="2"
            aria-label="Slide 3"
          ></button>
        </div>
        <div className="carousel-inner">
          <div className="carousel-item active">
            <img
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1568901346375-23c9450c58cd?w=900&h=500&fit=crop"
              alt="Burger"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1496116218417-1a781b1c416c?w=900&h=500&fit=crop"
              alt="Pizza"
            />
          </div>
          <div className="carousel-item">
            <img
              className="d-block w-100"
              style={{ height: "500px", objectFit: "cover" }}
              src="https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=900&h=500&fit=crop"
              alt="Food"
            />
          </div>
        </div>
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#carouselExampleIndicators"
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
          data-bs-target="#carouselExampleIndicators"
          data-bs-slide="next"
        >
          <span
            className="carousel-control-next-icon"
            aria-hidden="true"
          ></span>
          <span className="visually-hidden">Next</span>
        </button>
      </div>
      <div
        style={{
          position: "absolute",
          bottom: "20px",
          left: "50%",
          transform: "translateX(-50%)",
          zIndex: 10,
          width: "90%",
          maxWidth: "600px",
        }}
      >
        <div className="input-group">
          <input
            type="text"
            className="form-control"
            placeholder="Search for food..."
            aria-label="Search"
          />
          <button className="btn btn-primary" type="button">
            Search
          </button>
        </div>
      </div>
    </div>
  );
}

export default Crouser;
