import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';
import { useDispatch } from 'react-redux';

export default function SubmissionComplete() {

    // assigning functions to easy-to-understand variables
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

        // clears data in the store
        dispatch({
            type: "RESET_DATA"
        })

        // routes to a new form
        history.push('/');
    };

    return (
        <form onSubmit={handleSubmit}>
            <h2>Submission complete!</h2>
            <h3>Would you like to give more feedback?</h3>
            <Button
                variant='outlined'
                type='submit'
            >
                ANOTHER!
            </Button>
        </form>
    )
}