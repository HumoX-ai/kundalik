/* eslint-disable react/no-unescaped-entities */
/* eslint-disable no-unused-vars */
import { Box, Container, Typography } from "@mui/material";
import React from "react";
import logo from "../../assets/logo.png";
import Avatar from "@mui/material/Avatar";
import Menu from "@mui/material/Menu";
import MenuItem from "@mui/material/MenuItem";
import IconButton from "@mui/material/IconButton";
import Tooltip from "@mui/material/Tooltip";
import { experimentalStyled as styled } from "@mui/material/styles";
import Paper from "@mui/material/Paper";
import Grid from "@mui/material/Grid";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Link, useLocation } from "react-router-dom";
import { StudentData } from "../../vaqtincha";

// eslint-disable-next-line react/prop-types
export const StudentPage = ({ handleLogout }) => {
  const location = useLocation();
  const { name, surname } = location.state;
  const [anchorElUser, setAnchorElUser] = React.useState(null);

  const handleOpenUserMenu = (event) => {
    setAnchorElUser(event.currentTarget);
  };

  const handleCloseUserMenu = () => {
    setAnchorElUser(null);
  };

  const Item = styled(Paper)(() => ({
    backgroundColor: "#fff",
    padding: "30px 20px",
    boxShadow: "none",
    border: "1px solid #eee",
  }));

  return (
    <>
      <Container
        sx={{
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
        }}
      >
        <Box
          sx={{
            my: 2.5,
            width: { xs: "90px", sm: "100px", md: "120px", lg: "140px" },
          }}
        >
          <Link to="/" onClick={handleLogout}>
            <img style={{ width: "100%" }} src={logo} alt="" />
          </Link>
        </Box>
        <Box>
          <Box sx={{ flexGrow: 0 }}>
            <Tooltip title="Foydalanuvchi sozlamalari">
              <IconButton
                onClick={handleOpenUserMenu}
                sx={{ p: 0, display: "flex", gap: 2 }}
              >
                <Avatar
                  alt="Remy Sharp"
                  sx={{ display: { xs: "none", sm: "block" } }}
                />
                <Typography>
                  {name} {surname}
                </Typography>
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
              <Link to="/">
                <MenuItem onClick={handleLogout}>
                  <Typography textAlign="center" sx={{ color: "#000" }}>
                    Chiqish
                  </Typography>
                </MenuItem>
              </Link>
            </Menu>
          </Box>
        </Box>
      </Container>
      <Container>
        <Box
          mb={2}
          sx={{
            bgcolor: "#ECF8F977",
            padding: "20px 40px",
            borderRadius: 3,
            display: { xs: "block", sm: "flex" },
            alignItems: "center",
            justifyContent: "space-between",
            textAlign: "center",
          }}
        >
          <Box>
            <Typography fontWeight={600} fontSize={20} mb={1.5}>
              {name} {surname}
            </Typography>
            <Typography fontSize={15} mb={0.5}>
              O'qituvchi: Boburmiro Rosulov
            </Typography>
            <Typography fontSize={15}>Mavzu: Web Dasturlash</Typography>
            <Typography fontSize={15} mt={0.5}>
              Daraja: Back-End
            </Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "20px", justifyContent: "center" }}>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 2,
                bgcolor: "#fff",
                padding: "15px 10px",
              }}
            >
              <Typography fontWeight={400} fontSize={14}>
                Weekly
              </Typography>
              <Typography fos fontWeight={500} fontSize={32}>
                18
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 2,
                bgcolor: "#fff",
                padding: "15px 10px",
              }}
            >
              <Typography fontWeight={400} fontSize={14}>
                Monthly
              </Typography>
              <Typography fos fontWeight={500} fontSize={32}>
                43
              </Typography>
            </Box>
            <Box
              sx={{
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
                borderRadius: 2,
                bgcolor: "#fff",
                padding: "15px 10px",
              }}
            >
              <Typography fontWeight={400} fontSize={14}>
                Levelly
              </Typography>
              <Typography fos fontWeight={500} fontSize={32}>
                57
              </Typography>
            </Box>
          </Box>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid
            container
            spacing={{ xs: 2, md: 3 }}
            columns={{ xs: 2, sm: 2, md: 8 }}
          >
            {StudentData.map((e, inx) => (
              <Grid item xs={2} sm={4} md={4} key={inx}>
                <Item>
                  <Typography sx={{ paddingLeft: "15px", fontWeight: 800 }}>
                    {e.day}
                  </Typography>
                  {e.lesson ? (
                    <Typography>Dars mavjud emas</Typography>
                  ) : (
                    <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                      <TableHead>
                        <TableRow>
                          <TableCell>Sabab</TableCell>
                          <TableCell align="center">Baho</TableCell>
                          <TableCell align="left">Comment</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {e.grades.map((i, inx) => (
                          <TableRow
                            key={inx}
                            sx={{
                              "&:last-child td, &:last-child th": { border: 0 },
                            }}
                          >
                            <TableCell component="th" scope="row">
                              {i.reason}
                            </TableCell>
                            <TableCell align="center">
                              <Typography
                                sx={{
                                  bgcolor:
                                    i.grade >= 4
                                      ? "green"
                                      : i.grade >= 3
                                      ? "yellow"
                                      : i.grade >= 0
                                      ? "red"
                                      : "inherit",
                                  fontWeight: 800,
                                }}
                              >
                                {i.grade}
                              </Typography>
                            </TableCell>

                            <TableCell align="left">
                              {i.grade >= 4
                                ? "Juda zo'r"
                                : i.grade >= 3
                                ? "Yaxshi"
                                : i.grade >= 0
                                ? "harakat qiling"
                                : ""}
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                  )}
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Container>
    </>
  );
};
