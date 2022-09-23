import React, {useEffect, useState} from 'react';
import Box from '@mui/material/Box';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
import Link from '@mui/material/Link';
import Avatar from '@mui/material/Avatar';
import TrainingBlocks from './Training/TrainingBlocks';


function Profile({auth}) {
    const [anchorEl, setAnchorEl] = useState(null);
    const [menuItem, setMenuItem] = useState('Dashboard Page');

    useEffect(() => {
        // console.log("Expresson App Mounted");
        //console.log('menuItem:',menuItem)
      }, [])

    const open = Boolean(anchorEl);
    
    const handleClick = (event) => {
        //console.log(event);
        setAnchorEl(event.currentTarget);
    };
    const handleClose = (event) => {
        //console.log(event);
        if(event.target.innerText==="HOME") {
            setMenuItem('Dashboard Page');
        } else
        if(event.target.innerText==="Profile") {
            setMenuItem('Profile Page');
        } else
        if(event.target.innerText==="My Account") {
            setMenuItem('Account Page');
        } else 
        if (event.target.innerText==='My Training'){
            setMenuItem('Training Page');
        } else {
            setMenuItem('Dashboard Page');
        }
        setAnchorEl(null);
    };

    return (
        <div className="App">
            <Box 
                sx={{
                    display: 'flex',
                    justifyContent: 'flex-end',
                    alignItems: 'center',
                    color: '#88071b',
                }}
            >
                <Button 
                    onClick={()=> {setMenuItem('Dashboard Page')}}
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
                            Home
                        </Typography>
                </Button>
                {auth && auth.nickname 
                ? <Typography variant='h6'>{auth.nickname}</Typography> 
                : <Typography>Dashboard for Anonymous User</Typography>}
                <Button id="basic-button"
                    aria-controls={open ? 'basic-menu' : undefined}
                    aria-haspopup="true"
                    aria-expanded={open ? 'true' : undefined}
                    sx={{
                        color: '#88071b',
                        paddingRight: '20px',
                    }}
                    onClick={handleClick}>
                    <Avatar 
                        alt='logo' 
                        src='https://mdc.theaccidentallifestyle.net/images/portfolioLogo04.png'
                        sx={{
                            margin: '5px'
                        }}
                    />
                </Button>
                    <Menu
                        id="basic-menu"
                        anchorEl={anchorEl}
                        open={open}
                        onClose={handleClose}
                        MenuListProps={{
                        'aria-labelledby': 'basic-button',
                        }}
                    >
                        <MenuItem onClick={handleClose}>Profile</MenuItem>
                        <MenuItem onClick={handleClose}>My Account</MenuItem>
                        <MenuItem onClick={handleClose}>My Training</MenuItem>
                        <MenuItem>
                            <Link 
                                href='/auth/logout'
                                underline="none">Logout
                            </Link>
                        </MenuItem>
                    </Menu>
            </Box>
            <header className="App-header">
                <h3>Welcome to the Best Expresso Training App for Developers</h3>
                <Typography variant="subtitle2" gutterBottom>
                    {menuItem === 'Dashboard Page' 
                        ? <div>Welcome to your Dashboard Page <Typography variant='h4'>{auth.nickname}</Typography></div>
                        : <div>Your are on the <Typography variant='h4'>{menuItem}</Typography></div>
                    } 
                </Typography>
            </header>
            {menuItem === 'Training Page' 
                ?   <>
                        <TrainingBlocks/>
                    </>
                : <></>
            }
        </div>
    );
}

export default Profile;
