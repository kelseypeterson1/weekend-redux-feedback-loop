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
import FeedbackItem from '../FeedbackItem/FeedbackItem'
import { useDispatch } from 'react-redux';
import { useSelector } from 'react-redux';

export default function Admin() {

    const dispatch = useDispatch();
    const feedbackFromReducer = useSelector(store => store.feedbackReducer);

    // react useState for feedback from the database to be stored in
    const [feedback, setFeedback] = useState('');

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

    // getting feedback from the database
    function fetchFeedback() {
        axios({
            method: 'GET',
            url: '/feedback'
        }).then(response => {
            console.log('response.data is', response.data)
            
            // dispatch to the feedbackReducer
            dispatch({ type: 'ADD_FEEDBACK', payload: response.data })
            setFeedback(response.data);
        }).catch(error => {
            console.log('error on GET', error);
        });
    }

    // upon page load, feedback from the database will be fetched
    useEffect(() => {
        console.log('in useEffect');
        fetchFeedback();

    }, []);

    return (
        <TableContainer component={Paper}>
            <Table sx={{ minWidth: 700 }} aria-label="customized table">
                <TableHead>
                    <TableRow>
                        <StyledTableCell>Feeling</StyledTableCell>
                        <StyledTableCell align="right">Understanding</StyledTableCell>
                        <StyledTableCell align="right">Support</StyledTableCell>
                        <StyledTableCell align="right">Comments</StyledTableCell>
                        {/* <StyledTableCell align="right">Delete</StyledTableCell> */}
                    </TableRow>
                </TableHead>
                <TableBody>
                    {feedback.map((row) => (
                        <FeedbackItem key ={row.id} row={row}/>
                    ))}
                </TableBody>
            </Table>
        </TableContainer>
    );
}