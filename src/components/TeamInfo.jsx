import React, { useState } from "react";
import { useParams } from "react-router-dom";
import Footer from "./resuables/Footer";
import Header from "./resuables/Header";

const teams_api = `http://localhost:3305/teams`;

const TeamInfo = () => {
  const { id } = useParams();
  const [data, updateData] = useState("");
  fetch(`${teams_api}/${id}`, {
    method: "GET",
  })
    .then((response) => response.json())
    .then((json) => updateData(json));
  const showInfo = () => {
    if (data !== "") {
      return (
        <div className="team_block">
          <img
            src={`../images/teams/${data.logo}`}
            alt={data.logo}
            className="team_logo"
          />
          <div className="intro">
            <h2 id="team-name">{data.name}</h2>
            <p>{data.description}</p>
            <h2 id="player_heading">PLAYERS</h2>
            <div className="players_block">
              {data.squad.map((player) => {
                return (
                  <div className="player">
                    <img src="../images/avatar.png" alt={player.name} />
                    <h2>{player.name}</h2>
                    <div>
                      <p>
                        <b>Number</b> : {player.number}
                      </p>
                      <p>
                        <b>PPG</b> : {player.PPG}
                      </p>
                      <p>
                        <b>APG</b> : {player.APG}
                      </p>
                      <p>
                        <b>RPG</b> : {player.RPG}
                      </p>
                    </div>
                  </div>
                );
              })}
            </div>
          </div>
        </div>
      );
    }
  };
  return (
    <div>
      <Header />
      <div>{showInfo()}</div>
      <Footer />
    </div>
  );
};

export default TeamInfo;
