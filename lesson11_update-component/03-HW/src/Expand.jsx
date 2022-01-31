import React from 'react';

class Expand extends React.Component {
  render() {
    return (
      <div className="expand border">
        <div className="expand__header">
          <span className="expand__title">Some title</span>
          <button
            className="expand__toggle-btn"
            onClick={this.props.additionalContent}
          >
            {this.props.showContent ? (
              <i className="fas fa-chevron-up expand__arrow"></i>
            ) : (
              <i className="fas fa-chevron-up"></i>
            )}
          </button>
        </div>
        {this.props.showContent ? (
          <div className="expand__content">{this.props.children}</div>
        ) : null}
      </div>
    );
  }
}

export default Expand;
