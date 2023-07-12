import { useState } from "react";
import SelectTeamInput from "./user_inputs/SelectTeamInput.js";
import TeamRosterList from "./components/TeamRosterList.js";

export default function App() {
  const [team, setTeam] = useState("");

  return (
    <>
      <SelectTeamInput handleTeamInput={setTeam} />
      {team && <TeamRosterList team={team} />}
    </>
  );
}
