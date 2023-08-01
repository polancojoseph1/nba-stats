import { Typography } from "@mui/material";
// import { useState, useEffect } from "react";

function NewsPage({ activeAccount }) {
  return (
    <Typography variant="h3" mt={10}>
      On NEWS page! Active account is {activeAccount.firstName}'s'
    </Typography>
  );
}

export default NewsPage;
