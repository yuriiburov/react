import React from 'react';

class Expand extends React.Component {
  state = {
    isShow: false,
  };

  handleClick = () => {
    this.setState({ isShow: !this.state.isShow });
  };

  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">Some title</span>
          <button className="expand__toggle-btn" onClick={this.handleClick}>
            {this.state.isShow ? (
              <i className="fas fa-chevron-up"></i>
            ) : (
              <i className="fas fa-chevron-down"></i>
            )}
          </button>
        </div>
        {this.state.isShow ? (
          <div className="expand__content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Expand;
