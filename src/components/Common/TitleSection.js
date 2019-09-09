import React from "react";
import "./TitleSection.scss";
const TitleSection = props => {
  return (
    <div className="container-fluid titleSection">
      <h2>{props.title}</h2>
      <h6>
        <span>{`${props.prefix || ""} `}</span>
        {props.small}
      </h6>
    </div>
  );
};

export default TitleSection;
