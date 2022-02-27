import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonBack from '../ButtonBack/ButtonBack';

function Understanding() {

    // assigning functions to easy-to-understand variables
    const dispatch = useDispatch();
    const history = useHistory();
    const prevNav = '/'

    // react useState for understanding
    const [understanding, setUnderstanding] = useState('');

    // Next button triggers a dispatch of the input data to the redux store
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_UNDERSTANDING",
            payload: understanding
        })

        // if feedback is entered by the user
        if (understanding !== '') {
            // routes to the support form/component
            history.push('/support');
        } else {
            // else alert user
            alert('Please enter feedback')
        }
    };

    // created class creates a centered card on dom
    const useStyles = makeStyles(theme =>
        createStyles({
            root: {
                display: "flex",
                flexWrap: "wrap",
                "& > *": {
                    margin: 'auto',
                },

            },
        })
    );

    const classes = useStyles();
    return (
        <>
            <form onSubmit={handleSubmit} className={classes.root}>
                <Card sx={{ minWidth: 275 }}>
                    <CardContent>

                        <h2>How well are you understanding the content?</h2>

                        <TextField
                            id="understanding"
                            label="Understanding?"
                            variant="standard"
                            type='number'
                            value={understanding}
                            onChange={(event) => setUnderstanding(event.target.value)}
                        />

                        <Button
                            variant='text'
                            type='submit'
                            endIcon={<ArrowForwardIcon />}
                        >
                            Next
                        </Button>

                    </CardContent>
                </Card>
            </form>

            <ButtonBack prevNav={prevNav}/>
        </>
    )
}

export default Understanding;