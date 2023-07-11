import { useState, useEffect } from "react";
import SelectTeamInput from "./user_inputs/SelectTeamInput.js";
import TeamRosterList from "./components/TeamRosterList.js";

export const API_KEY = "2420fbc33e5849b18bb9b99594e662eb";

export default function App() {
  const [team, setTeam] = useState("");

  return (
    <>
      <SelectTeamInput handleTeamInput={setTeam} />
      {team && <TeamRosterList team={team} />}
    </>
  );
}
