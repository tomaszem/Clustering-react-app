import React, { useState } from 'react';

function SetClustersNum() {
    const [value, setValue] = useState(0);
    const [successMessage, setSuccessMessage] = useState('');

    const handleChange = (event) => {
        setValue(parseInt(event.target.value, 10));
    };

    const apiUrl = `${import.meta.env.VITE_APP_API_URL}/submit-clusters-num`;

    const handleSubmit = async () => {
        try {
            const response = await fetch(apiUrl, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                },
                body: JSON.stringify({ numberOfClusters: value }),
            });

            if (response.ok) {
                console.log('Data successfully sent:', value);
                setSuccessMessage('Data sent successfully!');
            } else {
                console.error('Failed to send data');
                setSuccessMessage('Failed to send data.');
            }
        } catch (error) {
            console.error('Error:', error);
            setSuccessMessage('An error occurred.');
        }
    };

    return (
        <div className='mt-4'>
            <input
                type="range"
                min="0"
                max="10"
                value={value}
                onChange={handleChange}
                className="w-50"
            />
            <p>Set number of clusters: {value}</p>
            <button onClick={handleSubmit} className="btn btn-primary">
                Submit
            </button>
            {successMessage && <p>{successMessage}</p>}
        </div>
    );
}

export default SetClustersNum;
