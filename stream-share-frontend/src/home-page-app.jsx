import { useEffect, useState, useSyncExternalStore } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';


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
    
    const navigate = useNavigate()
    const addVideoClick = () => {navigate('/upload')};

    return (
    <>
        <div>
            <h1>Home Page App</h1>
        </div>
        <button onClick={addVideoClick}>Add Video</button>
        <div>
        {videos.map((video) => (
            <div style={{ backgroundColor: 'blue', fontSize: '16px', padding: '8px', margin: '20px' }}>
                <p>Title: {video.name}</p>
                <img src='http://localhost/media/test_movie/thumbnail.jpg'/>
                {/* <img src='file:///'+{video.thumbnail_location}/> */}
            </div>
        ))}
        </div>
    </>
    );
};

export default HomePage;
