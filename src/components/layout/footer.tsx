"use client";

import BusinessIcon from "@mui/icons-material/Business";
import FacebookIcon from "@mui/icons-material/Facebook";
import InstagramIcon from "@mui/icons-material/Instagram";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import TwitterIcon from "@mui/icons-material/Twitter";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import Container from "@mui/material/Container";
import IconButton from "@mui/material/IconButton";
import Toolbar from "@mui/material/Toolbar";
import Typography from "@mui/material/Typography";

export function Footer() {
  return (
    <AppBar
      position="static"
      color="primary"
      component="footer"
      sx={{
        top: "auto",
        bottom: 0,
        backgroundColor: "background.paper",
        color: "text.primary",
        borderTop: "1px solid",
        borderColor: "divider",
        boxShadow: "none",
        paddingY: 2,
      }}>
      <Container maxWidth="xl">
        <Toolbar
          disableGutters
          sx={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
          }}>
          <Box sx={{ display: "flex", alignItems: "center", gap: 1 }}>
            <BusinessIcon
              fontSize="large"
              sx={{
                display: { xs: "none", sm: "block" },
              }}
            />
            <Typography variant="body2" component="p">
              © 2024 Drink Water. All rights reserved.
            </Typography>
          </Box>

          {/* Direita: Ícones de redes sociais */}
          <Box sx={{ display: "flex", gap: 1 }}>
            <IconButton
              aria-label="Instagram"
              href="https://www.instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <InstagramIcon />
            </IconButton>
            <IconButton
              aria-label="Twitter"
              href="https://www.twitter.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <TwitterIcon />
            </IconButton>
            <IconButton
              aria-label="LinkedIn"
              href="https://www.linkedin.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <LinkedInIcon />
            </IconButton>
            <IconButton
              aria-label="Facebook"
              href="https://www.facebook.com"
              target="_blank"
              rel="noopener noreferrer"
              color="inherit">
              <FacebookIcon />
            </IconButton>
          </Box>
        </Toolbar>
      </Container>
    </AppBar>
  );
}
