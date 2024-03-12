import React from 'react';
import ClusterVisualization from './ClusterVisualization';
import './App.css'
import 'bootstrap/dist/css/bootstrap.min.css';
import Menu from './Menu'
import { BrowserRouter as Router, Routes, Route, Link } from 'react-router-dom';
import FileUploadForm from './Upload';

function App() {
  return (
    <>
      <Router>
        <div>
          <Menu />
          <Routes>
            <Route path="/" element={<ClusterVisualization />} />
            <Route path="/uploads" element={<FileUploadForm />} />
            <Route path="/todo-2" element={<ClusterVisualization />} />
          </Routes>
        </div>
      </Router>
    </>
  );
}

export default App;
