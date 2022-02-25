import { useState } from 'react';
import axios from 'axios';
import { useDispatch } from 'react-redux';

function Feeling() {

    const dispatch = useDispatch();
    
    let [feeling, setFeeling] = useState({ feeling: 0});

    const handleFeelingChange = (event) => {
        setFeeling({
            feeling: feeling,
        });
    }

    const addFeeling = (event) => {
        event.preventDefault();

        dispatch({
            type: "ADD_FEEDBACK",
            payload: feeling
        })

        setFeeling('');
    };

    return (
        <>
            <h2>How are you feeling today?</h2>

            <form onSubmit={(event) => addFeeling(event)}>
                <input
                    onChange={handleFeelingChange}
                    type='number'
                    placeholder='feeling?'
                />

                <button type='submit'>Next</button>
            </form>
        </>
    )
}

export default Feeling;