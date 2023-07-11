import { useEffect, useState } from "react";
import Loading from "../assets/Loading";
import PlayerOverviewCard from "./PlayerOverviewCard";

import { API_KEY } from "../config";

function TeamRosterList({ team }) {
  const [roster, setRoster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!team) return;
    async function fetchTeamRoster() {
      setIsLoading(true);
      const res = await fetch(
        `https://api.sportsdata.io/v3/nba/scores/json/Players/${team}?key=${API_KEY}`
      );
      const data = await res.json();
      setRoster(data);
      setIsLoading(false);
    }

    fetchTeamRoster();
  }, [team]);

  return isLoading ? (
    <Loading isLoading={isLoading} />
  ) : (
    roster.map((player) => (
      <PlayerOverviewCard info={player} key={player.PlayerID} />
    ))
  );
}

export default TeamRosterList;
