import * as React from "react";
import { useState } from "react";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Toolbar from "@mui/material/Toolbar";
import IconButton from "@mui/material/IconButton";
import Typography from "@mui/material/Typography";
import Menu from "@mui/material/Menu";
import MenuIcon from "@mui/icons-material/Menu";
import Container from "@mui/material/Container";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import Tooltip from "@mui/material/Tooltip";
import MenuItem from "@mui/material/MenuItem";
import GitHubIcon from "@mui/icons-material/GitHub";

function NavBarDashboard({ activeAccount, setPage }) {
  const [anchorElNav, setAnchorElNav] = useState(null);
  const [anchorElUser, setAnchorElUser] = useState(null);
  const pages = ["Dashboard", "Favorites", "Search", "News"];

  const handleOpenNavMenu = (e) => {
    setAnchorElNav(e.currentTarget);
  };
  const handleOpenUserMenu = (e) => {
    setAnchorElUser(e.currentTarget);
  };

  const handleCloseNavMenu = (e) => {
    setAnchorElNav(null);
    setPage(e.target.textContent);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  /////////////////////////////////////

  return (
    <AppBar position="fixed">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <Typography
            variant="h4"
            noWrap
            component="a"
            href="/"
            sx={{
              mr: 2,
              display: { xs: "none", md: "flex" },
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NBA STATS
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
            >
              <MenuIcon />
            </IconButton>
            <Menu
              id="menu-appbar"
              anchorEl={anchorElNav}
              anchorOrigin={{
                vertical: "bottom",
                horizontal: "left",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "left",
              }}
              open={Boolean(anchorElNav)}
              onClose={handleCloseNavMenu}
              sx={{
                display: { xs: "block", md: "none" },
              }}
            >
              {pages.map((page) => (
                <MenuItem key={page} onClick={handleCloseNavMenu}>
                  <Typography textAlign="center">{page}</Typography>
                </MenuItem>
              ))}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href=""
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontFamily: "monospace",
              fontWeight: 700,
              letterSpacing: ".4rem",
              color: "inherit",
              textDecoration: "none",
            }}
          >
            NBA STATS
          </Typography>
          <Box sx={{ flexGrow: 1, display: { xs: "none", md: "flex" } }}>
            {pages.map((page) => (
              <Button
                key={page}
                onClick={handleCloseNavMenu}
                sx={{ my: 2, color: "white", display: "block" }}
              >
                {page}
              </Button>
            ))}
          </Box>

          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="View GitHub Repo">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar
                  alt={`${activeAccount.firstName} ${activeAccount.lastName}`}
                  src="/static/images/avatar/2.jpg"
                >{`${activeAccount.firstName[0]} ${activeAccount.lastName[0]}`}</Avatar>
              </IconButton>
            </Tooltip>
            <Menu
              sx={{ mt: "45px" }}
              id="menu-appbar"
              anchorEl={anchorElUser}
              anchorOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              keepMounted
              transformOrigin={{
                vertical: "top",
                horizontal: "right",
              }}
              open={Boolean(anchorElUser)}
              onClose={handleCloseUserMenu}
            >
              <a
                href="https://github.com/JustinRivera-9/nba-stats"
                target="_blank"
                rel="noreferrer"
              >
                <IconButton>
                  <GitHubIcon fontSize="large" />
                </IconButton>
              </a>
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
export default NavBarDashboard;
