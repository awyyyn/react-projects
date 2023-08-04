import {
    Chart as ChartJS,
    CategoryScale,
    LinearScale,
    PointElement,
    LineElement,
    Title,
    Tooltip,
    Legend,
} from 'chart.js';
import { Line } from "react-chartjs-2"
import { Row, Col, Typography } from 'antd';
import { lineChartProps } from "../global/types";
 
const LineChart = ({coinHistory, coinName, currentPrice}: lineChartProps) => {
    const coinPrice = [];
    const coinTimestamp = []; 
    ChartJS.register(
        CategoryScale,
        LinearScale,
        PointElement,
        LineElement,
        Title,
        Tooltip,
        Legend
    );

    for(let i = 0; i < coinHistory?.history.length; i++) {
        coinPrice.push(coinHistory?.history[i].price)
        coinTimestamp.push(new Date(coinHistory?.history[i].timestamp * 1000).toLocaleDateString());
    }  
  
    const data = {
        labels: coinTimestamp.reverse(),
        datasets: [
            {
                label: 'Price in USD',
                data: coinPrice.reverse(),
                fill: false,
                backgroundColor: '#0071BD',
                borderColor: '#0071BD'
            }
        ]
    }; 
     

    return (
        <>
            <Row>
                <Col xs={24}> 
                    <div className="flex between">
                        <Typography.Title level={2}  style={{margin: 0}}>
                            {coinName} Price Chart
                        </Typography.Title> 
                        <div className="flex current-price">
                            <Typography.Title level={4} style={{margin: 0}}>
                                {coinHistory.change} 
                            </Typography.Title>
                            <Typography.Title level={4} style={{margin: 0}}>
                                Current {coinName} Price: $ {currentPrice} 
                            </Typography.Title>
                        </div>
                    </div>
                </Col>
            </Row>
            <Line 
                style={{marginInline: 'auto', marginBottom: 30, width: '100%'}}
                id={coinName}
                data={data}
            />
        </>
    )
}

export default LineChart