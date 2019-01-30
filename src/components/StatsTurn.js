import React from 'react';

const StatsTurn = props => {
  const total = props.successRate.CORRECT + props.successRate.WRONG;
  return <div>Current Turn: {total}</div>;
};

export default StatsTurn;
