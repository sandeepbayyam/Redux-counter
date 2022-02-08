import React from 'react';
import { connect } from 'react-redux';
const Counter = (props) => {
  console.log(props);
  return (
    <div className="betterview">
      <h4>Counter:{props.count}</h4>
      <button
        onClick={() => {
          props.dispatch({ type: 'inc' });
        }}
      >
        Increment{' '}
      </button>
      <button
        onClick={() => {
          props.dispatch({ type: 'dec' });
        }}
      >
        Decrement
      </button>
    </div>
  );
};
export default connect((store) => {
  return store;
})(Counter);
