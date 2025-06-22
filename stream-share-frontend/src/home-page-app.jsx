import { useEffect, useState, useSyncExternalStore } from 'react';
import React from 'react';


function HomePage () {

    const [videos, SetVideos] = useState([]);

    useEffect(() => {fetchVideos();}, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch("http://127.0.0.1:8000/api/videos/")
            const data = await response.json()
            SetVideos(data);
        } catch (err) {
            console.log(err)
        }
    }

    return (
    <>
        <div>
            <h1>Home Page App</h1>
        </div>
        <div>
        {videos.map((video) => (
            <div style={{ backgroundColor: 'blue', fontSize: '16px', padding: '8px', margin: '20px' }}>
                <p>Title: {video.name}</p>
                <p>Description: {video.thumbnail_location}</p>
            </div>
        ))}
        </div>
    </>
    );
};

export default HomePage;
