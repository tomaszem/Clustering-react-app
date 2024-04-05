import { useState, useEffect } from 'react';

const getClusterData = (apiUrl) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const clusters = {};
                data.forEach(point => {
                    const { initial_cluster, x_3d, y_3d, z_3d, filename } = point;
                    if (!clusters[initial_cluster]) {
                        clusters[initial_cluster] = {
                            x: [],
                            y: [],
                            z: [],
                            type: 'scatter3d',
                            mode: 'markers',
                            name: `Cluster ${initial_cluster}`,
                            marker: { size: 5 },
                            text: [],
                            hoverinfo: 'text',
                        };
                    }
                    clusters[initial_cluster].x.push(x_3d);
                    clusters[initial_cluster].y.push(y_3d);
                    clusters[initial_cluster].z.push(z_3d);
                    clusters[initial_cluster].text.push(`${filename}`);
                });

                setData(Object.values(clusters));
            })
            .catch(error => console.error('Error loading data:', error));
    }, [apiUrl]);

    return data;
};

export default getClusterData;
