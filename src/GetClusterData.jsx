import { useState, useEffect } from 'react';

const getClusterData = (apiUrl) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const clusters = {};
                data.metadatas.forEach(metadata => {
                    const { initial_clusters, reduced_vectors_3d, document } = metadata;
                    const [axis] = JSON.parse(reduced_vectors_3d);
                    const initial_cluster = JSON.parse(initial_clusters)[0];
    
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
                    clusters[initial_cluster].x.push(axis[0]);
                    clusters[initial_cluster].y.push(axis[1]);
                    clusters[initial_cluster].z.push(axis[2]);
                    clusters[initial_cluster].text.push(document);
                });

                setData(Object.values(clusters));
            })
            .catch(error => console.error('Error loading data:', error));
    }, [apiUrl]);

    return data;
};

export default getClusterData;
