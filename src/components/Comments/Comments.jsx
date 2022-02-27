import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createStyles, makeStyles } from "@material-ui/core/styles";
import ButtonBack from '../ButtonBack/ButtonBack';
import ButtonForward from '../ButtonForward/ButtonForward';

function Comments() {

    // assigning functions to easy-to-understand variables
    const dispatch = useDispatch();
    const history = useHistory();
    const prevNav = '/support'

    // react useState for comments
    const [comments, setComments] = useState('');

    // Next button triggers a dispatch of the input data to the redux store
    const handleSubmit = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_COMMENTS",
            payload: comments
        })

        // routes to the review form/component
        history.push('/review');
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

                        <h2>Any comments you want to leave?</h2>

                        <TextField
                            id="comments"
                            label="Comments (optional)"
                            variant="standard"
                            type='text'
                            multiline
                            maxRows={4}
                            value={comments}
                            onChange={(event) => setComments(event.target.value)}
                        />

                        <ButtonForward />

                    </CardContent>
                </Card>
            </form>

            <ButtonBack prevNav={prevNav} />
        </>
    )
}


export default Comments;