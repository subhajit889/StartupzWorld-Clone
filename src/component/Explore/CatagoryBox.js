import React from "react";
import "../../styles/explore.css";

const CategoryBox = ({ img, sub }) => {
  return (
    <div className="CategoryBox">
      <div className="image">
        <img src={img} alt="Catagory-Image" />
      </div>
      <p>{sub}</p>
    </div>
  );
};

export default CategoryBox;
