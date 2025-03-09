import React, { useState } from 'react';
import TextDisplay from './components/TextDisplay';
import FileInput from './components/FileInput';

function App() {
    const [text, setText] = useState('');

    const handleFileLoaded = (fileContent) => {
        setText(fileContent);
    };

    return (
        <div style={{ padding: '20px' }}>
            <FileInput onFileLoaded={handleFileLoaded} />
            <TextDisplay text={text} />
        </div>
    );
}

export default App;