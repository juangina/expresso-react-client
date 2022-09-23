import './ApiTest.css';
import React, {useEffect, useState} from 'react';
import {Box} from '@mui/system';
import Button from '@mui/material/Button';
import SendIcon from '@mui/icons-material/Send';

// Main Component 
function ApiTest () {
  const [jsonData, setJsonData] = useState({});

  useEffect (
    ()=> {
      //console.log("ApiTest Component MOUNTED");
      //return () => console.log('ApiTest Component UNMOUNTED');
    }, 
    []
  );

  //Async Functions
  function getData () {
    fetch('/auth/private-route')
    .then(function(resData) {
      return resData.json();
    })
    .then(function(jsonData) {
      //console.log(jsonData);
      setJsonData({...jsonData, ['message']: `${jsonData.message}`});
    })
    .catch (function (err) {
      console.log(err);
    })
  }

  return (
    <div className='ApiTestContainer'>
      <Button 
        variant='contained'
        onClick={()=>{
          getData()
        }}
        endIcon={<SendIcon />}
        sx={{
          display: "flex",
          bgcolor: '#88071b',
          margin: "20px auto",
          padding: "10px 0px",
          width: '200px',
          '&:hover': {
            backgroundColor: '#282c34',
          }
        }}>
          Get Data
      </Button>
      <Box
        sx={{
          width: '50vw',
          height: '10vh',
          margin: '10px auto',
          border: '1px solid #88071b',
          textAlign: 'center',
          padding: '20px 20px',
          fontSize: '1.5rem',
        }}
      >
        {jsonData.message}
      </Box>
    </div>
  )
}

export default ApiTest;