import { useEffect, useState } from "react";
import SelectTeamInput from "./components/SelectTeamInput";
import TeamRosterList from "./components/TeamRosterList";

function Dashboard() {
  const [team, setTeam] = useState("");

  useEffect(() => {
    if (!team) return;
    document.title = `Team: ${team}`;
  }, [team]);

  return (
    <>
      <SelectTeamInput handleTeamInput={setTeam} />
      {team && <TeamRosterList team={team} />}
    </>
  );
}

export default Dashboard;
