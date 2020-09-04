import React from 'react';
import logo from './assets/images/custom-mern-stack.svg';
import './assets/styles/global.css';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>Learning the MERN STACK</p>

        <br></br>
        <a
          className="App-link"
          href="https://www.mongodb.com/what-is-mongodb"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn MongoDb
        </a>

        <br></br>
        <a
          className="App-link"
          href="https://expressjs.com/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn ExpressJs
        </a>
        <br></br>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
        <br></br>
        <a
          className="App-link"
          href="https://nodejs.org/en/"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn NodeJs
        </a>
      </header>
    </div>
  );
}

export default App;
