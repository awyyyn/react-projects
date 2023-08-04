 

import { useGetCryptoQuery } from "../api/cryptoAPI"
import { Typography, Row, Col, Statistic } from "antd" 
import millify from "millify"; 
import { Link } from "react-router-dom"; 
import { Cryptos, CryptoNews, LoadingUI } from "../components";  
import { useGetCryptoNewsQuery } from "../api/newsAPI";

const Home = () => {

    const { data, isFetching } = useGetCryptoQuery(10);  
    const { data: newsData, isFetching: fetchingNews } = useGetCryptoNewsQuery({newsCategory: 'CryptoCurrency', count: 10})
    const globalStats = data?.data.stats  
    if(isFetching || fetchingNews) return <LoadingUI />

    return ( 
        <>
            <Typography.Title level={2}>
                Global Crypto Status
            </Typography.Title>
            <Row style={{padding: 10}} > 
                <Col span={12}><Statistic title="Total Cryptocurrencies" value={globalStats?.total} /></Col>
                <Col span={12}><Statistic title="Total Exchanges" value={millify(Number(globalStats?.totalExchanges))} /></Col>
                <Col span={12}><Statistic title="Total Market Cap" value={millify(Number(globalStats?.totalMarketCap))} /></Col>
                <Col span={12}><Statistic title="Total 24h Volume" value={millify(Number(globalStats?.total24hVolume))} /></Col>
                <Col span={12}><Statistic title="Total Markets" value={millify(Number(globalStats?.totalMarkets))} /></Col>  
            </Row>
            <div className="justify-between">
                <Typography.Title style={{marginBlock: 10}} level={2}>
                    Top 10 Cryptocurrencies in the world
                </Typography.Title>
                <Typography.Title style={{marginBlock: 10}} level={3}>
                    <Link to={'/cryptocurrencies'}>
                        Show More
                    </Link>
                </Typography.Title>
            </div> 
            
            <Cryptos cryptos={data?.data.coins} />
            
            <div className="justify-between mt">
                <Typography.Title level={2}>
                    Latest Crypto News
                </Typography.Title>
                <Typography.Title level={5}>
                    <Link to={'/news'} >
                        Show More
                    </Link>
                </Typography.Title>
            </div> 
            <CryptoNews news={newsData.value} />
        </>
    )
}

export default Home