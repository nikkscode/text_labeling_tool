import React from 'react';

function TextDisplay({ text }) {
    return (
        <div style={{ whiteSpace: 'pre-wrap', marginTop: '10px' }}>
            {text}
        </div>
    );
}

export default TextDisplay;