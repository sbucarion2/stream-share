import React from 'react';

function VideoPlayer () {
    return (
        <div>
            <h1>Video Player</h1>
            <video width="740px" height="500px" controls>
                <source src={video} type="video/mp4" />
            </video>
        </div>
    );
};

export default VideoPlayer;
