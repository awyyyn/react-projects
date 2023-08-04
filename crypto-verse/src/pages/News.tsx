
import {  Select, Typography,  Empty } from 'antd'
import { useGetCryptoNewsQuery } from '../api/newsAPI'
import { news } from '../global/types';
import { useGetCryptoQuery } from '../api/cryptoAPI';
import { useEffect, useState } from 'react'; 
import { LoadingUI, CryptoNews } from '../components'; 

const News = () => {
    const [category, setCategory] = useState('CryptoCurrency')
    const { data, isFetching } = useGetCryptoQuery(100); 
    const { data: newsData, isFetching: fetchingNews, refetch } = useGetCryptoNewsQuery({newsCategory: category, count: 10})
    const [cryptosNews, setCryptosNews] = useState<news[]>(newsData?.value);

    useEffect(() => {  
        setCryptosNews(newsData?.value)  

    }, [fetchingNews]);

    if(isFetching) return <LoadingUI />


    return (
        <>
            <Select
                showSearch 
                style={{minWidth: 200, marginBottom: 15}}   
                onChange={(val) => {
                    setCategory(val);
                    refetch()
                }} 
                defaultValue={category}
                // options={[{value: 'CryptoCurrency', label: 'CryptoCurrency'}]}
                dropdownStyle={{backgroundColor: 'white'}}
            >
                <Select.Option key={'CryptoCurrency'} >CryptoCurrency</Select.Option>
                {
                    data?.data?.coins.map(coin => (
                        <Select.Option key={coin.name}>
                            {coin.name}
                        </Select.Option>
                    ))
                } 
            </Select>
                
            <Typography.Title level={2}>
                {category} news
            </Typography.Title>
            {cryptosNews.length < 1 ? 
            <div className='center'>
                <Empty />
            </div>    :   
            <CryptoNews news={cryptosNews} isLoading={fetchingNews} />
            }
        </>
    )
}

export default News