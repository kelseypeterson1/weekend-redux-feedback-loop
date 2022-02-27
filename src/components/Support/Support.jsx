import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonBack from '../ButtonBack/ButtonBack';

function Support() {
    
    // assigning functions to easy-to-understand variables
    const dispatch = useDispatch();
    const history = useHistory();
    const prevNav = '/Understanding'

    // react useState for support
    const [support, setSupport] = useState('');

    // Next button triggers a dispatch of the input data to the redux store
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_SUPPORT",
            payload: support
        })

        // if feedback is entered by the user
        if (support !== '') {
            // routes to the comments form/component
            history.push('/comments');
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

                        <h2>How well are you being supported?</h2>

                        <TextField
                            id="support"
                            label="Support?"
                            variant="standard"
                            type='number'
                            value={support}
                            onChange={(event) => setSupport(event.target.value)}
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

export default Support;