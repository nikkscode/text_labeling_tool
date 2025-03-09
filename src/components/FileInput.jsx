import React, { useRef } from 'react';
import { readFileContent } from '../utils/fileUtils';

function FileInput({ onFileLoaded }) {
    const fileInputRef = useRef(null);

    const handleFileChange = (event) => {
        const file = event.target.files[0];
        readFileContent(file, onFileLoaded);
    };

    const handleButtonClick = () => {
        fileInputRef.current.click();
    };

    return (
        <div>
            <input
                type="file"
                accept=".txt"
                onChange={handleFileChange}
                style={{ display: 'none' }}
                ref={fileInputRef}
            />
            <button onClick={handleButtonClick}>Select Text File</button>
        </div>
    );
}

export default FileInput;