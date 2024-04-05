import React from "react";
import Plot from "react-plotly.js";
import getClusterData from "./GetClusterData";

const ClusterVisualization = () => {
    const apiUrl = `${import.meta.env.VITE_APP_API_URL}/get-data`;
    const data = getClusterData(apiUrl);

    const layout = {
        title: "Visualizing Clusters in Three Dimensions",
        scene: {
            xaxis: { title: "PC1" },
            yaxis: { title: "PC2" },
            zaxis: { title: "PC3" },
            aspectmode: "manual",
            aspectratio: {
                x: 2,
                y: 1,
                z: 1,
            },
            camera: {
                eye: { x: 1.25, y: 1.65, z: 1.3 },
                center: { x: 0, y: 0, z: 0 },
                up: { x: 0, y: 0, z: 1 },
            },
        },
        width: 1000,
        height: 600,
        margin: {
            l: 0,
            r: 0,
            b: 50,
            t: 25,
            pad: 4,
        },
    };

    return <Plot data={data} layout={layout} />;
};

export default ClusterVisualization;
