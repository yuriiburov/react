import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Status from './Status';

ReactDOM.render(<Status isOnline={true} />, document.querySelector('#root'));
