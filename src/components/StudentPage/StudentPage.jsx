import React from 'react'
import Box from '@mui/material/Box';
import Grid from '@mui/material/Unstable_Grid2';
import { Paper } from '@mui/material';
import { styled } from '@mui/material/styles';
import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import { BsChevronDown } from 'react-icons/bs'
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Button from '@mui/material/Button';


const Item = styled(Paper)(() => ({
  backgroundColor: "#fff",
  padding: "10px 10px"
}))


function createData(full_name, ball) {
  return { full_name, ball };
}

const rows = [
  createData('Laylo', 59),
  createData('Oqila', 37),
  createData('Nurillo', 62),
  createData('Jamila', 35),
  createData('Fozil', 56),
];

export const StudentPage = () => {
  return (
    <Box sx={{ flexGrow: 1, padding: 2 }}>
      <Grid container spacing={{ xs: 2, md: 4 }} columns={{ xs: 4, sm: 8, md: 12 }}>
        {Array.from(Array(6)).map((_, index) => (
          <Grid
            item
            xs={12}
            sm={4}
            md={4}
            key={index}>
            <Item>
              <Accordion
                sx={{
                  backgroundColor: "#fff",
                  boxShadow: "none"
                }}>
                <AccordionSummary
                  expandIcon={<BsChevronDown />}
                  aria-controls="panel1a-content"
                  id="panel1a-header"
                >
                  <Typography>Group {index + 1}</Typography>
                </AccordionSummary>
                <AccordionDetails>
                  <Table
                    sx={{ minWidth: "full" }}
                    aria-label="simple table">
                    <TableHead>
                      <TableRow>
                        <TableCell>Name</TableCell>
                        <TableCell align="center">Ball</TableCell>
                        <TableCell align="right">Actions</TableCell>
                      </TableRow>
                    </TableHead>
                    <TableBody>
                      {rows.map((row) => (
                        <TableRow
                          key={row.name}
                          sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
                        >
                          <TableCell
                            component="th"
                            scope="row">
                            {row.full_name}
                          </TableCell>
                          <TableCell align="center">
                            {row.ball}
                          </TableCell>
                          <TableCell align="right">
                            <Button variant="contained" sx={{
                              color: '#fff',
                              backgroundColor: "#f00",
                              "&:hover": {
                                backgroundColor: '#f009'
                              }
                            }}>Kick</Button>
                          </TableCell>
                        </TableRow>
                      ))}
                    </TableBody>
                  </Table>
                </AccordionDetails>
              </Accordion>

            </Item>
          </Grid>
        ))}
      </Grid>
    </Box >
  )
}