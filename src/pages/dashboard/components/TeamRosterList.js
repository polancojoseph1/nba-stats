import { useEffect, useState } from "react";
import PlayerOverviewCard from "./PlayerOverviewCard.js";
import { fetchTeamRoster } from "../../../config";
import Loading from "../../../assets/Loading.js";

function TeamRosterList({ team }) {
  const [roster, setRoster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    if (!team) return;
    async function getTeamRoster() {
      setIsLoading(true);
      const res = await fetchTeamRoster(team);
      const data = await res.json();
      setRoster(data);
      setIsLoading(false);
    }

    getTeamRoster();
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
