import { video } from '../utils/type';
import { useState } from 'react';

 

const VideoCard = ({ video }: {video: video }) => {
    
    const [img, setImg] = useState(video.thumbnails[0].url)

    const minutes = Math.floor(video.lengthSeconds / 60);
    const seconnds = video.lengthSeconds % 60;

    return (
        <a href={`https://www.youtube.com/watch?v=${video.videoId}`} target="_blank">
            <div className="max-w-[250px] relative space-y-2 cursor-pointer shadow-xl">
                <span className='absolute bg-white bg-opacity-70 px-2 rounded-full right-2 top-1'>
                    {minutes}:{seconnds}
                </span>
                <img 
                    src={img}
                    onMouseEnter={() => setImg(video?.movingThumbnails[0]?.url)}
                    onMouseLeave={() => setImg(video?.thumbnails[0]?.url)}
                />
                <div className='px-4 pb-4'>   
                    <span className='text-xs'>{video.author.channelId}</span>  
                    <h1 className='font-semibold'>{video.author.title}</h1> 
                    <div className='flex justify-between'>
                        <span className='text-sm'>
                                {video.stats.views} views
                        </span>
                        <span className='text-sm'>
                            {video.publishedTimeText}
                        </span>
                    </div>
                    <p>
                    </p> 
                </div>
            </div>
        </a>
    )
}

export default VideoCard