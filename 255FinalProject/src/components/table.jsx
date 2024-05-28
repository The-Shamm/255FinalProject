import React from 'react';
import TableContainer from '@mui/material/TableContainer';
import Table from '@mui/material/Table';
import TableHead from '@mui/material/TableHead';
import TableBody from '@mui/material/TableBody';
import TableRow from '@mui/material/TableRow';
import TableCell from '@mui/material/TableCell';
import Paper from '@mui/material/Paper';
import '../styles/Styles-table-01.css';
export default function ServiceTeamTable({ data }) {
  return (
    <TableContainer component={Paper} className="TableContainer">
    

      <Table>
        <TableHead>
          <TableRow>
            <TableCell>Service Team Name</TableCell>
            <TableCell>Service Team Project</TableCell>
            <TableCell>Service Team Description</TableCell>
            <TableCell>Service Team Alarms</TableCell>
            <TableCell>Service Team Dependencies</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {data.map((row, index) => (
            <TableRow key={index}>
              <TableCell>{row.serviceteamName}</TableCell>
              <TableCell>{row.serviceteamProject}</TableCell>
              <TableCell>{row.serviceteamDescription}</TableCell>
              <TableCell>{row.serviceTeamAlarms}</TableCell>
              <TableCell>{row.serviceteamDependencies}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}
