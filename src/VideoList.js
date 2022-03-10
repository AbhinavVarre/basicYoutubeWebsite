import ReactPlayer from "react-player"; 
import { Rating } from "react-simple-star-rating";
import RatingsElem from "./rating";



const VideoList = ({videos}) => {
    return (
        <div className = "video-list">
        {videos.map(video => (
            <div className="video-preview" key = {video.id}>  
                <h2>{video.title}</h2>
                <div className='player-wrapper'>
                    <ReactPlayer
                    className='react-player fixed-bottom'
                    url= {video.path}
                    width='50%'
                    height='50%'
                    controls = {true}
                />
                </div>
                <RatingsElem avg_rating = {video.avg_rating} num_ratings = {video.num_ratings} />
                <p>Uploaded by {video.submit_user}</p>
                <p>Submit date:  {video.submit_date}</p>
            </div>
        ))}
        </div>
    );
}

export default VideoList;