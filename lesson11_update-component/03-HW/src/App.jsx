import React from 'react';
import Expand from './Expand';

class App extends React.Component {
  state = {
    isShow: false,
  };

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <div className="app">
        <Expand
          additionalContent={this.handleClick}
          showContent={this.state.isShow}
        >
          <p>
            Hooks are a new addition in React 16.8. They let you use state and
            other React features without writing a class.
          </p>
        </Expand>
      </div>
    );
  }
}

export default App;
