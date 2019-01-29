import React from 'react';

const StatsPercentage = props => {
  const total = props.successRate.CORRECT + props.successRate.WRONG;
  const percentage = Math.round((props.successRate.CORRECT / total) * 100, 0);

  return <div>Success rate: {percentage || 0}%</div>;
};

export default StatsPercentage;
