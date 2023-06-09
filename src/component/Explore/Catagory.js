import React, { useState } from "react";
import { AiOutlineArrowLeft, AiOutlineArrowRight } from "react-icons/ai";
import "../../styles/explore.css";
import { category } from "../Data/AllData";
import CatagoryBox from "./CatagoryBox";

const Category = () => {
  const itemsPerPage = 4; // Number of items to show per page

  const [startIndex, setStartIndex] = useState(0); // Index of the first item to display

  const handlePrev = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex - 1;
      return newIndex < 0 ? category.length - itemsPerPage : newIndex;
    });
  };

  const handleNext = () => {
    setStartIndex((prevIndex) => {
      const newIndex = prevIndex + 1;
      return newIndex >= category.length - itemsPerPage + 1 ? 0 : newIndex;
    });
  };

  return (
    <>
      <div className="chevron">
        <div className="ChevronSide" onClick={handlePrev}>
          <AiOutlineArrowLeft /> 
        </div>
        <div className="ChevronSide" onClick={handleNext}>
          <AiOutlineArrowRight />
        </div>
      </div>
      <div className="category">
        <p>
          Explore By <b>Category</b>
        </p>
        <div className="catagoryStore">
          {category
            .slice(startIndex, startIndex + itemsPerPage)
            .map((c, index) => (
              <CatagoryBox img={c.photo} sub={c.sub} key={index} />
            ))}
        </div>
      </div>
    </>
  );
};

export default Category;
