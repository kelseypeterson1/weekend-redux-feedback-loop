import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';
import DeleteIcon from '@mui/icons-material/Delete';

export default function AdminItem({ row }) {

    // MUI styling for the table rows
    const StyledTableRow = styled(TableRow)(({ theme }) => ({
        '&:nth-of-type(odd)': {
            backgroundColor: theme.palette.action.hover,
        },
        // hide last border
        '&:last-child td, &:last-child th': {
            border: 0,
        },
    }));

    // MUI styling for the table cells
    const StyledTableCell = styled(TableCell)(({ theme }) => ({
        [`&.${tableCellClasses.head}`]: {
            backgroundColor: theme.palette.common.black,
            color: theme.palette.common.white,
        },
        [`&.${tableCellClasses.body}`]: {
            fontSize: 14,
        },
    }));

    return (
        <StyledTableRow key={row.id}>
            <StyledTableCell component="th" scope="row">
                {row.feeling}
            </StyledTableCell>
            <StyledTableCell align="right">{row.understanding}</StyledTableCell>
            <StyledTableCell align="right">{row.support}</StyledTableCell>
            <StyledTableCell align="right">{row.comments}</StyledTableCell>
            <StyledTableCell align="right"><DeleteIcon /></StyledTableCell>
        </StyledTableRow>
    )
}