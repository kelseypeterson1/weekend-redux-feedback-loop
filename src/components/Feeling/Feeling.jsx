import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { useHistory } from 'react-router-dom';

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

    return (
        <>
            <h2>How are you feeling today?</h2>

            <form onSubmit={handleSubmit}>
                <input
                    value={feeling}
                    onChange={(event) => setFeeling(event.target.value)}
                    type='number'
                    placeholder='feeling?'
                />

                <button type='submit'>Next</button>
            </form>

        </>
    )
}

export default Feeling;