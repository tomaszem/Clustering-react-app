import { useState, useEffect } from 'react';

const apiUrl = `${import.meta.env.VITE_APP_API_URL}/get-data`;

const fetchGraphData = (selectedCluster) => {
  const [graphData, setGraphData] = useState({ nodes: [], links: [] });
  const [clusters, setClusters] = useState([]);

  useEffect(() => {
    const fetchData = async () => {
      try {
        const response = await fetch(apiUrl);
        if (!response.ok) {
          throw new Error('Error');
        }
        const jsonData = await response.json();
        const data = jsonData.metadatas;

        const processedData = data.map(item => ({
          ...item,
          initial_clusters: JSON.parse(item.initial_clusters),
        }));

        // Calculate unique clusters
        const allClusters = new Set();
        processedData.forEach(item => {
          item.initial_clusters.forEach(cluster => allClusters.add(cluster));
        });

        // Convert set to sorted array
        setClusters([...allClusters].sort((a, b) => a - b));

        processGraphData(processedData, selectedCluster);
      } catch (error) {
        console.error('Failed to fetch data:', error);
      }
    };

    fetchData();
  }, [selectedCluster]);

  const processGraphData = (metadatas, selectedCluster) => {
    let nodes = [];
    let links = [];
    let authorIdMap = new Map();
    let locationIdMap = new Map();

    // Filter data based on selected cluster
    const filteredData = metadatas.filter(data => data.initial_clusters.includes(selectedCluster));

    filteredData.forEach((data, index) => {
      const authors = data.authors.split(',');
      const locations = data.locations.split(',');
      const title = data.title;
      const paperNodeId = `paper${index}`;

      nodes.push({ id: paperNodeId, label: title, group: 'paper' });

      authors.forEach((author) => {
        const trimmedAuthor = author.trim();
        if (!authorIdMap.has(trimmedAuthor)) {
          authorIdMap.set(trimmedAuthor, `author${authorIdMap.size}`);
          nodes.push({ id: authorIdMap.get(trimmedAuthor), label: trimmedAuthor, group: 'author' });
        }
        links.push({ source: authorIdMap.get(trimmedAuthor), target: paperNodeId, label: 'authored' });
      });

      locations.forEach(location => {
        const trimmedLocation = location.trim();
        if (!locationIdMap.has(trimmedLocation)) {
          locationIdMap.set(trimmedLocation, `location${locationIdMap.size}`);
          nodes.push({ id: locationIdMap.get(trimmedLocation), label: trimmedLocation, group: 'location' });
        }
        links.push({ source: paperNodeId, target: locationIdMap.get(trimmedLocation), label: 'published in' });
      });
    });

    setGraphData({ nodes, links });
  };

  return { graphData, clusters };
};

export default fetchGraphData;
