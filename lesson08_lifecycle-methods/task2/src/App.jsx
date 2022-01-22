import React from 'react';
import Clock from './Clock';

class App extends React.Component {
  state = {
    visible: true,
  };

  toggle = () => {
    this.setState({
      visible: !this.state.visible,
    });
  };

  render() {
    return (
      <>
        <button onClick={this.toggle}>Toggle</button>
        <div>{this.state.visible && <Clock />}</div>
      </>
    );
  }
}

export default App;
