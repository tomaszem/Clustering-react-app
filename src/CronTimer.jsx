import React, { useEffect, useState } from 'react';

const CronTimer = () => {
  const [cronData, setCronData] = useState({
    minutes_until_next_run: null,
  });

  // Utility function to convert minutes into hours and minutes format
  const convertMinutesToHoursAndMinutes = (minutes) => {
    const hours = Math.floor(minutes / 60);
    const mins = minutes % 60;
    return `${hours} hour(s) and ${Math.round(mins)} minute(s)`;
  };

  // Utility function to calculate the date and time of the next cron run
  const calculateNextCronDateTime = (minutes) => {
    const now = new Date();
    const nextCronTime = new Date(now.getTime() + minutes * 60000);
    return nextCronTime.toLocaleString();
  };

  useEffect(() => {
    const url = `${import.meta.env.VITE_APP_API_URL}/next-run`;

    fetch(url)
      .then(response => response.json())
      .then(data => {
        setCronData(data);
      })
      .catch(error => console.error('Error while fetching data:', error));
  }, []);

  const { minutes_until_next_run } = cronData;

  return (
    <div>
      <h4 className="mt-4">Cron time</h4>
      <div>Next cron process will be exeuted in {minutes_until_next_run !== null ? convertMinutesToHoursAndMinutes(minutes_until_next_run) : 'Loading...'}</div>
      <div>Exact start time: {minutes_until_next_run !== null ? calculateNextCronDateTime(minutes_until_next_run) : 'Loading...'}</div>
    </div>
  );
}

export default CronTimer;
