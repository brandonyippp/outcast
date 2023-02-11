import React from "react";
import Card from "../Card/Card";
import "./cardContainer.scss";
import * as Constants from "../../constants/consts";

interface CardContainerProps {
  content: {
    twitch?: Constants.CardDetails[];
    youtube?: Constants.CardDetails[];
  };
}

//TODO: Only show each inner-cards-container if results are populated from Twitch/YT/etc. API calls
const CardContainer: React.FC<CardContainerProps> = ({ content }) => {
  return (
    <div className="outer-canvas-container">
      {content.youtube ? (
        <div className="inner-cards-container">
          <div className="card-container-header">{Constants.YOUTUBE}</div>
          <div className="card-container">
            {content.youtube.map((card) => (
              <Card title={card.title} platform={card.platform} />
            ))}
          </div>
          <div className="card-container-options">
            <p>show more</p>
          </div>
        </div>
      ) : (
        <></>
      )}
      {content.twitch ? (
        <div className="inner-cards-container">
          <div className="card-container-header">{Constants.TWITCH}</div>
          <div className="card-container">
            {content.twitch.map((card) => (
              <Card title={card.title} platform={card.platform} />
            ))}
          </div>
          <div className="card-container-options">
            <p>show more</p>
          </div>
        </div>
      ) : (
        <></>
      )}
    </div>
  );
};

export default CardContainer;
