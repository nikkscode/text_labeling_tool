export const readFileContent = (file, callback) => {
  if (file && file.type === 'text/plain') {
      const reader = new FileReader();
      reader.onload = (event) => {
          callback(event.target.result);
      };
      reader.readAsText(file);
  } else {
      alert('Please select a valid text file.');
      callback('');
  }
};