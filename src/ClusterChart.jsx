import React from 'react';
import 'chart.js/auto';
import { Scatter } from 'react-chartjs-2';
import { options } from './ChartOptions';

const ClusterChart = ({ data, selectedCluster, onPointClick }) => {
  // Debbug only
  const totalReduceVectors2D = data
    .filter(item => item.final_cluster === Number(selectedCluster))
    .reduce((acc, item) => acc + item.reduce_vectors_2d.length, 0);

  console.log(`Total number of 2d axis for cluster ${selectedCluster}:`, totalReduceVectors2D);

  // Generate the chart data
  const chartData = {
    datasets: [{
      label: `Cluster Points ${selectedCluster}`,
      data: data
        .filter(item => item.final_cluster === Number(selectedCluster))
        .flatMap(item => item.reduce_vectors_2d.map(([x, y]) => ({
          x: x,
          y: y,
          articleTitle: item.title,
          abstract: item.abstract,
        }))),
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
        const { articleTitle, abstract } = chartData.datasets[datasetIndex].data[elementIndex];
        onPointClick({ title: articleTitle, abstract: abstract });
      }
    },
  };

  return (
    <div className="cluster-chart">
      <Scatter data={chartData} options={extendedOptions} />
    </div>
  );
};

export default ClusterChart;
