import './Chart.css';
import ChartBar from './ChartBar';
const Chart=(props)=>{
    const chartvalues=props.dataPoints.map((datavalue)=>(datavalue.value));
    let sum = chartvalues.reduce(function (accumulator, curValue) {

        return accumulator + curValue
      
      }, 0)
    // console.log(sum);
    return <div className='chart-box'>
        {
            props.dataPoints.map(datapoint=>(
                <ChartBar
                key={datapoint.label}
                value={datapoint.value}
                maxvalue={sum}
                label={datapoint.label}
                />
            ))
        }

    </div>;
}
export default Chart;