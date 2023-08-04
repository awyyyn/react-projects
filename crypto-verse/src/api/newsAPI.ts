
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const headers =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': import.meta.env.VITE_NEWS_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_NEWS_API_HOST
}

const baseURL = import.meta.env.VITE_NEWS_API_URL;

const createRequest = (url: string) => ({url, headers: headers});

export const newsAPI = createApi({
    reducerPath: 'cryptoNewsApi',
    baseQuery: fetchBaseQuery({baseUrl: baseURL}),
    endpoints: (builder) => ({
        getCryptoNews: builder.query({
            query: ({newsCategory, count}) => createRequest(`/news/search?q=${newsCategory}&safeSearch=Off&textFormat=Raw&freshness=Day&count=${count}`)
        })
    })
})

export const { useGetCryptoNewsQuery } = newsAPI