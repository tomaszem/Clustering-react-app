import React, { useState } from 'react';
import getClusterDetail from './GetClusterDetail';
import ClusterSelect from './ClusterSelect';
import ClusterChart from './ClusterChart';
import '../styles/cluster-detail.css';

const ClusterDetail = () => {
  const apiUrl = `${import.meta.env.VITE_APP_API_URL}/get-data`;
  const { data, clusters, selectedCluster, setSelectedCluster } = getClusterDetail(apiUrl);
  const [selectedDocument, setSelectedDocument] = useState({ title: '', abstract: '' });

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
                  onPointClick={(document) => setSelectedDocument(document)}
                />
              )}
            </div>
            <div className="align-self-start abstract-container">
              {selectedDocument.title && (
                <>
                  <h4>{selectedDocument.title}</h4>
                  <p>{selectedDocument.abstract}</p>
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
