import { useGetCryptoQuery } from "../api/cryptoAPI"
import { useEffect, useState } from 'react' 
import Cryptos from "../components/Cryptos";
import { coins } from "../global/types";
import { Input } from "antd";
import Loading from "../components/Loading";


const CyptoCurrencies = () => {
    
    const [cryptos, setCryptos] = useState<coins[] | undefined>()
    const { data, isFetching } = useGetCryptoQuery(100);
    const [search, setSearch] = useState('')

    useEffect(() => {   
        
        const searchFilter = data?.data.coins?.filter((coin) => coin.name.toLowerCase().includes(search.toLowerCase()));
         
        setCryptos(searchFilter)  

    }, [cryptos, data, search])
 

    if(isFetching) return <Loading />

    return (
        <> 
            <div className="search">    
                <Input.Search
                    style={{width: 300, marginBottom: 30}}
                    placeholder="Search..."
                    size="large"
                    onChange={(e) => setSearch(e.target.value)}
                /> 
            </div>
            <Cryptos cryptos={cryptos} /> 
        </>
    )
}

export default CyptoCurrencies