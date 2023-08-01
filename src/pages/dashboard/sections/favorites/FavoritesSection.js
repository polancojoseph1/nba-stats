import { useEffect, useState } from "react";
import Grid from "@mui/material/Unstable_Grid2";
import { Typography, Stack, Button } from "@mui/material";
import Loading from "../../../../assets/Loading.js";
import { fetchPlayerInfo } from "../../../../config.js";
import FavoritePlayerList from "./FavoritePlayerList.js";

function FavoritesSection({ activeAccount }) {
  const [favoriteList, setFavoriteList] = useState([]);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    try {
      setLoading(true);
      async function getPlayerList() {
        activeAccount.favoritePlayers.forEach(async (player) => {
          const res = await fetchPlayerInfo(player);
          // ADD ERROR HANDLING

          const data = await res.json();
          // ADD ERROR HANDLING

          if (activeAccount.favoritePlayers.includes(data)) return;
          setFavoriteList((prevData) => [...prevData, data]);
        });
      }
      getPlayerList();
      setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  }, [activeAccount.favoritePlayers]);

  // console.log(loading);
  // console.log(favoriteList);

  return loading ? (
    <Loading isLoading={loading} />
  ) : (
    <Grid container sx={{ flexGrow: 1 }}>
      {/* HEADING */}
      <Grid mt={7} mb={3} xs={12} md={12} lg={12}>
        <Typography variant="h4" component="h2">
          FAVORITE PLAYERS
        </Typography>
      </Grid>
      {favoriteList.length > 0 ? (
        <Grid
          container
          sx={{ flexGrow: 1 }}
          justifyContent="center"
          alignItems="center"
        >
          <Stack
            ml={0}
            direction="row"
            spacing={{ xs: 2, sm: 2, md: 5, lg: 5, xl: 5 }}
          >
            {/* LIST OF FAVORITES COMPONENTS */}
            <FavoritePlayerList favorites={favoriteList} />
            <Button sx={{}} variant="outlined">
              View All
            </Button>
          </Stack>
        </Grid>
      ) : (
        <Typography variant="h5" component="h3">
          Add your favorite players!
        </Typography>
      )}
    </Grid>
  );
}

// ON CLICK OPEN MODAL THAT SHOWS PLAYER STATS AND ALLOWS YOU TO FAVORITE THEM

export default FavoritesSection;
