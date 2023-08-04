import { Card, Col, Row } from "antd"; 
import { coins } from "../global/types";
import { FC } from 'react'
import { Link } from "react-router-dom";
import millify from "millify";

interface CryptoProps { 
    cryptos: coins[] | undefined
}

const Cryptos: FC<CryptoProps> = ({cryptos}) => { 
     
    return (
        <>
            <Row gutter={[32, 32]} className=""> 
                {cryptos?.map((currency) => (
                    <Col xs={24} sm={12} lg={6} key={currency.uuid} >
                        <Link to={`/crypto/${currency.uuid}`}>
                            <Card
                                title={`${currency.rank}. ${currency.name}`}
                                style={{backgroundColor: 'white'}}
                                extra={<img style={{height: 25, width: 25}} src={currency.iconUrl} alt={currency.name} />}
                                hoverable
                            > 
                                <p>Price: {millify(Number(currency.price))}</p>
                                <p>Market Cap: {millify(Number(currency.marketCap))}</p>
                                <p>Daily Change: {millify(Number(currency.change))}</p>
                            </Card>
                        </Link>
                    </Col>
                ))} 
            </Row>
        </>
    )

    
}

export default Cryptos