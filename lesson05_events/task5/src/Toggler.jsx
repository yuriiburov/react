import React from 'react';

class Toggler extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      value: 'Off',
    };
  }

  onChangeValue = () => {
    this.setState({
      value: this.state.value === 'Off' ? 'On' : 'Off',
    });
  };

  render() {
    return (
      <button className="toggler" onClick={this.onChangeValue}>
        {this.state.value}
      </button>
    );
  }
}

export default Toggler;
