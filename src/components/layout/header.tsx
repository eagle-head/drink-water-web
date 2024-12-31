"use client";

import { useState } from "react";

import MenuIcon from "@mui/icons-material/Menu";
import WaterDropIcon from "@mui/icons-material/WaterDrop";
import AppBar from "@mui/material/AppBar";
import Avatar from "@mui/material/Avatar";
import Box from "@mui/material/Box";
import Button from "@mui/material/Button";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Link from "@mui/material/Link";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import Toolbar from "@mui/material/Toolbar";
import Tooltip from "@mui/material/Tooltip";
import Typography from "@mui/material/Typography";

const dataPages = {
  Home: "/",
  History: "/history",
  Settings: "/settings",
};
const dataSettings = ["Profile", "Account", "Logout"];

export default function Header() {
  const [anchorElNav, setAnchorElNav] = useState<null | HTMLElement>(null);
  const [anchorElUser, setAnchorElUser] = useState<null | HTMLElement>(null);

  function handleOpenNavMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElNav(event.currentTarget);
  }

  function handleOpenUserMenu(event: React.MouseEvent<HTMLElement>) {
    setAnchorElUser(event.currentTarget);
  }

  function handleCloseNavMenu() {
    setAnchorElNav(null);
  }

  function handleCloseUserMenu() {
    setAnchorElUser(null);
  }

  function renderedSettings(settings: string[]) {
    return settings.map(setting => (
      <MenuItem key={setting} onClick={handleCloseUserMenu}>
        <Typography sx={{ textAlign: "center" }}>{setting}</Typography>
      </MenuItem>
    ));
  }

  function renderedMenuPages(pages: Record<string, string>) {
    return Object.entries(pages).map(([pageName, pageURL]) => (
      <MenuItem key={pageName} onClick={handleCloseNavMenu}>
        <Link href={pageURL} style={{ textDecoration: "none", color: "inherit", width: "100%" }}>
          <Typography sx={{ textAlign: "center", width: "100%" }}>{pageName}</Typography>
        </Link>
      </MenuItem>
    ));
  }

  function renderedHeaderLinkPages(pages: Record<string, string>) {
    return Object.entries(pages).map(([pageName, pageURL]) => (
      <Link key={pageName} href={pageURL}>
        <Button
          sx={{
            my: 2,
            color: "white",
            display: "block",
          }}>
          {pageName}
        </Button>
      </Link>
    ));
  }

  return (
    <AppBar position="static" component="header">
      <Container maxWidth="xl">
        <Toolbar disableGutters>
          <WaterDropIcon
            sx={{
              display: {
                xs: "none",
                md: "flex",
              },
              mr: 1,
            }}
          />
          <Typography
            variant="h6"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: {
                xs: "none",
                md: "flex",
              },
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            Drink Water
          </Typography>

          <Box sx={{ flexGrow: 1, display: { xs: "flex", md: "none" } }}>
            <IconButton
              size="large"
              aria-label="account of current user"
              aria-controls="menu-appbar"
              aria-haspopup="true"
              onClick={handleOpenNavMenu}
              color="inherit"
              sx={{ paddingLeft: 0 }}>
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
                display: {
                  xs: "block",
                  md: "none",
                },
              }}>
              {renderedMenuPages(dataPages)}
            </Menu>
          </Box>
          <Typography
            variant="h5"
            noWrap
            component="a"
            href="#app-bar-with-responsive-menu"
            sx={{
              mr: 2,
              display: { xs: "flex", md: "none" },
              flexGrow: 1,
              fontWeight: 700,
              letterSpacing: ".3rem",
              color: "inherit",
              textDecoration: "none",
            }}>
            Drink Water
          </Typography>
          <Box
            sx={{
              flexGrow: 1,
              display: {
                xs: "none",
                md: "flex",
              },
            }}>
            {renderedHeaderLinkPages(dataPages)}
          </Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Open settings">
              <IconButton onClick={handleOpenUserMenu} sx={{ p: 0 }}>
                <Avatar alt="Remy Sharp" src="/static/images/avatar/2.jpg" />
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
              onClose={handleCloseUserMenu}>
              {renderedSettings(dataSettings)}
            </Menu>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
