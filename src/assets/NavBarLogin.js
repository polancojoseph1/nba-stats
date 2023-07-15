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
          <Typography
            variant="h4"
            component="div"
            sx={{ color: "black", flexGrow: 1 }}
          >
            NBA STATS
          </Typography>

          <a
            href="https://github.com/JustinRivera-9/nba-stats"
            target="_blank"
            rel="noreferrer"
          >
            <IconButton>
              <GitHubIcon fontSize="large" />
            </IconButton>
          </a>
        </Toolbar>
      </AppBar>
    </Box>
  );
}
