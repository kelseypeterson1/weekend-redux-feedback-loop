import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export default function SubmissionComplete() {

    const history = useHistory();

    const handleSubmit = (event) => {
        event.preventDefault();

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