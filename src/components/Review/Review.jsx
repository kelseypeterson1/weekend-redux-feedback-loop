import React, { useState, useEffect } from 'react';
import { useSelector } from 'react-redux';
import axios from 'axios'
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import ButtonBack from '../ButtonBack/ButtonBack';

export default function Review() {

    // assigning functions to easy-to-understand variables
    const history = useHistory();
    const prevNav = '/comments'

    // react useState will combine feedback into one object
    const [feedback, setFeedback] = useState({});

    // getting values from the redux store
    const feeling = useSelector(store => store.feelingReducer);
    const understanding = useSelector(store => store.understandingReducer);
    const support = useSelector(store => store.supportReducer);
    const comments = useSelector(store => store.commentsReducer);

    // creating function to set feedback useState
    const combineFeedback = (() => {
        setFeedback({
            feeling: { feeling }.feeling,
            understanding: { understanding }.understanding,
            support: { support }.support,
            comments: { comments }.comments
        })
    })

    // upon page load, the feedback useState will be updated
    useEffect(() => {
        console.log('in useEffect');
        combineFeedback();
    }, []);

    // When the submit button is clicked...
    const handleSubmit = event => {
        event.preventDefault();

        // feedback will be posted to the database
        axios.post('/feedback', feedback)
            .then(response => {
                console.log('response is', response)
            }).catch(err => {
                console.log('error is', err)
            })

        // routes to the submission complete page
        history.push('/complete');

    }

    return (
        <>
            <form onSubmit={handleSubmit}>
                <h2>Review Your Feedback</h2>

                <p>Feelings: {{ feeling }.feeling}</p>
                <p>Understanding: {{ understanding }.understanding}</p>
                <p>Support: {{ support }.support}</p>
                <p>Comments: {{ comments }.comments}</p>

                <Button
                    variant='outlined'
                    type='submit'
                >
                    SUBMIT
                </Button>
            </form>

            <ButtonBack prevNav={prevNav}/>
        </>
    )
}