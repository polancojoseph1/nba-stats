import { Avatar } from "@mui/material";
import Grid from "@mui/material/Unstable_Grid2";

function FavoritesCard({ player }) {
  // Check if creating the new object on each iteration affects performance
  return (
    <>
      <Grid container pt={2} xs={12} md={12} lg={12}>
        <Grid>
          <Avatar
            sx={{ width: 125, height: 125 }}
            src={player.PhotoUrl}
            alt={`${player.FirstName} ${player.LastName}`}
          />
        </Grid>
      </Grid>
    </>
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
