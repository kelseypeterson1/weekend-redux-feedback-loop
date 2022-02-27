import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';

import { Theme, createStyles, makeStyles } from "@material-ui/core/styles";

function Feeling() {

    // assigning functions to easy-to-understand variables
    const dispatch = useDispatch();
    const history = useHistory();

    // react useState for feeling
    let [feeling, setFeeling] = useState('');

    // Next button triggers a dispatch of the input data to the redux store
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })

        // routes to the understanding form/component
        history.push('/understanding');
    };

    
    const useStyles = makeStyles((theme: Theme) =>
    createStyles({
        root: {
            display: "flex",
            flexWrap: "wrap",
            "& > *": {
                margin: theme.spacing(3),
            },

        },
    })
    );
    
    
    const classes = useStyles();
    return (
        <form onSubmit={handleSubmit} className={classes.root}>

            <Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <h2>How are you feeling today?</h2>

                    <TextField
                        id="feeling"
                        label="Feeling?"
                        variant="standard"
                        type='number'
                        value={feeling}
                        onChange={(event) => setFeeling(event.target.value)}
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
    )
}

export default Feeling;