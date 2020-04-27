import React, { Fragment } from 'react';

class Method extends React.Component {
  onClick = () => {
    this.props.addmethod(this.props.method);
  };
  render() {
    return (
      <div className="button" onClick={this.onClick}>
        {this.props.method}
      </div>
    );
  }
}

export default Method;
