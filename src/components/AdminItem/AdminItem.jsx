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
import Button from '@mui/material/Button';

export default function AdminItem({ row, fetchFeedback }) {

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


    const handleDelete = () => {
        console.log('deleting', row.id)
        deleteImage(row.id)
    }

    const deleteImage = (id) => {
        console.log('Delete request made it back to app.jsx. Deleting:', id)
        axios({
            method: 'DELETE',
            url: `/feedback/${id}`
        })
            .then((response) => {
                console.log('DELETE response.data is', response.data)
                fetchFeedback();
            }).catch((err) => {
                console.log('DELETE error is', err)
            })
    }
    

    return (
        <StyledTableRow key={row.id} onClick={handleDelete}>
            <StyledTableCell component="th" scope="row">
                {row.feeling}
            </StyledTableCell>
            <StyledTableCell align="right">{row.understanding}</StyledTableCell>
            <StyledTableCell align="right">{row.support}</StyledTableCell>
            <StyledTableCell align="right">{row.comments}</StyledTableCell>
            <StyledTableCell align="right">
                <Button
                    type="click"
                    endIcon={<DeleteIcon />}
                >
                </Button>
            </StyledTableCell>
        </StyledTableRow>
    )
}