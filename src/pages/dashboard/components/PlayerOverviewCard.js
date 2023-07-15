import { Typography } from "@mui/material";

function PlayerOverviewCard({ info }) {
  const {
    // PlayerID: playerID,
    Jersey: jerseyNum,
    Position: position,
    FirstName: firstName,
    LastName: lastName,
    Height: height,
    Weight: weight,
    College: college,
    PhotoUrl: imgUrl,
    Experience: experience,
  } = info;

  // const boxStyle = {
  //   padding: "16px",
  //   margin: "16px",
  //   borderRadius: "1rem",
  //   float: "left",
  // };

  return (
    <div>
      <div>
        <img
          style={{ float: "left" }}
          src={imgUrl}
          alt={`${firstName} ${lastName}`}
        />
        <Typography gutterBottom variant="h4" component="div">
          {firstName} {lastName}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          Position: {position}
        </Typography>
        <Typography gutterBottom variant="h4" component="div">
          # {jerseyNum}
        </Typography>
      </div>
      <div>
        <Typography gutterBottom variant="body2" color="text.primary">
          College: {college}
        </Typography>
        <Typography gutterBottom variant="body2" color="text.primary">
          Height: {height}"
        </Typography>
        <Typography gutterBottom variant="body2" color="text.primary">
          Weight: {weight} lbs
        </Typography>
        <Typography gutterBottom variant="body2" color="text.primary">
          Years in League: {experience === 0 ? "Rookie" : experience}
        </Typography>
      </div>
    </div>
  );
}

export default PlayerOverviewCard;
