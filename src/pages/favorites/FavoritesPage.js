import { Typography, Button, Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchPlayerInfo } from "../../config";
import Grid from "@mui/material/Unstable_Grid2";
import FavoritesCard from "./FavoritesCard";

function FavoritesPage({ accountFavorites }) {
  //   const [loading, setLoading] = useState(false);
  const [favoritePlayerData, setFavoritePlayerData] = useState([]);

  useEffect(() => {
    try {
      //   setLoading(true);
      async function getPlayerList() {
        accountFavorites.forEach(async (player) => {
          const res = await fetchPlayerInfo(player);
          // ADD ERROR HANDLING

          const data = await res.json();
          // ADD ERROR HANDLING

          if (accountFavorites.includes(data)) return;
          setFavoritePlayerData((prevData) => [...prevData, data]);
        });
      }
      getPlayerList();
      //   setLoading(false);
    } catch (err) {
      console.error(err.message);
    }
  }, [accountFavorites]);

  //   console.log(favoritePlayerData);
  return (
    <>
      {favoritePlayerData.length > 0 ? (
        <>
          <Grid container sx={{ flexGrow: 1 }} spacing={1}>
            {favoritePlayerData.map((player) => (
              <Grid
                p={1}
                sm={5}
                md={4}
                lg={3}
                sx={{ border: "1px solid red", height: "20rem" }}
                justifyContent="center"
                alignItems="center"
              >
                <FavoritesCard key={player.PlayerID} player={player} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        <>
          <h1 style={{ marginTop: "6rem" }}>
            You currently don't have any favorite players
          </h1>
          <h2>Try starting with your favorite team!🏀</h2>
        </>
      )}
    </>
  );
}

export default FavoritesPage;
