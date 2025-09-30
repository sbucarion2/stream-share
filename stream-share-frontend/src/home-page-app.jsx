import { useEffect, useState, useSyncExternalStore } from 'react';
import React from 'react';
import { useNavigate } from 'react-router-dom';
import './home.css'

function HomePage () {

    const [videos, SetVideos] = useState([]);

    useEffect(() => {fetchVideos();}, []);

    const fetchVideos = async () => {
        try {
            const response = await fetch(import.meta.env.VITE_ALL_VIDEOS_API_URL)
            const data = await response.json()
            SetVideos(data);
        } catch (err) {
            console.log(err)
        }
    }
    
    const navigate = useNavigate()
    const addVideoClick = () => {navigate('/upload')};
    const gotoVideo = (id) => {navigate('/videos/' + id)}

    return (
    <>
        <div>
            <h1>Home Page App</h1>
        </div>
        <button onClick={addVideoClick}>Add Video</button>
        <div style={{ backgroundColor: 'black', padding: '20px' }} className="container" name='movie-table'>
            {videos.map((video) => (
                <div style={{ 
                        backgroundColor: 'black', 
                        fontSize: '16px', 
                        padding: '8px', 
                        margin: '20px' }}>
                    <p>{video.name}</p>
                    <img src={video.thumbnail_location} 
                        width="450" 
                        height="800" 
                        onClick={() => gotoVideo(video.id)}/>
                </div>
            ))}
        </div>
    </>
    );
};

export default HomePage;
