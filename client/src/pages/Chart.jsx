import React from 'react';
import { Button, Card, Link } from "@nextui-org/react"
import "../components/css/chart.css"

const Chart = () => {
    const ref = React.useRef();
    React.useEffect(() => {
            console.log(ref.current?.contentWindow.document.getElementById("root"))
    })

    return (
        <iframe ref={ref} title="Chart" className='chart' src="https://info.uniswap.org/#/"></iframe>

    )
}

export default Chart;