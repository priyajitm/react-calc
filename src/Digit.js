import React from 'react';

class Digit extends React.Component {
  onClick = () => {
    this.props.getnum(this.props.number);
  };

  addClass = () => {
    let className = 'a';
    if (this.props.number == '0') {
      className = 'extra-span button';
    } else {
      className = 'button';
    }
    return className;
  };
  render() {
    return (
      <div className={this.addClass} onClick={this.onClick}>
        {this.props.number}
      </div>
    );
  }
}

export default Digit;
