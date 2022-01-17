import React from 'react';
import Login from './Login';
import Logout from './Logout';
import Spinner from './Spinner';

class Auth extends React.Component {
  state = {
    isLogedIn: true,
    showSpinner: false,
  };

  log = () => {
    this.setState({ showSpinner: true });
    setTimeout(() => {
      this.setState({
        showSpinner: false,
        isLogedIn: false,
      });
    }, 2000);
  };

  out = () => {
    this.setState({ isLogedIn: true });
  };

  render() {
    if (this.state.showSpinner) {
      return <Spinner size={111} />;
    }

    if (this.state.isLogedIn) {
      return <Login onLogin={this.log} />;
    }
    return <Logout onLogout={this.out} />;
  }
}

export default Auth;
