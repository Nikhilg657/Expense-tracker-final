import './ChartBar.css';
const ChartBar=(props)=>{
    let barfilled=0;
    if(props.maxvalue>0)
    {

        barfilled=Math.round((props.value/props.maxvalue)*100)+'%';
        // console.log(barfilled);
    }
    return (
        <div className='chart-Bar'>
            <div className='chartbar-inner'>
                <div className='chartbar-fill' style={{height: barfilled}}> 

                </div>
            </div>
            <div className='chartbar-label'>
               { props.label}
            </div>
        </div>
    )
}
export default ChartBar;