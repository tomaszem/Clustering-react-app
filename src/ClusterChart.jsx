import React from 'react';
import { Scatter } from 'react-chartjs-2';
import 'chart.js/auto';
import { options } from './ChartOptions';

const ClusterChart = ({ data, selectedCluster, onPointClick }) => {
  const chartData = {
    datasets: [{
      label: `Cluster Points ${selectedCluster}`,
      data: data.filter(item => item.final_cluster === Number(selectedCluster)).map(item => ({
        x: item.x_2d,
        y: item.y_2d,
        articleTitle: item.filename,
      })),
      backgroundColor: 'rgba(54, 162, 235, 1)',
    }]
  };

  // Extend options with event handler
  const extendedOptions = {
    ...options,
    onClick: (event, elements) => {
      if (elements.length > 0) {
        const elementIndex = elements[0].index;
        const datasetIndex = elements[0].datasetIndex;
        const title = chartData.datasets[datasetIndex].data[elementIndex].articleTitle;
        onPointClick(title);
      }
    },
  };

  return (
    <div class="cluster-chart">
      <Scatter data={chartData} options={extendedOptions} />
    </div>
  );
};

export default ClusterChart;
