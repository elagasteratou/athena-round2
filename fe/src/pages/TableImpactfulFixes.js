import React, { useEffect, useState } from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(change, efficiencyRating) {
  return { change, efficiencyRating };
}

const StyledTableCell = styled(TableCell)(({ theme }) => ({
  [`&.${tableCellClasses.head}`]: {
    backgroundColor: '#D9D9D9',
    fontWeight: 'bold',
  },
}));

export default function TableImpactfulFixes({ data }) {
  const [rows, setRows] = useState([createData('', ''), createData('', '')]);

  useEffect(() => {
    if (data) {

      setRows([
        createData(
          'Better lighting installation',
          data?.lightingCostPotential < data?.lightingCostCurrent
            ? 'Very poor'
            : 'Good'
        ),
        createData(
          'Better window installation',
          data?.windoeEnvEff < 2 ? 'Very poor' : 'Good'
        ),
      ]);
    }
  }, [data]);

  return (
    <TableContainer component={Paper} sx={{ width: 350 }}>
      <Table sx={{ width: 350 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <StyledTableCell>Change</StyledTableCell>
            <StyledTableCell align="right">Efficency Rating</StyledTableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell align="right">{row.change}</TableCell>
              <TableCell align="right">{row.efficiencyRating}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
