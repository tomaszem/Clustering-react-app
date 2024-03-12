import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import getClusterData from './GetClusterData';

const ClusterVisualization = () => {

    const data = getClusterData('http://localhost:5000/get-data');
    console.log(data);

    const layout = {
        title: 'Visualizing Clusters in Two Dimensions',
        xaxis: {
            title: 'PC1',
            ticklen: 5,
            zeroline: false,
        },
        yaxis: {
            title: 'PC2',
            ticklen: 5,
            zeroline: false,
        },
    };

    return <Plot data={data} layout={layout} />;
};

export default ClusterVisualization;
