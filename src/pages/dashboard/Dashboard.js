import { useEffect, useState } from "react";
import SelectTeamInput from "./components/SelectTeamInput";
import TeamRosterList from "./components/TeamRosterList";
import NavBarDashboard from "../../assets/NavBarDashboard.js";

function Dashboard({ activeAccount }) {
  const [team, setTeam] = useState("");

  useEffect(() => {
    if (!team) return;
    document.title = `Team: ${team}`;

    return function () {
      document.title = "NBA Stats";
    };
  }, [team]);

  return (
    <>
      <NavBarDashboard activeAccount={activeAccount} />
      <SelectTeamInput boxWidth="25%" handleTeamInput={setTeam} />
      {team && <TeamRosterList team={team} />}
    </>
  );
}

export default Dashboard;
