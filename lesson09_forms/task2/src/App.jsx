import React from 'react';
import UserForm from './UserForm';

class App extends React.Component {
  createUser = (data) => {
    console.log(data);
  };

  render() {
    return <UserForm handleSubmit={this.createUser} />;
  }
}

export default App;
