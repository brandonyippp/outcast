import React from "react";
import "./card.scss";
import { CardDetails } from "../../constants/consts";
import twitchBackground from "../../images/twitch-bg.jpg";

//TODO: Change <a> tag link
const Card: React.FC<CardDetails> = ({ title, platform }) => {
  return (
    <a
      className="card"
      href="https://www.twitch.tv/solezano"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div className="preview-image-container">
        <img
          className="preview-image"
          src={twitchBackground}
          alt="platform-bg"
        />
      </div>
      <p className="card-title-text">{title}</p>
      <div className="content-info-container">
        <p>metadata</p>
        <div id="empty-flexbox">
          <div />
          {/*<p className="platform">{platform}</p> */}
          <img className="platform" src={twitchBackground} alt="platform-bg" />
        </div>
      </div>
    </a>
  );
};

export default Card;
