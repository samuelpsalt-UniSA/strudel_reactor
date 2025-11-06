import React, { useState } from 'react';

const quotes = [
    "The only way to do great work is to love what you do. - Steve Jobs",
    "Believe you can and you're halfway there. - Theodore Roosevelt",
    "The future belongs to those who believe in the beauty of their dreams. - Eleanor Roosevelt",
    "Strive not to be a success, but rather to be of value. - Albert Einstein",
    "The mind is everything. What you think you become. - Buddha",
];

const RandomQuoteGenerator = () => {
    const [currentQuote, setCurrentQuote] = useState(() => {
        const randomIndex = Math.floor(Math.random() * quotes.length);
        return quotes[randomIndex];
    });

    const generateRandomQuote = () => {
        let newIndex;
        do {
            newIndex = Math.floor(Math.random() * quotes.length);
        } while (quotes[newIndex] === currentQuote); // Ensure a different quote is chosen

        setCurrentQuote(quotes[newIndex]);
    };

    return (
        <div style={{
            display: 'flex',
            justifyContent: 'space-between',
            fontFamily: 'Arial, sans-serif',
            marginTop: '20em',
            textAlign: 'center',
            border: '1px solid #ddd',
            borderRadius: '8px',
            boxShadow: '0 4px 8px rgba(0,0,0,0.1)'
        }}>
            <h2>Random Quote</h2>
            <p style={{ fontSize: '1.2em', fontStyle: 'italic', marginBottom: '20px' }}>
                "{currentQuote}"
            </p>
            <button
                onClick={generateRandomQuote}
                style={{
                    padding: '10px 20px',
                    fontSize: '1em',
                    backgroundColor: '#007bff',
                    color: 'white',
                    border: 'none',
                    borderRadius: '5px',
                    cursor: 'pointer'
                }}
            >
                New Quote
            </button>
        </div>
    );
};

export default RandomQuoteGenerator;