import { useEffect, useState } from 'react';
import VideoList from "./VideoList";
const Home = () =>{
    const [videos, setVideos] = useState(null);

    useEffect(() => {
    fetch('http://localhost:8000/videos')
      .then(res => {
        return res.json();
      })
      .then(data => {
        setVideos(data);
      });
  }, []);

  return (
    <div className='home'>
        {videos && <VideoList videos ={videos}/>}
    </div>
  );
}

export default Home;