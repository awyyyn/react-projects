import { Avatar, Col, Collapse, Input, Row, Typography } from "antd"
import { useGetCryptoQuery } from "../api/cryptoAPI"
import { LoadingUI } from "../components";
import { useEffect, useState } from 'react'; 
import millify from "millify";
import { coins } from "../global/types";




const Exchanges = () => {

    const { data, isFetching } = useGetCryptoQuery(100);
    const [search, setSearch] = useState('')
    const [cryptos, setCryptos] = useState<coins[] | undefined>()
    
    useEffect(() => {   
        
        const searchFilter = data?.data.coins?.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
         
        setCryptos(searchFilter)  

    }, [cryptos, data, search])


    if(isFetching) return <LoadingUI />
    
    

    return (
        <>
            <Row wrap>
                 <Col span={24}> 
                    <div className="search">    
                        <Input.Search
                            style={{width: 300, marginBottom: 30}}
                            placeholder="Search..."
                            size="large"
                            value={search}
                            onChange={(e) => setSearch(e.target.value)}
                        /> 
                    </div>
                 </Col>
            </Row>
            <Row>
                <Col span={6}>Exchanges</Col>
                <Col span={6}>24h Trade Volume</Col>
                <Col span={6}>Markets</Col>
                <Col span={6}>Change</Col>
            </Row>
            <Row>
                {cryptos?.map(coin => (
                    <Col span={24} key={coin.uuid}>
                        <Collapse>
                            <Collapse.Panel
                                key={coin.uuid}
                                showArrow={false}
                                header={(
                                    <Row wrap>
                                        <Col span={6} className="exchanges-name">
                                            <Typography.Text strong>
                                                {coin.rank}
                                            </Typography.Text>
                                            <Avatar src={coin.iconUrl} alt={coin.symbol} shape="circle" style={{height: 30}} />
                                           
                                        </Col>
                                        <Col span={6}>
                                            $ {millify(Number(coin["24hVolume"]))}
                                        </Col>
                                        <Col span={6}>
                                            {millify(Number(coin.marketCap))}
                                        </Col>
                                        <Col span={6}>
                                            {millify(Number(coin.change))}%
                                        </Col>
                                    </Row>
                                    
                                )}
                            >
                                {coin.description}
                            </Collapse.Panel>
                        </Collapse>
                    </Col>
                ))}
            </Row>
        </>
    )
}

export default Exchanges