import React from 'react';
import "../components/css/chart.css"

const Chart = () => {
    return (
        <iframe
        title='Chart'
        className='chart'
        src='https://info.uniswap.org/#/'
        frameBorder='0'
        width={window.innerWidth}
        height={window.innerHeight}
        >
        </iframe>
    )
}

export default Chart;