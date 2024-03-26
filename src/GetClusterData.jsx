import { useState, useEffect } from 'react';

const getClusterData = (apiUrl) => {
    const [data, setData] = useState([]);

    useEffect(() => {
        fetch(apiUrl)
            .then(response => response.json())
            .then(data => {
                const clusters = {};
                data.forEach(point => {
                    const { cluster, x, y } = point;
                    if (!clusters[cluster]) {
                        clusters[cluster] = { x: [], y: [], type: 'scatter', mode: 'markers', name: `Cluster ${cluster}`, marker: { size: 12 }};
                    }
                    clusters[cluster].x.push(x);
                    clusters[cluster].y.push(y);
                });

                setData(Object.values(clusters));
            })
            .catch(error => console.error('Error loading data:', error));
    }, [apiUrl]);

    return data;
};

export default getClusterData;
