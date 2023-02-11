import React from "react";
import "./card.scss";
import { CardDetails } from "../../constants/consts";
import twitchBackground from "../../images/twitch-bg.jpg";

//TODO: Change <a> tag link
const Card: React.FC<CardDetails> = ({ title, platform }) => {
  return (
    <a
      id="card"
      href="https://www.twitch.tv/solezano"
      target="_blank"
      rel="noopener noreferrer"
    >
      <div id="preview-image-container">
        <img id="preview-image" src={twitchBackground} alt="platform-bg" />
      </div>
      <div id="content-info-container">
        <div id="content-title-container">
          <p id="content-title-text">{title}</p>
        </div>
        <div id="content-source-info-container">
          <div id="content-metadata-container">
            <p id="content-metadata-text">JoeWo</p>
            <p id="content-metadata-text">18K Views - 43 minutes ago</p>
          </div>
          <div id="content-platform-container">
            <div id="platform-icon-container">
              <img
                id="platform-icon"
                src={twitchBackground}
                alt="platform-bg"
              />
            </div>
          </div>
        </div>
      </div>
    </a>
  );
};

export default Card;
