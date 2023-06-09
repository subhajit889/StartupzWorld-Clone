import React from 'react';
import "../../styles/explore.css";
import "../../styles/catagory.css";
import Catagory2Type from "./Catagory2Type";

const Catagory1Type = ({ sub, data }) => {
  return (
    <div className="category">
      <p>
        Explore By <b>{sub}</b>
      </p>
      <div className="categoryStore">
        {data.map((d, i) => {
          return <Catagory2Type details={d} key={i} />;
        })}
      </div>
    </div>
  );
}

export default Catagory1Type;