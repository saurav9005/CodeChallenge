import React, { Component } from "react";
import userpic from "./userpic.jpg";
import "./user.css";
var user = {
  basicInfo: {
    name: "Filip Martin Jose",
    location: "Los Angeles",
    level: "Pro Level",
    Followers: "980",
    Projects: "142",
    Rank: "129",
  },
};

class UserProfile extends Component {
  render() {
    return (
      <div id="user-profile">
        <div className="top">
          <div className="avatar">
            <img alt="" src={userpic} />
          </div>
          <h2>{user.basicInfo.name}</h2>
          <h3>{user.basicInfo.location}</h3>
          <span>{user.basicInfo.level}</span>
        </div>
        <div className="bottom">
          <div className="col">
            <span>Followers</span>
            <p>{user.basicInfo.Followers}</p>
          </div>
          <div className="col">
            <span>Projects</span>
            <p>{user.basicInfo.Projects}</p>
          </div>
          <div className="col">
            <span>Rank</span>
            <p>{user.basicInfo.Rank}</p>
          </div>
        </div>
      </div>
    );
  }
}

export default UserProfile;
