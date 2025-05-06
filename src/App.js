import React, { useState } from 'react';
import Webcam from 'react-webcam';
import './App.css'; // Optional: if you want to style the page

function App() {
    // State for handling the webcam capture and video
    const [isRecording, setIsRecording] = useState(false);
    const [videoUrl, setVideoUrl] = useState(null);
    const webcamRef = React.useRef(null); // Ref for webcam

    // Start recording - You can extend this to use MediaRecorder API for full video recording
    const startRecording = () => {
        setIsRecording(true);
        // Here you can add functionality for starting a recording (e.g., using MediaRecorder)
    };

    // Stop recording and capture the image
    const stopRecording = () => {
        setIsRecording(false);
        const imageSrc = webcamRef.current.getScreenshot(); // Capturing the screenshot from the webcam
        setVideoUrl(imageSrc); // Saving the captured image URL to state
    };

    return (
        <div className="App">
            <h1>TikTok Clone with React Webcam</h1>
            <div className="webcam-container">
                {/* Display webcam view */}
                <Webcam
                    audio={true}
                    ref={webcamRef}
                    screenshotFormat="image/jpeg"  // Format of the captured image
                    width="100%"  // Full-width for responsive design
                    videoConstraints={{
                        facingMode: 'user',  // This makes the webcam default to front-facing camera
                    }}
                />
            </div>
            <div className="controls">
                {/* Start/Stop buttons */}
                <button onClick={startRecording} disabled={isRecording} className="record-btn">
                    Start Recording
                </button>
                <button onClick={stopRecording} disabled={!isRecording} className="stop-btn">
                    Stop Recording
                </button>
            </div>
            <div className="captured-image">
                {/* Display captured image after stop */}
                {videoUrl && <img src={videoUrl} alt="Captured" />}
            </div>
        </div>
    );
}

export default App;
