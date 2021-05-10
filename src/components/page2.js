import React, {useState, useEffect} from 'react'
import { Doughnut } from 'react-chartjs-2'
import { useLocation } from 'react-router-dom'

function Page2 (props) {
    const [value, setValue ] = useState([])
 //const {data} = props
 const location = useLocation();

 useEffect(() => {
   // console.log("propsValue", location)
    chartData();
}, [])

const chartData = () => { 
    location.state.forEach(element => {
    setValue(element.id)
    return element
})};

console.log("chardData",value);


    console.log("props",props.location.state);

    const data = {
        labels:['Jan', 'Feb','Mar', 'Apr', 'May'],
        datasets:[
            {
                label: 'Sales for 2020(M)',
                data: [3, 2, 2, 1, 5],
                backgroundColor:[
                    'rgba(255,99,132,1)',
                    'rgba(255,206,86,1)',
                    'rgba(54,162,235,1)',
                    'rgba(255,159,64,1)',
                    'rgba(153,102,235,1)'
                ]
            }
        ]
    }

  
    const handleClick = () => {
        props.history.goBack()
    }

    const options = {
        title : {
            display:true,
            text: 'Doughnut Chart'
        }
    }

    return (
        <>
            <h5>Page2</h5>
            <div className="chart">
            <Doughnut data={data} options={options} />
            <button style={{marginTop:"30px"}} type="button" className="btn btn-primary" onClick={handleClick}>Previous Page</button>
            </div>
        </>
    )
}

export default Page2
