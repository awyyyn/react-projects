import { useState, useCallback } from 'react';
import { useParams } from "react-router-dom";
import { useGetCryptoDetailQuery, useGetCryptoHistoryQuery } from "../api/cryptoAPI";
import { LineChart, LoadingUI } from "../components";
import { Col, Divider, Row, Select, Skeleton, Typography } from "antd";
import { AiOutlineDollarCircle, AiOutlineCheck, AiOutlineStop, AiOutlineNumber, AiFillFund, AiOutlineTrophy, AiOutlineThunderbolt, AiOutlineExclamationCircle , AiOutlineMoneyCollect } from 'react-icons/ai'
import millify from "millify";  


 

const CryptoDetails = () => {

    const { coinId } = useParams();
    const { data, isFetching } = useGetCryptoDetailQuery(coinId ? coinId : 'Qwsogvtv82FCd')
    const times = ['3h', '24h', '7d', '30d', '1y', '3m', '3y', '5y'];
    const [timePeriod, setTimePeriod] = useState(times[2]);
    const { data: coinHistory, refetch, isFetching: fetchingHistory } = useGetCryptoHistoryQuery({coinId: coinId ? coinId : 'Qwsogvtv82FCd' , timePeriod})
    const [historyData, setHistoryData] = useState(coinHistory)
 

    useCallback(() => {  
        setHistoryData(coinHistory);
    }, [timePeriod]) ; 

    if(isFetching) return <LoadingUI />   

     

    const stats = [
      { title: 'Price to USD', value: `$ ${data?.data?.coin?.price && millify(Number(data?.data?.coin?.price))}`, icon: <AiOutlineDollarCircle /> },
      { title: 'Rank', value: data?.data?.coin?.rank, icon: <AiOutlineNumber /> },
      { title: '24h Volume', value: `$ ${data?.data?.coin?.["24hVolume"] && millify(Number(data?.data?.coin?.["24hVolume"]))}`, icon: <AiOutlineThunderbolt /> },
      { title: 'Market Cap', value: `$ ${data?.data?.coin?.marketCap && millify(Number(data?.data?.coin?.marketCap))}`, icon: <AiOutlineDollarCircle /> },
      { title: 'All-time-high(daily avg.)', value: `$ ${data?.data?.coin?.allTimeHigh?.price && millify(Number(data?.data?.coin?.allTimeHigh?.price))}`, icon: <AiOutlineTrophy /> },
    ];
  
    const genericStats = [
      { title: 'Number Of Markets', value: data?.data?.coin?.numberOfMarkets, icon: <AiFillFund /> },
      { title: 'Number Of Exchanges', value: data?.data?.coin?.numberOfExchanges, icon: <AiOutlineMoneyCollect /> },
      { title: 'Aprroved Supply', value: data?.data?.coin?.supply?.confirmed ? <AiOutlineCheck /> : <AiOutlineStop />, icon: <AiOutlineExclamationCircle /> },
      { title: 'Total Supply', value: `$ ${data?.data?.coin?.supply?.total && millify(Number(data?.data?.coin?.supply?.total))}`, icon: <AiOutlineExclamationCircle /> },
      { title: 'Circulating Supply', value: `$ ${data?.data?.coin?.supply?.circulating && millify(Number(data?.data?.coin?.supply?.circulating))}`, icon: <AiOutlineExclamationCircle /> },
    ];


    return (
        <>
            <Row wrap>
                <Col xs={24} style={{textAlign: 'center'}}>
                    <Typography.Title>
                        {data?.data?.coin.name} ({data?.data?.coin.symbol})
                    </Typography.Title>
                    <Typography.Paragraph>
                        {data?.data.coin.name} live price in Us Dollars.
                        View value statistics, market cap and supply.
                    </Typography.Paragraph>
                </Col>
            </Row>
            <Row style={{marginBlock: 20}}>
                <Col xs={24} style={{paddingLeft: '5vw'}}>
                    <Select style={{minWidth: 120}} defaultValue={timePeriod} onChange={(val) => {
                        setTimePeriod(val)
                        refetch();
                    }} >
                        {times.map(time => (
                            <Select.Option key={time}>{time}</Select.Option>
                        ))}
                    </Select>
                </Col> 
            </Row>  
            <Skeleton loading={fetchingHistory} active>
                <LineChart 
                    coinHistory={historyData?.data ?  historyData?.data : coinHistory?.data} 
                    currentPrice={millify(Number(data?.data.coin.price))} 
                    coinName={data?.data?.coin.name ? data.data.coin.name : "Bitcoin"}
                /> 
            </Skeleton>
            <Row wrap gutter={[50, 50]}   >
                <Col xs={24} lg={12} >
                    <div className="w-full "> 
                        <div className="basic-stats">
                            <Typography.Title level={2} className="stats-title">
                                {data?.data.coin.name} Value Statistics
                            </Typography.Title>
                            <Typography.Paragraph className="stats-desc">
                                An overview showing the stats of {data?.data.coin.name}
                            </Typography.Paragraph>
                            <div className="stats" >
                                {stats.map(({icon, title, value}, i) => (  
                                    <div className="" key={i} >
                                        <div>
                                            <div className="stats-icon"> 
                                                <Typography.Text strong >
                                                    {icon}
                                                </Typography.Text>
                                                <Typography.Text>
                                                    {title}
                                                </Typography.Text>
                                            </div>
                                            <Typography.Text strong className="stats-value">
                                                {value}
                                            </Typography.Text>
                                        </div>
                                        <Divider />
                                    </div>  
                                ))}
                            </div> 
                        </div> 
                    </div> 
                </Col>
                <Col xs={24} lg={12}>
                    <div className="w-full "> 
                        <div className="basic-stats">
                            <Typography.Title level={2} className="stats-title">
                                {data?.data.coin.name} Value Statistics
                            </Typography.Title>
                            <Typography.Paragraph className="stats-desc">
                                An overview showing the stats of {data?.data.coin.name}
                            </Typography.Paragraph>
                            <div className="stats" >
                                {genericStats.map(({icon, title, value}, i) => (  
                                    <div className="" key={i} >
                                        <div>
                                            <div className="stats-icon"> 
                                                <Typography.Text strong >
                                                    {icon}
                                                </Typography.Text>
                                                <Typography.Text>
                                                    {title}
                                                </Typography.Text>
                                            </div>
                                            <Typography.Text strong className="stats-value">
                                                {value}
                                            </Typography.Text>
                                        </div>
                                        <Divider />
                                    </div>  
                                ))}
                            </div> 
                        </div> 
                    </div> 
                </Col>
            </Row>
            <Row style={{marginTop: 30}}>
                <Col xs={24} lg={12} style={{textAlign: 'center', marginBlock: 30}} >
                    <Typography.Title>
                        {data?.data.coin.name}
                    </Typography.Title>
                    <Typography.Paragraph style={{maxWidth: 500, marginInline:'auto'}}>
                        {data?.data.coin.description}
                    </Typography.Paragraph>
                </Col> 
                <Col xs={24} lg={12}>
                    <h1 className="text-center link-title">{data?.data.coin.name} links</h1>
                    <div className="crypto-links">    
                        {data?.data.coin.links.map((link, i) => (
                            <div key={i}>
                                <div className="link" key={i}>
                                    <h3>{link.type}</h3>
                                    <a href={link.url} target="_blank">
                                        <h4> 
                                            {link.name}
                                        </h4>
                                    </a>
                                </div>
                                <Divider />
                            </div>
                        ))} 
                    </div>
                </Col>
            </Row>
        </>
    )
}

export default CryptoDetails