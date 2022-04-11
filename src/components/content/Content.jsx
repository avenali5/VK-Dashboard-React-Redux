import React from "react";
import Friends from "./friends/Friends";
import "../../scss/content.scss";
import Visitors from "./visitors/Visitors";
import Followers from "./followers/Followers";
import AudienceReach from "./audience_reach/Audience_reach";
import DeviceReach from "./device_reach/Device_reach";
import GenderAge from "./gender_age/Gender_age";
import Geo from "./geo/Geo";

const Content = () => {
  return (
    <section className="whole-content-container">
      <section className="content-container max-width relative">
        <Friends />
        <Visitors />
        <Followers />
        <AudienceReach />
        <DeviceReach />
        <GenderAge />
        <Geo />
      </section>
    </section>
  );
};

export default Content;
