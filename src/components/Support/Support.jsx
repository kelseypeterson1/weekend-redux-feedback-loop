import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonForward from '../ButtonForward/ButtonForward';

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

                        <h2>How well are you being supported?</h2>

                        <TextField
                            required
                            id="support"
                            label="Support?"
                            variant="standard"
                            type='number'
                            value={support}
                            onChange={(event) => setSupport(event.target.value)}
                        />

                        <ButtonForward />

                    </CardContent>
                </Card>
            </form>

            <ButtonBack prevNav={prevNav} />
        </>
    )
}

export default Support;