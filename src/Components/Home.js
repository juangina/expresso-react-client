import React from 'react';
function Home({auth}) {
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
            </header>
        </div>
    );
}

export default Home;
