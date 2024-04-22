import React, { useState } from 'react';

function SetCronTime() {
    const [hours, setHours] = useState('');
    const [minutes, setMinutes] = useState('');
    const [successMessage, setSuccessMessage] = useState('');

    const apiUrl = `${import.meta.env.VITE_APP_API_URL}/submit-cron-time`;

    const handleHoursChange = (event) => {
        setHours(event.target.value);
    };

    const handleMinutesChange = (event) => {
        setMinutes(event.target.value);
    };

    const formatNumber = (number) => number.toString().padStart(2, '0');

    const handleSubmit = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({
                    hours: formatNumber(hours),
                    minutes: formatNumber(minutes)
                }),
            });

            if (response.ok) {
                setSuccessMessage('Cron set successfully!');
            } else {
                setSuccessMessage('Failed to send data.');
            }
        } catch (error) {
            setSuccessMessage('An error occurred.');
        }
    };

    return (
        <div className='mt-4'>
            <div>
                <label>
                    Hours:
                    <input
                        type="number"
                        value={hours}
                        onChange={handleHoursChange}
                        min="0"
                        max="23"
                        className="form-control"
                    />
                </label>
            </div>
            <div>
                <label>
                    Minutes:
                    <input
                        type="number"
                        value={minutes}
                        onChange={handleMinutesChange}
                        min="0"
                        max="59"
                        className="form-control"
                    />
                </label>
            </div>
            <button onClick={handleSubmit} className="btn btn-primary mt-2">
                Submit Time
            </button>
            {successMessage && <p className="mt-2">{successMessage}</p>}
        </div>
    );
}

export default SetCronTime;
