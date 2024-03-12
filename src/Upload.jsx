import React, { useState, useRef } from 'react';
import axios from 'axios';

function FileUploadForm() {
  const apiUrl = import.meta.env.VITE_APP_API_URL + '/upload';
  const [selectedFile, setSelectedFile] = useState(null);
  const [uploadStatus, setUploadStatus] = useState('');
  const fileInputRef = useRef(null); // Reference to reset the file input

  const handleFileChange = (event) => {
    setSelectedFile(event.target.files[0]);
    // Clear any existing status messages when a new file is selected
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
      console.log('File uploaded successfully:', response.data);
      setUploadStatus('File uploaded successfully.');
      setSelectedFile(null); // Reset selected file state
      fileInputRef.current.value = null; // Reset file input
    } catch (error) {
      console.error('Error uploading file:', error);
      setUploadStatus('Error uploading file. Please try again.');
    }
  };

  return (
    <div>
      <form onSubmit={handleSubmit} className="container mt-5">
        <div className="form-group row">
          <div className="col-sm-12 mb-4">
            <input
              type="file"
              className="form-control-file"
              onChange={handleFileChange}
              accept="application/pdf"
              ref={fileInputRef} // Attach the ref to the file input
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
