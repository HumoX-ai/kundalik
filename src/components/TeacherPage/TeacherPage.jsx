import * as React from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import logo from '../../assets/logo.png'
import { GROUPS } from '../../vaqtinca'
import { Button, Typography } from '@mui/material';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import TextField from '@mui/material/TextField';
import { BsChevronCompactLeft, BsChevronCompactRight } from 'react-icons/bs'

export const TeacherPage = () => {
  const [value, setValue] = React.useState('1');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  return (
    <Box sx={{ width: '100%', typography: 'body1', bgcolor: '#eee8' }}>
      <TabContext value={value}>
        <Box sx={{ display: "flex" }} width="100%">
          <Box sx={{ borderBottom: 1, position: 'fixed', left: 0, bottom: 0, overflow: "visiblity", borderRadius: '0 30px 30px 0', borderColor: 'divider', bgcolor: "white" }} width="250px" height='100vh'>
            <Box width='100%' sx={{ display: 'flex', justifyContent: 'center', mb: 5, alignItems: 'center' }} height={80}>
              <img src={logo} width='50%' alt="" />
            </Box>
            <TabList orientation="vertical" onChange={handleChange} aria-label="sidebar">
              {
                GROUPS?.map((e, inx) => (
                  <Tab label={e.name} key={inx} value={e.name} sx={{ transition: .3, "&.Mui-selected": { bgcolor: "#0080ff57", }, borderRadius: 4, width: "240px", m: "auto" }} />
                ))
              }
            </TabList>
          </Box>
          <Box sx={{ flex: 1 }} ml='250px' pt={2} pb={2}>
            <Box maxWidth={1030} m='0 auto'>
              <Box display='flex' width='100%' alignItems='center' justifyContent='space-between'>
                <Box height='65px' borderRadius={3} backgroundColor='#fff' mb={2} p={2} display='flex' justifyContent='space-between' alignItems='center' width={500} minWidth={200}>
                  <Button sx={{ border: '1px solid #ddd', '&:hover': { bgcolor: "#fff" }, boxShadow: 'none', height: '35px' }} variant="contained"><BsChevronCompactLeft /></Button>
                  ...
                  <Typography>05.05.2025</Typography>
                  ...
                  <Button sx={{ border: '1px solid #ddd', '&:hover': { bgcolor: "#fff" }, boxShadow: 'none', height: '35px' }} variant="contained"><BsChevronCompactRight /></Button>
                </Box>
                <Box height='65px' display='flex' alignItems='center' justifyContent='space-between' borderRadius={3} backgroundColor='#fff' mb={2} p={2} width={500} minWidth={200}>
                  <Typography>Nurillo Tojiakhmedov</Typography>
                  <Typography>English</Typography>
                </Box>
              </Box>
              {
                GROUPS?.map((e, inx) => (
                  <TabPanel key={inx} sx={{ backgroundColor: "#fff" }} value={e.name}>
                    <Typography mb={2}>All students of {e.name}</Typography>
                    <Table aria-label="simple table" mb={2}>
                      <TableHead>
                        <TableRow>
                          <TableCell>Name</TableCell>
                          <TableCell align="right">Homework</TableCell>
                          <TableCell align="right">Lesson</TableCell>
                          <TableCell align="right">Extra</TableCell>
                        </TableRow>
                      </TableHead>
                      <TableBody>
                        {e?.pupils?.map((row) => (
                          <TableRow
                            key={row.name}
                            sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                          >
                            <TableCell component="th" scope="row">
                              {row.name}
                            </TableCell>
                            <TableCell align="right">
                              <TextField
                                required
                                id="outlined-required"
                                defaultValue={row.grades.hw}
                                autoComplete="off"
                                sx={{
                                  border: "none",
                                  outline: 'none',
                                  width: '47px',
                                  height: '50',
                                  padding: '0',
                                  outlineColor: '#fff'
                                }}
                              />
                            </TableCell>
                            <TableCell align="right">
                              <TextField
                                required
                                id="outlined-required"
                                defaultValue={row.grades.lesson}
                                autoComplete="off"
                                sx={{
                                  border: "none",
                                  outline: 'none',
                                  width: '50px',
                                  height: '47px',
                                  padding: '0',
                                  outlineColor: '#fff'
                                }}
                              />
                            </TableCell>
                            <TableCell align="right">
                              <TextField
                                required
                                id="outlined-required"
                                defaultValue={row.grades.extra}
                                autoComplete="off"
                                sx={{
                                  border: "none",
                                  outline: 'none',
                                  width: '50px',
                                  height: '47px',
                                  padding: '0',
                                  outlineColor: '#fff'
                                }}
                              />
                            </TableCell>
                          </TableRow>
                        ))}
                      </TableBody>
                    </Table>
                    <Button sx={{ width: "100%", height: "45px", mt: 2, boxShadow: 'none', bgcolor: '#0080ff75', color: '#fff' }} variant='contained'>DEPLOY GRADES OF THIS LESSON</Button>
                  </TabPanel>
                ))
              }
            </Box>
          </Box>
        </Box>
      </TabContext >
    </Box >
  );
}