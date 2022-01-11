import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Clock from './Clock';

ReactDOM.render(
  <>
    <Clock location="New York" offset={-5} />
    <Clock location="Kyiv" offset={2} />
    <Clock location="London" offset={0} />
  </>,
  document.getElementById('root')
);
