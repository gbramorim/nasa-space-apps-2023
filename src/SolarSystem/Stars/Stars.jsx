import React from "react";
import "./Stars.css";

const Stars = () => {
  const numStars = 100;

  const stars = Array.from({ length: numStars }).map((_, index) => {
    const size = Math.random() * 3 + 1;
    const left = Math.random() * 100 + "%";
    const top = Math.random() * 100 + "%";
    return (
      <div
        key={index}
        className="star"
        style={{
          width: size + "px",
          height: size + "px",
          left: left,
          top: top,
        }}
      ></div>
    );
  });

  return <div className="stars-background">{stars}</div>;
};

export default Stars;
