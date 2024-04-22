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
      const apiUrl = `${import.meta.env.VITE_APP_API_URL}/submit-eps`;

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
        setMessage("Value submitted successfully!");
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
    <div>
    <form onSubmit={handleSubmit} className="form-inline justify-content-center mt-4 eps-form">
      <div className="form-group mx-sm-3 mb-2">
        <label htmlFor="epsInput" className="sr-only">Enter custom EPS value:</label>
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
    </form>
    {message && <p>{message}</p>}
    </div>
  );
}

export default EpsForm;
