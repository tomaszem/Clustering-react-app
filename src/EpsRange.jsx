import React, { useEffect, useState } from 'react';

const EpsRangeDisplay = () => {
  const [epsData, setEpsData] = useState({
    start_eps: null,
    end_eps: null,
    suggested_eps_values: []
  });

  useEffect(() => {
    const url = `${import.meta.env.VITE_APP_API_URL}/get-eps-range`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setEpsData(data);
      })
      .catch(error => console.error('Error while fetching data:', error));
  }, []);

  return (
    <div>
      <h4 className="mt-4">Eps Range Data</h4>
      <div>
        <div>Suggested Eps range is from <strong>{epsData.start_eps !== null ? epsData.start_eps.toFixed(2) : 'Loading...'}</strong> to <strong>{epsData.end_eps !== null ? epsData.end_eps.toFixed(2) : 'Loading...'}</strong></div>
      </div>
    </div>
  );
}

export default EpsRangeDisplay;
