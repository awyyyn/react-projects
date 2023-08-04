

export interface coins {
    '24hVolume': string
    btcPrice: string
    change: string
    coinrankingUrl: string
    color: string
    iconUrl: string
    listedAt: number
    lowVolume: boolean
    description: string
    marketCap: string
    name: string
    price: string
    rank: number
    // sparkline: 
    symbol: string
    numberOfMarkets: number
    numberOfExchanges: number
    tier: number
    tags: string[]
    uuid: string
    websiteUrl: string
    supply: {
        circulating: string
        confirmed: boolean
        max: string
        supplyAt: number
        total: string    
    }
    allTimeHigh: {
        price: string
        timestamp: number
    }
    links: {
        name: string
        type: string
        url: string
    }[]
}

interface stats {
    total: number
    total24hVolume: string
    totalCoins: number
    totalExchanges: number
    totalMarketCap: string
    totalMarkets: number
}

export interface CoinsApi {
    data: {
        coins: coins[]
        stats: stats
    }
    status: string
}

export interface CoinApi {
    data: {
        coin: coins
    }
    status: string
}

export interface news {
    _type: string
    about: {
        _type: string
        name: string
        readLink: string
    }[]
    datePublished: string
    description: string
    image:  image
    mentions: {
        _type: string
        name: string
    }[]
    name: string
    provider: {
        _type: string
        image: image
        name: string
    }[]
    url: string
}

interface image {
    _type: string
    thumbnail: {
        _type: string
        contentUrl: string
        height: number 
        width: number
    }
}


export interface lineChartProps {
    currentPrice: string
    coinName: string
    coinHistory: {
        change: string
        history: {
            price: string
            timestamp: number
        }[]
    }
}
 