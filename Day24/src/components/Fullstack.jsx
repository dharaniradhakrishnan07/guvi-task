import React from "react";
import Card from "./Card";

const Fullstack = ({ data }) => {
  const fullstack = data.filter((item) => item.head === "Full Stack");
  return (
    <div className="container">
      <div className="row py-5 d-flex justify-content-center">
        {fullstack.map((item, index) => {
          return (
            <>
              <Card item={item} index={index} />
            </>
          );
        })}
      </div>
    </div>
  );
};

export default Fullstack;