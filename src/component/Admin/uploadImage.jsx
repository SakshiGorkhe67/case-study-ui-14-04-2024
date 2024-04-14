import React, { useState } from 'react';
import axios from 'axios';

const ImageUpload = () => {
    const [file, setFile] = useState(null);

    const handleFileChange = (e) => {
        setFile(e.target.files[0]);
    };

    const handleUpload = async () => {
        if (!file) {
            alert('Please select an image.');
            return;
        }

        const formData = new FormData();
        formData.append('file', file);

        try {
            await axios.post('http://localhost:8080/saveImage', formData, {
                headers: {
                    'Content-Type': 'multipart/form-data'
                }
            });
            alert('Image uploaded successfully!');
        } catch (error) {
            console.error('Error uploading image:', error);
            if (error.response) {
                // The request was made and the server responded with a status code
                // that falls out of the range of 2xx
                console.error('Server responded with status:', error.response.status);
                console.error('Response data:', error.response.data);
                alert('Failed to upload image. Server responded with status: ' + error.response.status);
            } else if (error.request) {
                // The request was made but no response was received
                console.error('No response received from server.');
                alert('Failed to upload image. No response received from server.');
            } else {
                // Something happened in setting up the request that triggered an Error
                console.error('Error setting up request:', error.message);
                alert('Failed to upload image. Error setting up request: ' + error.message);
            }
        }
    };

    return (
        <div>
           
           <input type="file" onChange={handleFileChange} />
           <button class="btn btn-secondary" onClick={handleUpload}>Upload Image</button>           
      
       
        </div>
    );
};

export default ImageUpload;
