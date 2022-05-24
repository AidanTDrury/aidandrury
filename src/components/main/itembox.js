import Paper from '@mui/material/Paper';
import { styled } from '@mui/material/styles';

const ItemBox = styled(Paper)(({ theme }) => ({
    textAlign: 'center',
    padding: 16,
    borderRadius:"8px",
    marginTop: 16,
}));

export default ItemBox;