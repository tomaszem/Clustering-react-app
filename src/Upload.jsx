import React, { useState, useRef } from 'react';
import axios from 'axios';

function FileUploadForm() {
  const apiUrl = import.meta.env.VITE_APP_API_URL + '/upload-pdf';
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const fileInputRef = useRef(null);

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    setUploadStatus('');
  };

  const handleSubmit = async (event) => {
    event.preventDefault();
    if (!selectedFile) {
      alert('Please select a file before submitting.');
      return;
    }

    const formData = new FormData();
    formData.append('file', selectedFile);

    try {
      const response = await axios.post(apiUrl, formData, {
        headers: {
          'Content-Type': 'multipart/form-data',
        },
      });
      console.log(response.data);
      setUploadStatus('File uploaded successfully.');
      setSelectedFile(null);
      fileInputRef.current.value = null;
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file. Please try again.');
    }
  };

  return (
    <div>
      <h3 className="mt-4">Upload your PDF documents in the section below</h3>
      <form onSubmit={handleSubmit} className="container mt-5">
        <div className="form-group row">
          <div className="col-sm-12 mb-4">
            <input
              type="file"
              className="form-control-file"
              onChange={handleFileChange}
              accept="application/pdf"
              ref={fileInputRef}
            />
          </div>
        </div>
        <div className="form-group row">
          <div className="col-sm-12">
            <button type="submit" className="btn btn-primary btn-block">Upload File</button>
          </div>
        </div>
      </form>
      {uploadStatus && (
        <div className="alert alert-info mt-3" role="alert">
          {uploadStatus}
        </div>
      )}
    </div>
  );
}

export default FileUploadForm;
