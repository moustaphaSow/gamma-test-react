import React from 'react';

class FizzBuzz extends React.Component {
  renderFizzBuzz(i) {
    let out = '';

    if (i % 3 === 0 && i % 5 === 0) {
      out = 'FizzBuzz';
    } else if (i % 3 === 0 || String(i).includes('3')) {
      out = 'Fizz';
    } else if (i % 5 === 0 || String(i).includes('5')) {
      out = 'Buzz';
    } else {
      out = String(i);
    }

    return <div key={i}>{out}</div>;
  }

  render() {
    const tab = [];

    for (let i = 1; i <= 100; i++) {
      tab.push(this.renderFizzBuzz(i));
    }

    return <div>{tab}</div>;
  }
}

export default FizzBuzz;
