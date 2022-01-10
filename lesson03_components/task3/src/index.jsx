import React from 'react';
import ReactDOM from 'react-dom';
import './styles.css';
import Comment from './Comment';

const userInfo = {
  name: 'Tom',
  avatarUrl: 'https://avatars1.githubusercontent.com',
};

ReactDOM.render(
  <Comment
    user={userInfo}
    text="Good job!"
    date={new Date('2019-01-01T11:32:19.566Z')}
  />,
  document.getElementById('root')
);
