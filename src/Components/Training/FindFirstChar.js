import './FindFirstChar.css';
import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import SendIcon from '@mui/icons-material/Send';

//Create series of data points that has repetion.
//For example a string of characters 'aabbcdeeefg'.
//These data series can be translated or represented in a number of statistical ways
//One way is to create a hash map to represent the number of duplicate data points.
//In our example the count will be scaled down to decimal points to represent color opacity
//from 0.1 to 0.9 or 1 data point to 9 data points.  Note: In this example the maximum number
//of duplicate data points is 9.

let dSA = [];
for(let i=0; i<20; i++) {
    dSA[i] = (Math.random().toFixed(1));
    if(dSA[i] === '0.0') {
        dSA[i]='0.1';
    } else 
    if (dSA[i] === '1.0') {
        dSA[i] = '0.9';
    }
}
//start with and empty object
const hT = {};

for (let char of dSA) {
    //verify if char is a key in hashTable object
    //on each iteration through the string
    if(hT[char]) {
        //increment that character/key by one if
        //the character/key exists in the object
        hT[char]++;
    } else {
        //create a character/key and initialize it
        //to 1 in the the object.
        hT[char] = 1;
    }
}
let FFCIndex = 0;
for (let i=0;i<dSA.length;i++) {
    const char = dSA[i];
    if(hT[char]===1) {
        FFCIndex = i;
        break;
    }
    FFCIndex = -1;
}
let colorSpectrumArray = [0.1, 0.2, 0.3, 0.4, 0.5, 0.6, 0.7, 0.8, 0.9];
let messageArray = [
    'You Get Three Tries',
    'You Get Two Tries',
    'You Have One Try Left',
    'Sorry, Game Over.  Start Again',
    'You have found the first unique color - YOU WIN!',
    'Select the first unique shaded block from the series below.',
    '🙁',
    '😀'
]

function FindFirstChar() {
    const [hashTable, setHashTable] = useState(hT);
    const [dataSeriesArray, setDataSeriesArray] = useState(dSA);
    const [findFirstChar, setFindFirstChar] = useState(FFCIndex);
    const [gameCount, setGameCount] = useState(2);
    const [messageArrayIndex, setMessageArrayIndex] = useState(5);
    const [gameActive, setGameActive] = useState(true);

    useEffect(() => {
        // console.log("FindFirstChar Component Mounted");
        //console.log('dataSeriesArray:',dataSeriesArray);
        //console.log('hashTable:', hashTable);
        //console.log('FindFirstCharacterIndex:', findFirstChar);
        //console.log('gameCount', gameCount);
      }, [hashTable, dataSeriesArray, findFirstChar, gameCount])

    return (
        <div className='ApiTestContainer'>
            <Button 
                variant='contained'
                onClick={()=>{
                    let _dSA = [];
                    for(let i=0; i<20; i++) {
                        _dSA[i] = (Math.random().toFixed(1));
                        if(_dSA[i] === '0.0') {
                            _dSA[i]='0.1';
                        } else 
                        if (_dSA[i] === '1.0') {
                            _dSA[i] = '0.9';
                        }
                    }
                    const _hT = {};
                    for (let char of _dSA) {
                        //verify if char is a key in hashTable object
                        //on each iteration through the string
                        if(_hT[char]) {
                            //increment that character/key by one if
                            //the character/key exists in the object
                            _hT[char]++;
                        } else {
                            //create a character/key and initialize it
                            //to 1 in the the object.
                            _hT[char] = 1;
                        }
                    }
                    let _FFCIndex = 0;
                    for (let i=0;i<_dSA.length;i++) {
                        const char = _dSA[i];
                        if(_hT[char]===1) {
                            _FFCIndex = i;
                            break;
                        }
                        _FFCIndex = -1;
                    }
                    if(_FFCIndex === -1) {
                        alert('Start Over, there are no unique blocks!');
                    }
                    setHashTable(_hT);
                    setDataSeriesArray(_dSA);
                    setFindFirstChar(_FFCIndex);
                    setGameCount(0);
                    setGameActive(true);
                    setMessageArrayIndex(5);
                }}
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
                Start Over
            </Button>
            <Typography 
                variant="h5"
                sx={{
                    textAlign: 'center',
                    height: '30px',
                }}>
                    {messageArray[messageArrayIndex]}
            </Typography>
            <Typography 
                sx={{
                    textAlign: 'center',
                    height: '30px',
                }}>
                    {messageArray[gameCount]}
            </Typography>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '90vw',
                    height: '20vh',
                    margin: '10px auto',
                    border: '1px solid #88071b',
                    textAlign: 'center',
                    padding: '10px 10px',
                    fontSize: '1.5rem',
                }}
            >
                {
                    dataSeriesArray.map((hash, index) => {
                        return (
                            <Box
                            key={index}
                            onClick={(e)=>{
                                if (gameActive === true) {
                                    if(e.target.innerText === String(findFirstChar)) {
                                        setMessageArrayIndex(7);
                                        setGameCount(4);
                                        setGameActive(false);
                                    } else
                                    if(gameCount === 2) {
                                        setMessageArrayIndex(6)
                                        setGameCount(3);
                                        setGameActive(false);
                                    } else {
                                    setGameCount(gameCount + 1);
                                    }
                                }
                            }}
                            sx={{
                                width: '9%',
                                height: 'auto',
                                marginRight: '5px',
                                marginTop: '5px',
                                backgroundColor: 'primary.dark',
                                opacity: [hash, hash, hash],
                                '&:hover': {
                                backgroundColor: 'primary.main',
                                opacity: [0.9, 0.8, 0.7],
                                },
                            }}
                        ><div style={{opacity: '1'}}>{index}</div></Box>
                        )
                    })
                }

            </Box>
            <Box
                sx={{
                    display: 'flex',
                    flexWrap: 'wrap',
                    justifyContent: 'center',
                    width: '90vw',
                    height: '10vh',
                    margin: '10px auto',
                    border: '1px solid #88071b',
                    textAlign: 'center',
                    padding: '10px 10px',
                    fontSize: '1.5rem',
                }}
            >
                {
                    colorSpectrumArray.map((color, index) => {
                        return (
                            <Box
                                key={index}
                                sx={{
                                    width: '9%',
                                    height: 'auto',
                                    marginRight: '5px',
                                    marginTop: '5px',
                                    backgroundColor: 'primary.dark',
                                    opacity: [color, color, color],
                                }}
                            ></Box>
                        )
                    })
                }

            </Box>
        </div>
    );
}

export default FindFirstChar;