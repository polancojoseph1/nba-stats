import { Box, CardContent, Typography } from "@mui/material";

function PlayerOverviewCard({ info }) {
  const {
    PlayerID: playerID,
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

  const boxStyle = {
    backgroundColor: "primary.dark",
    padding: "16px",
    margin: "16px",
    borderRadius: "1rem",
    float: "left",
  };

  return (
    <Box width="375px" sx={boxStyle}>
      <CardContent>
        <div className="player-card__header" width="350px">
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
        <div className="player-card__content" width="350px">
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
      </CardContent>
    </Box>
  );
}

export default PlayerOverviewCard;
