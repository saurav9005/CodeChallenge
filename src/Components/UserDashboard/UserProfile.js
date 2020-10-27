import React, { Component } from "react";
import "./user.css";
var user = {
  basicInfo: {
    name: "Filip Martin Jose",
    location: "Los Angeles",
    level: "Pro Level",
    Followers: "980",
    Projects: "142",
    Rank: "129",
    photo: "http://lorempixel.com/100/100/people/",
  },
};

class UserProfile extends Component {
  render() {
    return (
      <div id="user-profile">
        <div className="top">
          <div className="avatar">
            <img alt="" src={user.basicInfo.photo} />
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
