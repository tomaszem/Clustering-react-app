import React, { useState } from 'react';
import getClusterDetail from './GetClusterDetail';
import ClusterSelect from './ClusterSelect';
import ClusterChart from './ClusterChart';
import '../styles/cluster-detail.css'

const ClusterDetail = () => {
  const apiUrl = `${import.meta.env.VITE_APP_API_URL}/get-data`;
  const { data, clusters, selectedCluster, setSelectedCluster } = getClusterDetail(apiUrl);
  const [selectedArticleTitle, setSelectedArticleTitle] = useState('');

  return (
    <div className="container mt-3">
      <div className="row justify-content-center">
        <div className="col-auto">
          {clusters.length > 0 && (
            <ClusterSelect
              clusters={clusters}
              selectedCluster={selectedCluster}
              setSelectedCluster={setSelectedCluster}
            />
          )}

          <div className="d-flex">
            <div className="me-3">
              {selectedCluster && (
                <ClusterChart
                  data={data}
                  selectedCluster={selectedCluster}
                  onPointClick={setSelectedArticleTitle}
                />
              )}
            </div>
            <div className="align-self-start abstract-container">
              {selectedArticleTitle && (
                <>
                  <h4>Abstract</h4>
                  <p>{selectedArticleTitle}</p>
                </>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ClusterDetail;
