import React from 'react';
import { Container } from 'reactstrap';
import Routes from './routes';
import './assets/styles/global.css';

function App() {
  return (
    <Container>
      <h1>Sport's App</h1>
      <div className="content">
        <Routes />
      </div>
    </Container>
  );
}

export default App;
