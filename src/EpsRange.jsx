import React, { useEffect, useState } from 'react';

const EpsRangeDisplay = () =>  {
  const [epsData, setEpsData] = useState({
    start_eps: null,
    end_eps: null,
    suggested_eps_values: []
  });

  useEffect(() => {
    const url = 'http://localhost:5000/get-eps-range';
    
    fetch(url)
      .then(response => response.json())
      .then(data => {
        setEpsData(data);
      })
      .catch(error => console.error('Error while fetching data:', error));
  }, []);

  return (
    <div>
      <h2>Eps Range Data</h2>
      <p>Start Eps: {epsData.start_eps}</p>
      <p>End Eps: {epsData.end_eps}</p>
    </div>
  );
}

export default EpsRangeDisplay;
