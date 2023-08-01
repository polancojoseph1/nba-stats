import { Avatar, Divider } from "@mui/material";
// import Grid from "@mui/material/Unstable_Grid2";

function FavoritePlayerList({ favorites }) {
  return (
    <>
      {favorites.map((player, i) => {
        return i > 7 ? null : (
          <>
            <Avatar
              sx={{ width: 75, height: 75 }}
              src={player.PhotoUrl}
              alt={`${player.FirstName} ${player.LastName}`}
              key={player.PlayerID}
            />
            <Divider orientation="vertical" flexItem />
          </>
        );
      })}
    </>
  );
}

export default FavoritePlayerList;
