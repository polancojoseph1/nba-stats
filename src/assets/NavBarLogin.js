import * as React from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";
import IconButton from "@mui/material/IconButton";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function NavBarLogin() {
  return (
    <Box sx={{ flexGrow: 1 }}>
      <AppBar position="fixed">
        <Toolbar>
          <a
            href="https://github.com/JustinRivera-9/nba-stats"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              ml: 2,
              display: { xs: "flex", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NBA STATS
          </Typography>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
