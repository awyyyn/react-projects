import axios from "axios"


const baseURL = 'https://exercisedb.p.rapidapi.com'
const headers = {
    'X-RapidAPI-Key':  import.meta.env.VITE_API_KEY,
    'X-RapidAPI-Host':  import.meta.env.VITE_API_HOST
}

export const getExercises = async() => {
    const response = await axios.get('/exercises', {
        headers,
        baseURL
    })
 
    return  response.data
}


export const getBodyParts = async () => {
    const response = await axios.get('/exercises/bodyPartList', {
        baseURL,
        headers
    })

    return response.data
}

export const getByBodyParts = async(bodyPart: string) => {
    const response = await axios.get(`/exercises/bodyPart/${bodyPart}`, {
        baseURL, headers
    })

    return response.data
}

export const getExerciseById = async(id: string) => {
    const response = await axios.get(`/exercises/exercise/${id}`, {
        baseURL, headers
    });
    return response.data
};


export const getYoutubeResult = async(search: string) => {
    const response = await axios.get(`https://youtube138.p.rapidapi.com/search/`, {
        params: {
            q: search
        },
        headers: {
            'X-RapidAPI-Key': import.meta.env.VITE_YT_API_KEY,
            'X-RapidAPI-Host': import.meta.env.VITE_YT_API_HOST
        }
    });

    return response.data.contents
}