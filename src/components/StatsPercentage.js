import React from 'react';
import { Progress } from 'react-sweet-progress';
import 'react-sweet-progress/lib/style.css';

const StatsPercentage = props => {
  const total = props.successRate.CORRECT + props.successRate.WRONG;
  const percentage =
    Math.round((props.successRate.CORRECT / total) * 100, 0) || 0;

  return (
    <div>
      <div>Success Rate:</div>
      <br />
      <Progress
        type='circle'
        width={90}
        percent={percentage}
        theme={{
          error: {
            symbol: percentage + '%',
            trailColor: 'pink',
            color: 'red'
          },
          default: {
            symbol: percentage + '%',
            trailColor: 'lightblue',
            color: 'blue'
          },
          active: {
            symbol: percentage + '%',
            trailColor: 'yellow',
            color: 'orange'
          },
          success: {
            symbol: percentage + '%',
            trailColor: 'lime',
            color: 'green'
          }
        }}
      />
    </div>
  );
};

export default StatsPercentage;
