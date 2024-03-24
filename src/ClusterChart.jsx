import React from 'react';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import { options } from './ChartOptions';

const ClusterChart = ({ data, selectedCluster }) => {
  const chartData = {
    datasets: [{
      label: 'Cluster Points',
      data: data.filter(item => item.cluster === Number(selectedCluster)).map(item => ({
        x: item.x,
        y: item.y
      })),
      backgroundColor: 'rgba(54, 162, 235, 1)',
    }]
  };

  return (
    <div className="d-flex justify-content-center w-100 my-3">
      <div style={{ width: '600px', height: '400px' }}>
        <Scatter data={chartData} options={options} />
      </div>
    </div>
  );
};

export default ClusterChart;
