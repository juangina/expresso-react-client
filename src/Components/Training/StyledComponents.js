import { alpha, styled } from '@mui/material/styles';
import Box from '@mui/material/Box';
import Card from '@mui/material/Card';

export const ResponsiveCard = styled(Card)(({ theme }) => ({
    margin: '10px auto',
    width: '30%',
    border: '2px solid black',
    [theme.breakpoints.down('md')]: {
        width: '45%'
    }

  }));
  
  export const TrainingBox = styled(Box)(({ theme }) => ({
    height: '500px',
    backgroundColor: '#f1f1f1',
    marginTop: '10px',
    paddingTop: '5px'
  }));
  