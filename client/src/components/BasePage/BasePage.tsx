import React, { useState } from "react";
import CardContainer from "../CardContainer/CardContainer";
import NavBar from "../NavBar/NavBar";
import SideBar from "../SideBar/SideBar";
import "./basePage.scss";
import * as Constants from "../../constants/consts";

const BasePage = () => {
  const [youtubeArr, setYoutubeArr] = useState<Constants.CardDetails[]>([
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
    { title: "JoeWo Frag Video", platform: Constants.YOUTUBE },
    { title: "Feegoe Highlight Reel", platform: Constants.YOUTUBE },
  ]);

  const [twitchArr, setTwitchArr] = useState<Constants.CardDetails[]>([
    { title: "STPeach ASMR", platform: Constants.TWITCH },
    { title: "Indiefoxx ASMR", platform: Constants.TWITCH },
    { title: "Amouranth ASMR", platform: Constants.TWITCH },
    { title: "Pokimane ASMR", platform: Constants.TWITCH },
    { title: "STPeach ASMR", platform: Constants.TWITCH },
    { title: "Indiefoxx ASMR", platform: Constants.TWITCH },
    { title: "Amouranth ASMR", platform: Constants.TWITCH },
    { title: "Pokimane ASMR", platform: Constants.TWITCH },
    { title: "STPeach ASMR", platform: Constants.TWITCH },
    { title: "Indiefoxx ASMR", platform: Constants.TWITCH },
    { title: "Amouranth ASMR", platform: Constants.TWITCH },
    { title: "Pokimane ASMR", platform: Constants.TWITCH },
    { title: "STPeach ASMR", platform: Constants.TWITCH },
    { title: "Indiefoxx ASMR", platform: Constants.TWITCH },
    { title: "Amouranth ASMR", platform: Constants.TWITCH },
    { title: "Pokimane ASMR", platform: Constants.TWITCH },
    { title: "Amouranth ASMR", platform: Constants.TWITCH },
    { title: "Pokimane ASMR", platform: Constants.TWITCH },
    { title: "STPeach ASMR", platform: Constants.TWITCH },
    { title: "Indiefoxx ASMR", platform: Constants.TWITCH },
    { title: "Amouranth ASMR", platform: Constants.TWITCH },
    { title: "Pokimane ASMR", platform: Constants.TWITCH },
    { title: "STPeach ASMR", platform: Constants.TWITCH },
    { title: "Indiefoxx ASMR", platform: Constants.TWITCH },
    { title: "Amouranth ASMR", platform: Constants.TWITCH },
    { title: "Pokimane ASMR", platform: Constants.TWITCH },
  ]);

  return (
    <div id="canvas">
      <NavBar />
      <div id="content-container">
        <SideBar />
        <CardContainer content={{ youtube: youtubeArr, twitch: twitchArr }} />
      </div>
    </div>
  );
};

export default BasePage;
