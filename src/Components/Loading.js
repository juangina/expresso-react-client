import React from 'react';

function Loading({auth}) {
    return (
        <div className="App">
            <header className="App-header">
                <p>
                    Trying to Load {auth && auth.nickname ? auth.nickname : 'a new developer into the App.'}...
                </p>
            </header>
        </div>
    );
}

export default Loading;
