import { styled } from '@mui/material/styles';
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

  export const SolutionBox = styled(Box)(({ theme }) => ({
    width: '95%',
    height: '95%',
    margin: '0px 5px',
    marginTop: '5px',
    backgroundColor: '#1566c0',
    position: 'absolute',
    top: '50%',
    left: '50%',
    transform: 'translate(-53%,-56%)',
    [theme.breakpoints.down('xl')]: {
      transform: 'translate(-55%,-57%)',
    },
    [theme.breakpoints.down('md')]: {
      transform: 'translate(-57%,-57%)',
    }
  }));
  