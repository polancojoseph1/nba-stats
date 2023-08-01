import { useEffect, useState } from "react";
import PlayerOverviewCard from "./PlayerOverviewCard.js";
import { fetchTeamRoster } from "../../../config";
import Loading from "../../../assets/Loading.js";

function TeamRosterList({ team }) {
  const [roster, setRoster] = useState([]);
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    try {
      if (!team) return;
      async function getTeamRoster() {
        setIsLoading(true);
        const res = await fetchTeamRoster(team);
        // ADD ERROR HANDLING

        const data = await res.json();
        // ADD ERROR HANDLING

        setRoster(data);
        setIsLoading(false);
      }

      getTeamRoster();
    } catch (err) {
      console.error(err.message);
    }
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
