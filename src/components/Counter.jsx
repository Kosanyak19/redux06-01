import React from 'react';
import { connect } from 'react-redux';
import * as counterActions from '../counter.actions';

const Counter = ({ counter, increment, decrement, reset }) =>  (
    <div className="counter">
      <button data-action="decrease" className="counter__button" onClick={decrement}>
        -
      </button>
      <span className="counter__value" onClick={reset}>
        {counter}
      </span>
      <button data-action="increase" className="counter__button" onClick={increment}>
        +
      </button>
    </div>
  );


const mapDispatch = {
  increment: counterActions.increment,
  decrement: counterActions.decrement,
  reset: counterActions.reset,
};

const mapState = state => {
  return {
    counter: state,
  };
};

const connector = connect(mapState, mapDispatch); //HOC

export default connector(Counter);