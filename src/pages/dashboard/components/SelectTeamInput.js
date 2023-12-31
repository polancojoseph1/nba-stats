import { useEffect, useState } from "react";
import { Box, TextField, MenuItem } from "@mui/material";
import { fetchTeamList } from "../../../config";

function SelectTeamInput({ handleTeamInput, children, boxWidth }) {
  const [teamList, setTeamList] = useState([]);
  const [selectedTeam, setSelectedTeam] = useState("");

  useEffect(() => {
    try {
      async function getTeamList() {
        const res = await fetchTeamList();
        // ADD ERROR HANDLING

        const data = await res.json();
        // ADD ERROR HANDLING

        setTeamList(data);
      }
      handleTeamInput(selectedTeam);
      getTeamList();
    } catch (err) {
      console.error(err.message);
    }
  }, [handleTeamInput, selectedTeam]);

  return (
    <Box width={boxWidth}>
      <TextField
        label={children}
        select
        value={selectedTeam}
        onChange={(e) => setSelectedTeam(e.target.value)}
        fullWidth
        size="small"
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
