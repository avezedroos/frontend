import React from "react";

const LiveCard = ({ title, category, price, thumbnail, liveUrl, fileUrl }) => {
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

        <div className="mt-auto">
          <div className="d-flex justify-content-between align-items-center">
            <span className="fw-bold text-primary">${price}</span>
            {liveUrl && (
              <a
                href={liveUrl}
                target="_blank"
                rel="noreferrer"
                className="btn btn-success btn-sm"
              >
                Live Demo
              </a>
            )}
          </div>
          {fileUrl && (
            <a
              href={fileUrl}
              download
              className="btn btn-outline-primary btn-sm w-100 mt-2"
            >
              Download
            </a>
          )}
        </div>
      </div>
    </div>
  );
};

export default LiveCard;
