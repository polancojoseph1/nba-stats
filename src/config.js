export const API_KEY = "2420fbc33e5849b18bb9b99594e662eb";
export const TIMEOUT_SEC = 10;
export const MODAL_CLOSE_SEC = 2.5;

export const fetchTeamRoster = (team) =>
  fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Players/${team}?key=${API_KEY}`
  );

export const fetchTeamList = () =>
  fetch(`https://api.sportsdata.io/v3/nba/scores/json/teams?key=${API_KEY}`);

export const fetchPlayerInfo = (playerID) =>
  fetch(
    `https://api.sportsdata.io/v3/nba/scores/json/Player/${playerID}?key=${API_KEY}`
  );

export const formatName = (str) => {
  const firstLetter = str[0].toUpperCase();
  const rest = str.toLowerCase().slice(1);
  const formattedStr = [firstLetter, rest].join("");

  return formattedStr;
};
