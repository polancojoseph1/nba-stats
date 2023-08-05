import { Typography, Button, Avatar } from "@mui/material";
import { useState, useEffect } from "react";
import { fetchPlayerInfo } from "../../config";
import Grid from "@mui/material/Unstable_Grid2";
import FavoritesCard from "./FavoritesCard";

function FavoritesPage({ accountFavorites }) {
  //   const [loading, setLoading] = useState(false);
  const [favoritePlayerData, setFavoritePlayerData] = useState([]);

  const emptyFavoritesStr = (
    <>
      <h1 style={{ marginTop: "6rem" }}>
        You currently don't have any favorite players
      </h1>
      <h2>Try starting with your favorite team!🏀</h2>
    </>
  );

  useEffect(() => {
    try {
      async function getPlayerList() {
        accountFavorites.map(async (player) => {
          const res = await fetchPlayerInfo(player);
          // ADD ERROR HANDLING

          const data = await res.json();
          // ADD ERROR HANDLING
          console.log("In effect");

          setFavoritePlayerData((prevData) => [...prevData, data]);
        });
      }
      getPlayerList();
    } catch (err) {
      console.error(err.message);
    }
  }, []);

  //   console.log(favoritePlayerData);
  return (
    <>
      {favoritePlayerData.length > 0 ? (
        <>
          <Grid container sx={{ flexGrow: 1 }}>
            {favoritePlayerData.map((player) => (
              <Grid
                // p={0.5}
                sm={12}
                md={12}
                lg={12}
                sx={{
                  backgroundColor: "#485461",
                  backgroundImage:
                    "linear-gradient(315deg, #485461 0%, #28313b 74%)",
                  height: "20rem",
                }}
                justifyContent="center"
                alignItems="center"
              >
                <FavoritesCard key={player.PlayerID} player={player} />
              </Grid>
            ))}
          </Grid>
        </>
      ) : (
        emptyFavoritesStr
      )}
    </>
  );
}

export default FavoritesPage;
