import React from 'react';

const ClusterSelect = ({ clusters, selectedCluster, setSelectedCluster }) => (
  <select
    className="form-select w-50 my-3"
    value={selectedCluster || ""}
    onChange={(e) => setSelectedCluster(e.target.value)}
  >
    {clusters.map((cluster) => (
      <option key={cluster} value={cluster}>
        Cluster {cluster}
      </option>
    ))}
  </select>
);

export default ClusterSelect;
