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
        setData(jsonData);
        const uniqueClusters = [...new Set(jsonData.map(item => item.final_cluster))].sort();
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
