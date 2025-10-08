import React from "react";

const StaticCard = ({ title, category, price, thumbnail }) => {
  return (
    <div className="card h-100 shadow-sm border-0">
      <img
        src={thumbnail}
        className="card-img-top"
        alt={title}
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title text-dark fw-semibold">{title}</h5>
        <p className="text-muted mb-2">{category}</p>
        <div className="mt-auto d-flex justify-content-between align-items-center">
          <span className="fw-bold text-primary">${price}</span>
          <button className="btn btn-outline-primary btn-sm">View Details</button>
        </div>
      </div>
    </div>
  );
};

export default StaticCard;
