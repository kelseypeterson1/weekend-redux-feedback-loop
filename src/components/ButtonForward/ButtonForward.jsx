import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export default function ButtonForward({nextNav}) {

    const history = useHistory();

    // Back button moves user back a page
    const handleBack = (event) => {
        event.preventDefault();

        // routes to the prior page
        history.push(nextNav);
    };

    return (
        <form className="back-button" onClick={handleBack}>
            <Button
                variant='text'
                type='button'
                startIcon={<ArrowForwardIcon />}
            >
                Back
            </Button>
        </form>
    )
}