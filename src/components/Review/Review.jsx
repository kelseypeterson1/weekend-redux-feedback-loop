import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import { useDispatch } from 'react-redux';
import axios from 'axios'
import Button from '@mui/material/Button';

export default function Review() {

    const [feedback, setFeedback] = useState({});

    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);

    console.log('feeling is', {feeling})


    const combineFeedback = (() => {
        
        
        setFeedback({
            feeling: { feeling }.feeling,
            understanding: { understanding }.understanding,
            support: { support }.support,
            comments: { comments }.comments
        })
    })

    useEffect(() => {
        console.log('in useEffect');
        combineFeedback();
    }, []);

    const handleSubmit = event => {
        event.preventDefault();

        console.log('Adding feedback', feedback);

        axios.post('/feedback', feedback)
            .then(response => {
                console.log('response is', response)
            }).catch(err => {
                console.log('error is', err)
            })
    }

    return (
        <form onSubmit={handleSubmit}>
            <h2>Review Your Feedback</h2>

            <p>Feelings: {{feeling}.feeling}</p>
            <p>Understanding: {{understanding}.understanding}</p>
            <p>Support: {{support}.support}</p>
            <p>Comments: {{comments}.comments}</p>
            
            <Button
                variant='outlined'
                type='submit'
            >
                SUBMIT
            </Button>
        </form>
    )
}