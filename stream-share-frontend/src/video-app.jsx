import { useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import axios from 'axios';


function VideoPlayer() {

  const { id } = useParams();
  const videoUrl = import.meta.env.VITE_GET_VIDEO_API_URL + id;

  const [video, setVideo] = useState(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    if (!id) return;

    const fetchVideo = async () => {
      try {
        const response = await axios.get(videoUrl);
        setVideo(response.data);
      } catch (error) {
        console.error("cannot get video", error);
      } finally {
        setLoading(false);
      }
    };

    fetchVideo();
  }, [id]);

  console.log(video)

  if (loading) return <p>Loading...</p>;
  if (!video || !video.video_location) return <p>Video not found or missing URL</p>;

  return (
    <div>
      <h1>{video.name}</h1>
      <video key={video.video_location} src={video.video_location} controls width="600" />
    </div>
  );
}


export default VideoPlayer;
