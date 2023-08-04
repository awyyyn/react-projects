
import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'


const headers =  {
    'X-BingApis-SDK': 'true',
    'X-RapidAPI-Key': 'e46650d1aemsh5ae50b14a37687ap1b8169jsn963cc8eb03bc',
    'X-RapidAPI-Host': 'bing-news-search1.p.rapidapi.com'
}

const baseURL = "https://bing-news-search1.p.rapidapi.com/"

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