import React from 'react';
import ClusterVisualization from './ClusterVisualization';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FileUploadForm from './Upload';
import SettingsUI from './SettingsUI';
import KnowledgeGraph from './KnowledgeGraph';

function App() {
  return (
    <>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<ClusterVisualization />} />
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
