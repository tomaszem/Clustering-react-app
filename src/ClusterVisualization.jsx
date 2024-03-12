import React, { useEffect, useState } from 'react';
import Plot from 'react-plotly.js';
import getClusterData from './GetClusterData';

const ClusterVisualization = () => {
    const apiUrl = import.meta.env.VITE_APP_API_URL + '/get-data';
    const data = getClusterData(apiUrl);
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
        width: 800,
        height: 600,
    };

    return <Plot data={data} layout={layout} />;
};

export default ClusterVisualization;
