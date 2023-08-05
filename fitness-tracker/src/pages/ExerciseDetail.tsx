import { useParams } from "react-router-dom"
import { useEffect, useState } from 'react';
import { getExerciseById, getYoutubeResult } from "../utils/api";
import { exercise, videos } from '../utils/type';
import bodyImage from '../assets/icons/body-part.png'
import targetImage from '../assets/icons/target.png'
import equipImage from '../assets/icons/equipment.png';
import { VideoCard } from "../components";


const ExerciseDetail = () => {

    const [isLoading, setIsLoading] = useState(true);
    const [isVideosLoading, setIsVideosLoading] = useState(true)
    const [exercise, setExercise] = useState<exercise>();
    const [searchRes, setSearchRes] = useState<videos[]>(); 
    const { exerciseId }  = useParams();

    useEffect(() => {
        const getExerciseDetail = async () => {
            if(exerciseId){
                const data = await getExerciseById(exerciseId);
                setExercise(data)
                console.log(data)
                const searchData = await getYoutubeResult(data.name)
                setSearchRes(searchData.slice(0, 10))
                setIsVideosLoading(false)
            } 
            setIsLoading(false) 
        }
        getExerciseDetail(); 

    }, []);
 
    console.log("asd", searchRes);

    const extraDetail = [
        {
            icon: bodyImage,
            name: exercise?.bodyPart
        },
        {
            icon: targetImage,
            name: exercise?.target
        },
        {
            icon: equipImage,
            name: exercise?.equipment
        }
    ]
   
    return (
        <>
            <section className="px-10 sm:px-16 md:px-28 lg:px-48">
                {isLoading ?
                    <div className="flex flex-col md:flex-row gap-y-5 gap-x-10  py-10 ">  
                    <div className="w-full md:w-[50%] ">
                        <div className="animate-pulse bg-gray-200 rounded-lg h-[300px] mg:h-[450px] lg:h-[500px] mx-auto" />
                    </div>
                    <div className="w-full md:w-[50%] space-y-5 lg:space-y-7 flex flex-col justify-center "> 
                        <h1 className="capitalize text-5xl font-semibold bg-gray-200 animate-pulse rounded-lg delay-500" >&nbsp;</h1>
                        <p className="text-lg h-24 animate-pulse bg-gray-200 rounded-lg delay-500"> 
                        </p> 
                        <div className="space-y-5">
                            {extraDetail.map((_, i) => (
                                <div className="flex gap-x-5 items-center" key={i}>
                                    <div
                                        className="h-16 w-16 animate-pulse bg-gray-200 rounded-full delay-500"
                                    />
                                    <h3 className="text-2xl animate-pulse bg-gray-200 rounded-lg w-[88%] delay-500">&nbsp;</h3>                            
                                </div>
                            ))}
                        </div>
                    </div>  
                    </div> : 
                    <> 
                        <div className="flex flex-col md:flex-row gap-y-5 gap-x-10  py-10 ">
                            <div className="w-full md:w-[50%] ">
                                <img src={exercise?.gifUrl} className="bg-contain h-[300px] mg:h-[450px] lg:h-[500px] mx-auto" />
                            </div>
                            <div className="w-full md:w-[50%] space-y-5 lg:space-y-7 flex flex-col justify-center "> 
                                <h1 className="capitalize text-5xl md:max-w-[80%]  font-semibold">{exercise?.name}</h1>
                                <p className="text-lg md:max-w-[80%]">
                                    Exercise keep you strong. <span className="capitalize font-bold">{exercise?.name}</span>
                                    is one of the best exercises to target your <span className="capitalize font-bold">{exercise?.target}</span>.
                                    It will help you improve mood and gain energy.
                                </p> 
                                <div className="gap-y-5 mt-5 flex flex-row md:flex-col flex-wrap justify-evenly md:justify-normal" >
                                    {extraDetail.map(({icon, name}, i) => (
                                        <div className="flex gap-x-5 items-center" key={i}>
                                            <img 
                                                src={icon}
                                                className="h-16 w-16 drop-shadow-md bg-slate-100 rounded-full p-1"
                                            />
                                            <h3 className="text-xl lg:text-2xl capitalize font-semibold">{name}</h3>                            
                                        </div>
                                    ))}
                                </div>
                            </div>
                        </div> 
                        
                        <div className="mt-10 pb-10">
                            <h1 className="text-3xl mb-10">Watch <span className="text-primary capitalize">{exercise?.name}</span> exercise videos</h1>
                            <div className="flex justify-center md:justify-evenly flex-wrap gap-10">
                                {isVideosLoading === false && searchRes ? 
                                    searchRes.map(video => (
                                        <VideoCard
                                            key={video.video.videoId}
                                            video={video.video}
                                        /> 
                                    ))
                                    :   
                                    [1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map(num => (
                                        <div className="min-w-[230px] h-[250px]  space-y-4 shadow-lg " key={num}>
                                            <div className="bg-slate-200 animate-pulse w-full h-[160px]" />
                                            <div className="bg-slate-200 animate-pulse delay-500  mx-4 h-[20px]" />
                                            <div className="bg-slate-200 animate-pulse delay-1000 mx-4 h-[20px]" />
                                        </div>
                                    ))
                                }
                            </div>
                        </div>
                    </>
                }
            </section>
        </>
    )
}

export default ExerciseDetail