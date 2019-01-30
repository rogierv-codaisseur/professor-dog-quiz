import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const StatsPercentage = props => {
  const total = props.successRate.CORRECT + props.successRate.WRONG;
  const percentage = Math.round((props.successRate.CORRECT / total) * 100, 0);

  return (
    <div>
      <div>Success Rate:</div>
      <br />
      <Progress type='circle' width={95} percent={percentage || 0} />
    </div>
  );
};

export default StatsPercentage;
