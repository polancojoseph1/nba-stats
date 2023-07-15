export const API_KEY = "2420fbc33e5849b18bb9b99594e662eb";
export const TIMEOUT_SEC = 10;
export const MODAL_CLOSE_SEC = 2.5;

export const fetchTeamRoster = (team) =>
  fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Players/${team}?key=${API_KEY}`
  );

export const fetchTeamList = () =>
  fetch(`https://api.sportsdata.io/v3/nba/scores/json/teams?key=${API_KEY}`);
