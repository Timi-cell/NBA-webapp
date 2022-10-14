import React, { Component } from "react";
const teams_api = `http://localhost:3305/teams`;

class Polls extends Component {
  state = {
    teams: [],
  };
  incrementPoll = (countValue, id) => {
    fetch(`${teams_api}/${id}`, {
      method: "PATCH",
      headers: {
        Accept: "application/json",
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ count: countValue + 1 }),
    });
  };
  componentDidMount() {
    fetch(teams_api, { method: "GET" })
      .then((response) => response.json())
      .then((json) => this.setState({ teams: json }));
  }
  componentDidUpdate() {
    this.componentDidMount();
  }
  getTeams = (allTeams) => {
    if (allTeams) {
      const teams = allTeams.filter((team) => team.poll === "true");
      teams.sort((a, b) => {
        return b.count - a.count;
      });
      const postions = ["1ST", "2ND", "3RD"];
      return (
        <div className="polls_block">
          {teams.map((team, index) => {
            return (
              <div
                key={team.id}
                onClick={() => this.incrementPoll(team.count, team.id)}
              >
                <img src={`/images/teams/${team.logo}`} alt={team.logo} />
                <div className="polls_info">
                  <h3>{team.count !== 0 ? postions[index] : "---"}</h3>
                  <p>{team.count} Votes</p>
                </div>
              </div>
            );
          })}
        </div>
      );
    }
  };
  render() {
    return (
      <div className="polls">
        <h2>Who will be the next champion?</h2>
        <p>Vote for your favourite team</p>
        <div>{this.getTeams(this.state.teams)}</div>
      </div>
    );
  }
}

export default Polls;
