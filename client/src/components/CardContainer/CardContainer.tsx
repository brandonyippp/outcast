import React from "react";
import Card from "../Card/Card";
import "./cardContainer.scss";

interface CardContainerProps {
  header: string;
  content: any[];
}

const CardContainer: React.FC<CardContainerProps> = ({ header, content }) => {
  return (
    <div id="outer-card-container">
      <div id="card-container-header">{header}</div>
      <div id="card-container">
        {content.map((card) => (
          <Card title={card.title} platform={card.platform} />
        ))}
      </div>
    </div>
  );
};

export default CardContainer;
