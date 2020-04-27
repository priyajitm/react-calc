import React, { Fragment } from 'react';
import Digit from './Digit';
import Method from './Method';

const Digits = ({ getnum, addmethod }) => {
  const heya = ['.', '<', ...Array(10).keys(), 'c', 'ac', '%'].reverse();

  const methods = ['x', '/', '+', '-', '='];
  return (
    <div className="container">
      <div className="num">
        {heya.map((hi) => (
          <Digit number={hi} getnum={getnum} />
        ))}
      </div>
      <div className="method">
        {methods.map((method) => (
          <Method method={method} addmethod={addmethod} />
        ))}
      </div>
    </div>
  );
};

export default Digits;
