import React from "react";

const NewsItem = ({ title, description, imageUrl, newsurl }) => {
  return (
    <div className="card h-100">
      <img
        src={imageUrl}
        className="card-img-top"
        alt="news"
        style={{ height: "200px", objectFit: "cover" }}
      />
      <div className="card-body d-flex flex-column">
        <h5 className="card-title">{title}</h5>
        <p className="card-text flex-grow-1">{description}</p>
        <a
          href={newsurl}
          className="btn btn-primary mt-auto"
          target="_blank"
          rel="noopener noreferrer"
        >
          Read More
        </a>
      </div>
    </div>
  );
};

export default NewsItem;
