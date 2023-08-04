import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { CoinApi, CoinsApi } from '../global/types';

const URL = import.meta.env.VITE_CRYPTO_API_URL

const headers = {
    'X-RapidAPI-Key': import.meta.env.VITE_CRYPTO_API_KEY,
    'X-RapidAPI-Host': import.meta.env.VITE_CRYPTO_API_HOST
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