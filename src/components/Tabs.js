import React from 'react';
import './Tabs.css';

const Tabs = () => {
    return (
        <div className="box">
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
        </div>
    );
};

export default Tabs;
