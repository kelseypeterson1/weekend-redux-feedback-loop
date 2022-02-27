import ArrowForwardIcon from '@mui/icons-material/ArrowForward';
import Button from '@mui/material/Button';
import { useHistory } from 'react-router-dom';

export default function ButtonForward({ nextNav }) {

    return (
        <Button
            style={{ color: '#071108' }}
            variant='text'
            type='submit'
            endIcon={<ArrowForwardIcon />}
        >
            Next    
        </Button>
    )
}