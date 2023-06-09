import { Box, Typography } from '@mui/material'
import React from 'react'
import logo from '../../assets/logo.png'
import Avatar from '@mui/material/Avatar';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import ListItemIcon from '@mui/material/ListItemIcon';
import IconButton from '@mui/material/IconButton';
import Tooltip from '@mui/material/Tooltip';
import { FiLogOut, FiUser } from 'react-icons/fi'
import { experimentalStyled as styled } from '@mui/material/styles';
import Paper from '@mui/material/Paper';
import Grid from '@mui/material/Grid';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import { DATA } from '../../vaqtinca'


export const StudentPage = ({ handleLogout }) => {
  const [anchorEl, setAnchorEl] = React.useState(null);

  const open = Boolean(anchorEl);

  const handleClick = (event) => {
    setAnchorEl(event.currentTarget);
  };

  const handleClose = () => {
    setAnchorEl(null);
  };

  const Item = styled(Paper)(() => ({
    backgroundColor: "#fff",
    padding: "30px 20px",
    boxShadow: "none",
    border: "1px solid #eee"
  }));

  return (
    <>
      <Box
        sx={{
          width: "100%",
          height: "80px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          padding: "0 20px",
          maxWidth: "1280px",
          margin: "0 auto"
        }}
      >
        <img src={logo} alt="logo" height={60} />
        <Box sx={{
          display: "flex",
          alignItem: "center",
        }}>
          <React.Fragment>
            <Box sx={{ display: 'flex', alignItems: 'center', borderRadius: 2, textAlign: 'center' }}>
              <Tooltip title="Account settings">
                <IconButton
                  onClick={handleClick}
                  size="small"
                  sx={{ ml: 2, borderRadius: 2 }}
                  aria-controls={open ? 'account-menu' : undefined}
                  aria-haspopup="true"
                  aria-expanded={open ? 'true' : undefined}
                >
                  <Avatar sx={{ color: "#000", width: 225, height: 38, borderRadius: 2, display: "flex", alignItems: "center", gap: "2px", justifyContent: "center", bgcolor: "#ECF8F977" }}>
                    <FiUser />
                    <Typography sx={{ marginLeft: "5px" }}>
                      Nurillo Tojiakhmedov
                    </Typography>
                  </Avatar>
                </IconButton>
              </Tooltip>
            </Box>
            <Menu
              anchorEl={anchorEl}
              id="account-menu"
              open={open}
              onClose={handleClose}
              onClick={handleClose}
              PaperProps={{
                elevation: 0,
                sx: {
                  overflow: 'visible',
                  filter: 'drop-shadow(0px 2px 8px rgba(0,0,0,0.32))',
                  mt: 1.5,
                  '& .MuiAvatar-root': {
                    width: 32,
                    height: 32,
                    ml: -0.5,
                    mr: 1,
                  },
                  '&:before': {
                    content: '""',
                    display: 'block',
                    position: 'absolute',
                    top: 0,
                    right: 14,
                    width: 10,
                    height: 10,
                    bgcolor: '#fff',
                    transform: 'translateY(-50%) rotate(45deg)',
                    zIndex: 0,
                  },
                },
              }}
              transformOrigin={{ horizontal: 'right', vertical: 'top' }}
              anchorOrigin={{ horizontal: 'right', vertical: 'bottom' }}
            >
              <MenuItem onClick={handleClose}>
                <Avatar /> Profile
              </MenuItem>
              <MenuItem onClick={handleClose}>
                <ListItemIcon>
                  <FiLogOut fontSize="small" />
                </ListItemIcon>
                Logout
              </MenuItem>
            </Menu>
          </React.Fragment>

        </Box>
      </Box>
      <Box sx={{ margin: "0 auto", maxWidth: "1280px", padding: "20px" }}>
        <Box mb={2} sx={{ bgcolor: "#ECF8F977", padding: "20px 40px", borderRadius: 3, display: "flex", alignItems: "center", justifyContent: "space-between" }}>
          <Box>
            <Typography fontWeight={600} fontSize={20} mb={1.5}>Nurillo Tojiakhmedov</Typography>
            <Typography fontSize={15} mb={0.5}>Teacher: Boburmiro Rosulov</Typography>
            <Typography fontSize={15}>Subject: Web Dasturlash</Typography>
            <Typography fontSize={15} mt={0.5}>Level: Back-End</Typography>
          </Box>
          <Box sx={{ display: "flex", gap: "20px" }}>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: 2, bgcolor: "#fff", padding: "15px 10px" }}>
              <Typography fontWeight={400} fontSize={14}>Weekly</Typography>
              <Typography fos fontWeight={500} fontSize={32}>18</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: 2, bgcolor: "#fff", padding: "15px 10px" }}>
              <Typography fontWeight={400} fontSize={14}>Monthly</Typography>
              <Typography fos fontWeight={500} fontSize={32}>43</Typography>
            </Box>
            <Box sx={{ display: "flex", flexDirection: "column", alignItems: "center", borderRadius: 2, bgcolor: "#fff", padding: "15px 10px" }}>
              <Typography fontWeight={400} fontSize={14}>Levelly</Typography>
              <Typography fos fontWeight={500} fontSize={32}>57</Typography>
            </Box>
          </Box>
        </Box>
        <Box mb={2} sx={{ bgcolor: "#ECF8F977", padding: "15px 30px", borderRadius: 3 }}>
          <Typography>Pagination</Typography>
        </Box>
        <Box sx={{ flexGrow: 1 }}>
          <Grid container spacing={{ xs: 2, md: 3 }} columns={{ xs: 2, sm: 2, md: 8 }}>
            {DATA.map((e, inx) => (
              <Grid item xs={2} sm={4} md={4} key={inx}>
                <Item>
                  <Typography sx={{ paddingLeft: "15px" }}>{e.day}</Typography>
                  {
                    e.lesson
                      ?
                      <Typography>Lesson is not available</Typography>
                      :
                      <Table sx={{ maxWidth: 650 }} aria-label="simple table">
                        <TableHead>
                          <TableRow>
                            <TableCell>Reason</TableCell>
                            <TableCell align="center">Grade</TableCell>
                            <TableCell align="left">Comment</TableCell>
                          </TableRow>
                        </TableHead>
                        <TableBody>
                          {
                            (e.grades).map((i, inx) => (
                              <TableRow
                                key={inx}
                                sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                              >
                                <TableCell component="th" scope="row">
                                  {i.reason}
                                </TableCell>
                                <TableCell align="center">{i.grade}</TableCell>
                                <TableCell align="left">{i.comment}</TableCell>
                              </TableRow>)
                            )
                          }
                        </TableBody>
                      </Table>
                  }
                </Item>
              </Grid>
            ))}
          </Grid>
        </Box>
      </Box>
    </>
  )
}