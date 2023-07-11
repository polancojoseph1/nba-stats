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
    PhotoUrl: photoUrl,
    Experience: experience,
  } = info;

  return (
    <div>
      <h3>
        {firstName} {lastName}
      </h3>
    </div>
  );
}

export default PlayerOverviewCard;
