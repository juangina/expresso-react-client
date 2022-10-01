import React from 'react';
import axios from 'axios';
import Button from '@mui/material/Button';
import Typography from '@mui/material/Typography';

function Home({auth}) {
    const handleClick = (event) => {
        console.log(event);
        axios.get('https://expresso.api.theaccidentallifestyle.net/auth/login').then(({data}) => {
        console.log('Login Response Data:', data);
        })
    };

    return (
        <div className="App">
            <header className="App-header">
                <h3>Expresso Training App for Developers</h3>
                <p>
                    You are not logged in {auth && auth.nickname ? auth.nickname : "possible new developer."}
                </p>
                <a
                    className="App-link"
                    href="https://expresso.api.theaccidentallifestyle.net/auth/login"
                >
                    Login Here
                </a>
                <Button 
                    onClick={()=> {handleClick()}}
                    sx={{
                        marginRight: 'auto',
                        paddingLeft: '20px',
                    }}>
                        <Typography
                            variant='h6'
                            sx={{
                                color: '#88071b',
                            }}
                        >
                            Login Here
                        </Typography>
                </Button>
            </header>
        </div>
    );
}

export default Home;
