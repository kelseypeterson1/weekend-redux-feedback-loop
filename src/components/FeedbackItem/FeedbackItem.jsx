import * as React from 'react';
import { styled } from '@mui/material/styles';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

export default function FeedbackItem({row}) {
    return (
        <>
            <StyledTableRow key={row.id}>
                <StyledTableCell component="th" scope="row">
                    {row.feeling}
                </StyledTableCell>
                <StyledTableCell align="right">{row.understanding}</StyledTableCell>
                <StyledTableCell align="right">{row.support}</StyledTableCell>
                <StyledTableCell align="right">{row.comments}</StyledTableCell>
                <StyledTableCell align="right">delete icon</StyledTableCell>
            </StyledTableRow>
        </>
    )
}