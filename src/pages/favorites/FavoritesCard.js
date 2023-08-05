import { Avatar, Stack, Typography } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function FavoritesCard({ player }) {
  // Check if creating the new object on each iteration affects performance
  console.log(player);

  return (
    <div style={{ border: "1px solid red" }}>
      <Grid xs={12} md={6} lg={6}>
        <Avatar
          sx={{ width: 100, height: 100 }}
          src={player.PhotoUrl}
          alt={`${player.FirstName} ${player.LastName}`}
        />
      </Grid>
      <Grid xs={12} md={6} lg={6}>
        <Stack>
          <Typography>PPG: 25.6</Typography>
        </Stack>
      </Grid>
    </div>
  );
}

export default FavoritesCard;

// PLAYER PROPERTIES NEEDED
// BirthCity;
// BirthState; could be 'null'
// College;
// Height - 74;
// DraftKingsName;
// Jersey;
// Position;
// Weight

// NEED STATS - WILL PROBABLY HAVE TO FETCH DIFFERENT EDN POINT FOR STATS
