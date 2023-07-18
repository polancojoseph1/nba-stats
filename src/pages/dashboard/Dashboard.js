import { useEffect, useState } from "react";
import NavBarDashboard from "../../assets/NavBarDashboard.js";
import PlayerOverviewCard from "../dashboard/components/PlayerOverviewCard.js";
import Loading from "../../assets/Loading.js";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography } from "@mui/material";
import { fetchPlayerInfo } from "../../config.js";

function Dashboard({ activeAccount }) {
  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(false);

  // Loads the complete player list. Then have to filter by player ID to get favorites array
  useEffect(() => {
    setLoading(true);
    async function getPlayerList() {
      activeAccount.favoritePlayers.forEach(async (player) => {
        const res = await fetchPlayerInfo(player);
        const data = await res.json();

        if (activeAccount.favoritePlayers.includes(data)) return;
        setFavoriteList((prevData) => [...prevData, data]);
      });
    }
    getPlayerList();
    setLoading(false);
  }, [activeAccount.favoritePlayers]);

  return (
    <Grid container sx={{ flexGrow: 1 }}>
      <Grid xs={12} md={12} lg={12}>
        <NavBarDashboard activeAccount={activeAccount} />
      </Grid>
      {loading && <Loading isLoading={loading} />}
      <br></br>
      <br></br>
      <br></br>
      <Grid xs={12} md={12} lg={12}>
        <Typography variant="h5">FAVORITE PLAYERS</Typography>
      </Grid>
      {favoriteList.length > 0 &&
        favoriteList.map((player) => {
          return (
            <Grid xs={6} md={3} lg={3}>
              <PlayerOverviewCard info={player} />
            </Grid>
          );
        })}
    </Grid>
  );
}

export default Dashboard;

{
  /* <SelectTeamInput handleTeamInput={setTeam}>
          Select a Team
        </SelectTeamInput> 
  {team && <TeamRosterList team={team} />} */
}
