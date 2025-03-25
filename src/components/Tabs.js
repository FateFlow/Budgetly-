import React from 'react';

const Tabs = () => {
    return (
        <nav style={{
            display: 'flex',
            justifyContent: 'space-around',
            backgroundColor: '#f0f0f0',
            padding: '10px 0',
            marginTop: '10px'
        }}>
            <button style={{
                border: 'none',
                backgroundColor: '#ffffff',
                padding: '10px 20px',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#4CAF50'
            }}>Spend</button>
            <button style={{
                border: 'none',
                backgroundColor: '#ffffff',
                padding: '10px 20px',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#4CAF50'
            }}>Bills</button>
            <button style={{
                border: 'none',
                backgroundColor: '#ffffff',
                padding: '10px 20px',
                borderRadius: '5px',
                boxShadow: '0 2px 4px rgba(0, 0, 0, 0.1)',
                cursor: 'pointer',
                fontWeight: 'bold',
                color: '#4CAF50'
            }}>History</button>
        </nav>
    );
};

export default Tabs;
