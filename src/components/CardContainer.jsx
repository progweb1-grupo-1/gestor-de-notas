import React from "react";
import Card from "./Card";

const CardContainer = () => {
  return (
    <div className="container">
      <div className="row border rounded p-2 mt-3">
        <Card />
      </div>
    </div>
  );
};

export default CardContainer;
