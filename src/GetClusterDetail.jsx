import { useState, useEffect } from 'react';

const getClusterDetail = (apiUrl) => {
  const [data, setData] = useState([]);
  const [selectedCluster, setSelectedCluster] = useState(null);
  const [clusters, setClusters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error(`HTTP error! Status: ${response.status}`);
        }
        const jsonData = await response.json();
        const data = jsonData.metadatas;
  
        // Map through the data
        const processedData = data.map(item => ({
          ...item,
          title: item.title,
          abstract: item.abstract,
          final_cluster: JSON.parse(item.final_clusters)[0],
          reduce_vectors_2d: JSON.parse(item.reduce_vectors_2d),
        }));
  
        setData(processedData);

        const uniqueClusters = [...new Set(processedData.map(item => item.final_cluster))].sort((a, b) => a - b);
        setClusters(uniqueClusters);
        setSelectedCluster(uniqueClusters[0]);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };
    fetchData();
  }, []);

  return { data, clusters, selectedCluster, setSelectedCluster };
};

export default getClusterDetail;
