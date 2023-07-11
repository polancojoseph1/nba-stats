import { useEffect, useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { API_KEY, API_teamListUrl } from "../config";

function SelectTeamInput({ handleTeamInput }) {
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  console.log(teamList, selectedTeam);

  useEffect(() => {
    async function fetchTeamList() {
      const res = await fetch(`${API_teamListUrl(API_KEY)}`);
      const data = await res.json();
      setTeamList(data);
    }
    handleTeamInput(selectedTeam);

    fetchTeamList();
  }, [handleTeamInput, selectedTeam]);

  return (
    <Box width="250px">
      <TextField
        label="Select a Team"
        select
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
        fullWidth
      >
        {teamList.map((team) => (
          <MenuItem key={team.Key} value={team.Key}>
            {team.City} {team.Name}
          </MenuItem>
        ))}
      </TextField>
    </Box>
  );
}

export default SelectTeamInput;
