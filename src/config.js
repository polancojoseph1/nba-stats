export const API_KEY = "2420fbc33e5849b18bb9b99594e662eb";
export const TIMEOUT_SEC = 10;
export const MODAL_CLOSE_SEC = 2.5;

export const API_teamRosterUrl = (team, key) =>
  `https://api.sportsdata.io/v3/nba/scores/json/Players/${team}?key=${key}`;

export const API_teamListUrl = (key) =>
  `https://api.sportsdata.io/v3/nba/scores/json/teams?key=${key}`;
