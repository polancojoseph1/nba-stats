import { Typography } from "@mui/material";
// import { useState, useEffect } from "react";

function SearchPage({ activeAccount }) {
  return (
    <Typography variant="h3" mt={10}>
      On SEARCH page! Active account is {activeAccount.firstName}'s'
    </Typography>
  );
}

export default SearchPage;
