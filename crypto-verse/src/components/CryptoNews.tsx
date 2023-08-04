import { Card, Col, Row, Skeleton, Typography } from 'antd' 
import { news } from '../global/types';
import moment from 'moment' 

const CryptoNews = ({ news: cryptoNews, isLoading }: { news: news[],  isLoading?: boolean}) => { 
 

    return (
        <Row gutter={[36, 36]} style={{gridAutoFlow: 'dense'}}>
            {cryptoNews?.map((news, i) => (
                <Col xs={24} sm={12} lg={6} key={i}>
                    <a href={news.url} target='_blank' >  
                    <Card  
                        loading={isLoading}
                        hoverable  
                        cover={
                            <Skeleton loading={isLoading}>
                                <img src={news?.image?.thumbnail?.contentUrl ? news?.image?.thumbnail?.contentUrl : 'https://nbhc.ca/sites/default/files/styles/article/public/default_images/news-default-image%402x_0.png?itok=B4jML1jF'}  
                                    height={200}
                                    style={{backgroundSize: 'contain'}}
                                    alt={news?.image?.thumbnail?._type} />
                            </Skeleton>
                        }
                    > 
                            <Typography.Title level={5}>
                                {news.name}
                            </Typography.Title>
                            <p>
                                {news.description.length > 100 ? 
                                    `${news.description.substring(0, 100)}...` : news.description
                                }
                            </p>
                            <div className='card-footer'>
                                <div>   
                                    <img src={news?.provider[0]?.image?.thumbnail?.contentUrl} height={20} />
                                    <Typography.Text>
                                        {news?.provider[0]?.name}
                                    </Typography.Text>
                                </div>
                                <Typography.Text>
                                    {moment(news.datePublished).startOf('seconds').fromNow()}
                                </Typography.Text>
                            </div>
                        </Card>
                    </a>
                </Col>
            ))}
        </Row>
    )
}

export default CryptoNews