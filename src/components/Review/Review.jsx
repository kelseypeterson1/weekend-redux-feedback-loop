import React, { useState } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import Button from '@mui/material/Button';

export default function Review () {

    const [feedback, setFeedback] = useState({});

    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);

    const handleSubmit = event => {
        event.preventDefault();
        
        (() => {
            setFeedback = {
                feeling: {feeling},
                understanding: {understanding},
                support: {support},
                comments: {comments}
            }
        })

        console.log('Adding feedback', {});

        axios.post('/feedback', {feedback})
            .then(response => {
                console.log('response is', response)
            }).catch(err => {
                console.log('error is', err)
            })
    }

    return(
        <form onSubmit={handleSubmit}>
            <h2>Review Your Feedback</h2>
                <ul>
                    <li>
                    </li>
                </ul>
                <Button
                        variant='text'
                        type='submit'
                        // endIcon={<ArrowForwardIcon />}
                        >
                        SUBMIT
                    </Button>
        </form>
    )
}