import React from 'react';
import getClusterDetail from './GetClusterDetail';
import ClusterSelect from './ClusterSelect';
import ClusterChart from './ClusterChart';

const ClusterDetail = () => {
  const apiUrl = `${import.meta.env.VITE_APP_API_URL}/get-data`;
  const { data, clusters, selectedCluster, setSelectedCluster } = getClusterDetail(apiUrl);

  return (
    <div className="d-flex flex-column align-items-center">
      {clusters.length > 0 && (
        <ClusterSelect
          clusters={clusters}
          selectedCluster={selectedCluster}
          setSelectedCluster={setSelectedCluster}
        />
      )}

      {selectedCluster && (
        <ClusterChart data={data} selectedCluster={selectedCluster} />
      )}
    </div>
  );
};

export default ClusterDetail;
