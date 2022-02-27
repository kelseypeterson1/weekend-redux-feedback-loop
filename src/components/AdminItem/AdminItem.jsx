import * as React from 'react';
import { styled } from '@mui/material/styles';
import Button from '@mui/material/Button';
import TableCell, { tableCellClasses } from '@mui/material/TableCell';
import TableRow from '@mui/material/TableRow';
import axios from 'axios';
import DeleteIcon from '@mui/icons-material/Delete';
import { useState } from 'react';
import FlagIcon from '@mui/icons-material/Flag';

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

    // Creates use state for flag
    const [feedbackSelected, setFeedbackSelected] = useState(false);

    const checkFlag = () => {
        console.log('in checkFlag function')
        if (feedbackSelected === false) {
            return <Button
                type="click"
                style={{ color: '#364652' }}
                endIcon={<FlagIcon />}
            >
            </Button>
        } else {
            return <Button
                type="submit"
                style={{ color: 'red' }}
                endIcon={<FlagIcon />}
            >
            </Button>
        }
    }

    // flags feedback row for further review
    const handleFlag = () => {
        console.log('flagged for review', row.id)
        // toggles the feedback state
        setFeedbackSelected(!feedbackSelected);
    }

    // delete button calls this function
    const handleDelete = () => {
        console.log('deleting', row.id)
        deleteFeedback(row.id)
    }

    // deletes feedback from the database
    const deleteFeedback = (id) => {
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
        <StyledTableRow key={row.id} onSubmit={handleDelete} onClick={handleFlag}>
            <StyledTableCell component="th" scope="row">
                {row.feeling}
            </StyledTableCell>
            <StyledTableCell align="right">{row.understanding}</StyledTableCell>
            <StyledTableCell align="right">{row.support}</StyledTableCell>
            <StyledTableCell align="right">{row.comments}</StyledTableCell>
            <StyledTableCell align="right">{checkFlag()}</StyledTableCell>
            <StyledTableCell align="right">
                <Button
                    type="submit"
                    style={{ color: '#364652' }}
                    endIcon={<DeleteIcon />}
                >
                </Button>
            </StyledTableCell>
        </StyledTableRow>
    )
}