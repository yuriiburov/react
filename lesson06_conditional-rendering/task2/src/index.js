import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Mailbox from './Mailbox';

ReactDOM.render(
  <Mailbox unreadMessages={[]} />,
  document.querySelector('#root')
);
