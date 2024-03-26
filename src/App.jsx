import React from 'react';
import ClusterVisualization from './ClusterVisualization';
import '../styles/app.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import FileUploadForm from './Upload';
import SettingsUI from './SettingsUI';
import KnowledgeGraph from './KnowledgeGraph';
import ClusterDetail from './ClusterDetail';

function App() {
  return (
    <>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<ClusterVisualization />} />
            <Route path="/cluster-detail" element={<ClusterDetail />} />
            <Route path="/knowledge-graph" element={<KnowledgeGraph />} />
            <Route path="/uploads" element={<FileUploadForm />} />
            <Route path="/settings" element={<SettingsUI />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
