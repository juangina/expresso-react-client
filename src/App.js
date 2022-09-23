import './App.css';
import React, {useState, useEffect} from 'react';
import axios from 'axios';
import Home from "./Components/Home";
import Profile from "./Components/Profile";
import Loading from "./Components/Loading";

function App() {
  const [auth, setAuth] = useState(null);

  useEffect(() => {
    // console.log("Expresson App Mounted");
    axios.get('/auth/current-session').then(({data}) => {
      //console.log('Authorization Response Data:', data);
      setAuth(data);
    })
  }, [])

  if (auth === null) {
    return <Loading/>
  }
  if (auth) {
    return ( 
      <>
        <Profile auth={auth}/>
      </>
    )
  }
  return (
    <>
      <Home/>
    </>
  )
}

export default App;
