import React from 'react';

class ColorPicker extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      color: '',
    };
  }

  onShowColorName = (color) => {
    this.setState({
      color: color,
    });
  };

  render() {
    return (
      <div>
        <div className="picker__title">{this.state.color}</div>
        <div>
          <button
            className="picker__button picker__button_coral"
            onMouseEnter={() => this.onShowColorName('Coral')}
            onMouseLeave={() => this.setState({ color: '' })}
          ></button>
          <button
            className="picker__button picker__button_aqua"
            onMouseEnter={() => this.onShowColorName('Aqua')}
            onMouseLeave={() => this.setState({ color: '' })}
          ></button>
          <button
            className="picker__button picker__button_bisque"
            onMouseEnter={() => this.onShowColorName('Bisque')}
            onMouseLeave={() => this.setState({ color: '' })}
          ></button>
        </div>
      </div>
    );
  }
}

export default ColorPicker;
