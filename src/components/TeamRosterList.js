import { useEffect, useState } from "react";
import Loading from "../assets/Loading";
import PlayerOverviewCard from "./PlayerOverviewCard";

import { API_KEY, API_teamRosterUrl } from "../config";

function TeamRosterList({ team }) {
  const [roster, setRoster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!team) return;
    async function fetchTeamRoster() {
      setIsLoading(true);
      const res = await fetch(`${API_teamRosterUrl(team, API_KEY)}`);
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
