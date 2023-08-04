import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CoinApi, CoinsApi } from '../global/types';

const URL = 'https://coinranking1.p.rapidapi.com'

const headers = {
    'X-RapidAPI-Key': 'e46650d1aemsh5ae50b14a37687ap1b8169jsn963cc8eb03bc',
    'X-RapidAPI-Host': 'coinranking1.p.rapidapi.com'
} 

const createRequest = (url: string) => ({url, headers: headers})

export const cryptoAPI = createApi({
    reducerPath: 'cryptoApi',
    baseQuery: fetchBaseQuery({baseUrl: `${URL}`}),
    endpoints: build => ({
        getCrypto: build.query<CoinsApi, number>({
            query: (count) =>  createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetail: build.query<CoinApi, string>({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoHistory: build.query({
            query: ({coinId, timePeriod}: {coinId: string, timePeriod: string}) => createRequest(`/coin/${coinId}/history?timePeriod=${timePeriod}`)
        }),
        getCryptoExchanges: build.query({
            query: () => createRequest('/exchanges')
        })
    })
});


export const {
    useGetCryptoQuery, useGetCryptoDetailQuery, useGetCryptoHistoryQuery, useGetCryptoExchangesQuery
} = cryptoAPI

// coin/Qwsogvtv82FCd/exchanges