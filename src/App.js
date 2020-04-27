import React, { Fragment } from 'react';
import logo from './logo.svg';
import './App.css';
import './Style.css';
import Digits from './Digits';

class App extends React.Component {
  state = {
    firstNum: '',
    secondNum: '',
    method: '',
    output: '',
  };

  getCurNum = (number) => {
    if (this.state.method != '') {
      let secondNum = [...this.state.secondNum];
      secondNum.push(number);
      this.setState({ secondNum });
    } else {
      let firstNum = [...this.state.firstNum];
      firstNum.push(number);
      this.setState({ firstNum });
    }
  };

  addMethod = (value) => {
    if (value !== '=') {
      this.setState({ method: value });
    } else {
      const num1 = this.state.firstNum.join('');
      const num2 = this.state.secondNum.join('');
      if (this.state.method === '+') {
        let total = parseInt(num1) + parseInt(num2);
        this.setState({ output: total });
      }
      if (this.state.method === '-') {
        let total = parseInt(num1) - parseInt(num2);
        this.setState({ output: total });
      }
      if (this.state.method === 'x') {
        let total = parseInt(num1) * parseInt(num2);
        this.setState({ output: total });
      }
      if (this.state.method === '/') {
        let total = parseInt(num1) / parseInt(num2);
        this.setState({ output: total });
      }
    }
  };

  render() {
    return (
      <div className="calculator">
        <h1>Calculator</h1>

        <div className="calc-body">
          <div className="calc-typed">
            <input type="text" placeholder="0" value={this.state.output} />
          </div>

          <Digits getnum={this.getCurNum} addmethod={this.addMethod} />
        </div>
      </div>
    );
  }
}

export default App;
