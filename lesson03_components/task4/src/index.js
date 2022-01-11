import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Greeting from './Greeting';

ReactDOM.render(
  <Greeting
    firstName="John"
    lastName="Doe"
    birthDate={new Date('2001-01-01T11:11:11.819Z')}
  />,
  document.getElementById('root')
);
