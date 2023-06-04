import * as React from "react";
import PropTypes from "prop-types";
import AppBar from "@mui/material/AppBar";
import Box from "@mui/material/Box";
import CssBaseline from "@mui/material/CssBaseline";
import Divider from "@mui/material/Divider";
import Drawer from "@mui/material/Drawer";
import IconButton from "@mui/material/IconButton";
import List from "@mui/material/List";
import ListItem from "@mui/material/ListItem";
import ListItemButton from "@mui/material/ListItemButton";
import ListItemText from "@mui/material/ListItemText";
import { FaBars } from "react-icons/fa";
import { FiLogIn } from "react-icons/fi";
import Toolbar from "@mui/material/Toolbar";
import logo from "../../assets/logo.png";
import Button from "@mui/material/Button";
import { Link } from "react-router-dom";
import Swipers from "../HomeSwiper/Swiper";
import Grid from "@mui/material/Grid";
import Typography from "@mui/material/Typography";
import { BsInstagram, BsTelegram, BsFacebook } from "react-icons/bs";

const drawerWidth = 240;
const navItems = [
  { title: "Tashkilot" },
  { title: "Imkoniyatlar" },
  { title: "Hamkorlarga" },
  { title: "Yordam" },
];

export const Home = (props) => {
  const { window } = props;
  const [mobileOpen, setMobileOpen] = React.useState(false);

  const handleDrawerToggle = () => {
    setMobileOpen((prevState) => !prevState);
  };

  const drawer = (
    <Box onClick={handleDrawerToggle} sx={{ textAlign: "center" }}>
      <Box sx={{ py: 2 }}>
        <img style={{ width: "82px" }} src={logo} alt="" />
      </Box>
      <Divider />
      <List>
        {navItems.map((item, index) => (
          <ListItem key={index} disablePadding>
            <ListItemButton sx={{ pl: 3 }}>
              <ListItemText primary={item.title} />
            </ListItemButton>
          </ListItem>
        ))}
        <Link to="/login">
          <Button
            sx={{ mt: 2 }}
            fullWidth
            variant="contained"
            color="success"
            startIcon={<FiLogIn />}
          >
            Kirish
          </Button>
        </Link>
      </List>
    </Box>
  );

  const container =
    window !== undefined ? () => window().document.body : undefined;
  return (
    <Box>
      <Box sx={{ display: "flex" }}>
        <Box
          sx={{
            background: "#88D5EC",
            width: "50%",
            height: 8,
          }}
        ></Box>
        <Box
          sx={{
            background: "#D9C973",
            width: "50%",
            height: 8,
          }}
        ></Box>
        <Box
          sx={{
            background: "#FED939",
            width: "50%",
            height: 8,
          }}
        ></Box>
        <Box
          sx={{
            background: "#F8B768",
            width: "50%",
            height: 8,
          }}
        ></Box>
        <Box
          sx={{
            background: "#B976AF",
            width: "50%",
            height: 8,
          }}
        ></Box>
      </Box>
      <Box sx={{ display: "flex" }}>
        <CssBaseline />
        <AppBar
          component="nav"
          elevation={0}
          sx={{ background: "#eeeeee", top: 8, position: "absolute" }}
        >
          <Toolbar>
            <Box
              sx={{
                flexGrow: 1,
                display: { xs: "block", sm: "block" },
                textAlign: { xs: "left", sm: "left" },
              }}
            >
              <Box
                sx={{
                  my: 2.5,
                  width: { xs: "90px", sm: "100px", md: "120px", lg: "140px" },
                }}
              >
                <img style={{ width: "100%" }} src={logo} alt="" />
              </Box>
            </Box>
            <Link to="/">
              <IconButton
                color="inherit"
                aria-label="open drawer"
                edge="start"
                onClick={handleDrawerToggle}
                sx={{
                  display: { md: "none" },
                  color: "#000",

                  textAlign: { xs: "right" },
                }}
              >
                <FaBars />
              </IconButton>
            </Link>
            <Box sx={{ display: { xs: "none", md: "flex" } }}>
              {navItems.map((item, index) => (
                <Box
                  key={item.title}
                  sx={{ display: "flex", alignItems: "center" }}
                >
                  <Button
                    sx={{
                      color: "#6d6d6d",

                      mx: 1.5,
                      "&:hover": {
                        textDecoration: "underline",
                        color: "#000",
                      },
                    }}
                  >
                    {item.title}
                  </Button>
                  {index !== navItems.length - 1 && (
                    <Divider
                      orientation="vertical"
                      sx={{ background: "rgb(200, 200, 200)", height: "20px" }}
                    />
                  )}
                </Box>
              ))}
              <Link to="/login">
                <Button
                  sx={{ ml: 2 }}
                  color="success"
                  variant="outlined"
                  startIcon={<FiLogIn />}
                >
                  Kirish
                </Button>
              </Link>
            </Box>
          </Toolbar>
        </AppBar>
        <Box component="nav">
          <Drawer
            container={container}
            variant="temporary"
            open={mobileOpen}
            onClose={handleDrawerToggle}
            ModalProps={{
              keepMounted: true, // Better open performance on mobile.
            }}
            sx={{
              display: { xs: "block", sm: "none" },
              "& .MuiDrawer-paper": {
                boxSizing: "border-box",
                width: drawerWidth,
              },
            }}
          >
            {drawer}
          </Drawer>
        </Box>
        <Box component="main" sx={{ p: 3 }}>
          <Toolbar />
        </Box>
      </Box>
      {/* Main */}

      <Box sx={{ mt: -3 }}>
        <Swipers />
      </Box>

      {/* Footer */}
      <Box sx={{ background: "#231F20", mt: 5 }}>
        <Grid
          sx={{ padding: 5 }}
          spacing={4}
          container
          direction="row"
          justifyContent="center"
          alignItems="stretch"
        >
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ color: "#fff", textAlign: "center" }}>
              <Typography variant="h6">Tashkilot haqida</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Biz haqimizda
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Yangiliklar
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Aloqa uchun ma`lumotlar
              </Typography>
              <Box
                sx={{
                  display: "flex",
                  gap: 2,
                  justifyContent: "center",
                }}
              >
                <BsInstagram />
                <BsTelegram />
                <BsFacebook />
              </Box>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ color: "#fff", textAlign: "center" }}>
              <Typography variant="h6">Imkoniyatlar</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                O`qituvchilarga
              </Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                O`quvchilarga
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box sx={{ color: "#fff", textAlign: "center" }}>
              <Typography variant="h6">Hamkorlarga</Typography>
              <Typography
                variant="subtitle1"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Hamkorlik dasturlari
              </Typography>
            </Box>
          </Grid>
          <Grid item xs={12} sm={6} md={4} lg={3}>
            <Box
              sx={{
                color: "#fff",
                textAlign: "center",
                display: "flex",
                flexDirection: "column",
              }}
            >
              <Typography variant="h6">Qo`llab-quvvatlash</Typography>
              <Typography
                variant="subtitle1"
                color="green"
                sx={{
                  "&:hover": {
                    textDecoration: "underline",
                  },
                }}
              >
                Qo`llab-quvvatlash xizmati portal
              </Typography>
              <Button sx={{ mt: 4 }} variant="outlined" color="success">
                Tashkilotni ulash
              </Button>
            </Box>
          </Grid>
        </Grid>
        <Box sx={{ background: "rgb(20, 20, 20)", padding: 2 }}>
          <Typography sx={{ textAlign: "center", color: "white" }}>
            ©MarsTech Team 2023
          </Typography>
        </Box>
      </Box>
    </Box>
  );
};
Home.propTypes = {
  /**
   * Injected by the documentation to work in an iframe.
   * You won't need it on your project.
   */
  window: PropTypes.func,
};
