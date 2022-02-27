import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonForward from '../ButtonForward/ButtonForward';

function Feeling() {

    // assigning functions to easy-to-understand variables
    const dispatch = useDispatch();
    const history = useHistory();

    // react useState for feeling
    const [feeling, setFeeling] = useState('');

    // Next button triggers a dispatch of the input data to the redux store
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_FEELING",
            payload: feeling
        })

        // if feedback is entered by the user
        if (feeling !== '') {
            // routes to the understanding form/component
            history.push('/understanding');
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
                <Card
                    sx={{ minWidth: 275 }}
                    style={{ background: '#c7dbe6' }}
                >
                    <CardContent>

                        <h2>How are you feeling today?</h2>

                        <TextField
                            // id="feeling"
                            label="Feeling?"
                            variant="standard"
                            type='number'
                            value={feeling}
                            onChange={(event) => setFeeling(event.target.value)}
                        />

                        <ButtonForward />

                    </CardContent>
                </Card>
            </form>

        </>
    )
}

export default Feeling;