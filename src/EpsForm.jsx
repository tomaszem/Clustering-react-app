import React, { useState } from 'react';
import '../styles/settings.css'

const EpsForm = () => {
  const [eps, setEps] = useState('');
  const [message, setMessage] = useState(null);
  const [isError, setIsError] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    const epsValue = parseFloat(eps);

    if (!isNaN(epsValue)) {
      const apiUrl = 'http://localhost:5000/submit-eps';

      fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({ eps: epsValue }),
      })
      .then(response => {
        if (!response.ok) {
          throw new Error('Network response failed');
        }
        return response.json();
      })
      .then(data => {
        setMessage("EPS value submitted successfully!");
        setIsError(false);
        setEps('');
      })
      .catch((error) => {
        setMessage("Error submitting EPS value.");
        setIsError(true);
      });
    } else {
      setMessage("The EPS value must be a float number.");
      setIsError(true);
    }
  };

  return (
    <form onSubmit={handleSubmit} className="form-inline justify-content-center mt-4 eps-form">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="epsInput" className="sr-only">Enter EPS Value:</label>
        <input
          id="epsInput"
          type="text"
          className="form-control"
          value={eps}
          onChange={e => setEps(e.target.value)}
          placeholder="EPS value"
        />
      </div>
      <button type="submit" className="btn btn-primary mb-2">Submit</button>
      {message && (
        <div className={`alert ${isError ? 'alert-danger' : 'alert-success'}`} role="alert">
          {message}
        </div>
      )}
    </form>
  );
}

export default EpsForm;
