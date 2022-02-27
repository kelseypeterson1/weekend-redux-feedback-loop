import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';
import Button from '@mui/material/Button';
import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import TextField from '@mui/material/TextField';
import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import { createStyles, makeStyles } from "@material-ui/core/styles";

function Comments() {

    // assigning functions to easy-to-understand variables
    const dispatch = useDispatch();
    const history = useHistory();

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
        <form onSubmit={handleSubmit} className={classes.root}>
            <Card sx={{ minWidth: 275 }}>
                <CardContent>

                    <h2>How are you comments today?</h2>

                    <TextField
                        id="comments"
                        label="Comments?"
                        variant="standard"
                        type='text'
                        multiline
                        maxRows={4}
                        value={comments}
                        onChange={(event) => setComments(event.target.value)}
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


export default Comments;