import React, { Component } from "react";
import Footer from "./resuables/Footer";
import Header from "./resuables/Header";
import { Link } from "react-router-dom";
const teams_api = `http://localhost:3305/teams`;
class Teams extends Component {
  state = {
    teams: [],
  };

  getTeams = () => {
    fetch(teams_api, {
      method: "GET",
    })
      .then((response) => response.json())
      .then((json) => this.setState({ teams: json }));
  };
  componentDidMount() {
    this.getTeams();
  }
  showTeams = (teams_list) => {
    if (teams_list) {
      return (
        <div className="teams_logo">
          {teams_list.map((team) => {
            return (
              <Link to={`/teams/${team.id}`} key={team.id}>
                <img src={`/images/teams/${team.logo}`} alt={team.logo} />
              </Link>
            );
          })}
        </div>
      );
    }
  };

  filterLogo = (keyword, allTeams) => {
    // This code might be refactored later...
    if (keyword !== "") {
      const teams = allTeams.filter((team) => {
        return team.name.toLowerCase().indexOf(keyword.toLowerCase()) > -1;
      });
      this.setState({ teams });
    } else {
      this.getTeams();
    }
  };
  handleChange = (event) => {
    let keyword = event.target.value;
    this.filterLogo(keyword, this.state.teams);
  };
  render() {
    return (
      <div>
        <Header />
        <div className="input_block">
          <input
            type="text"
            placeholder="Search for a Team"
            className="input_field"
            onChange={this.handleChange}
          />
        </div>
        <div className="teams_block">{this.showTeams(this.state.teams)}</div>
        <Footer />
      </div>
    );
  }
}

export default Teams;
