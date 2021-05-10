import React, {useEffect, useState} from 'react'
import { useHistory } from "react-router-dom";
import Axios from 'axios'
import Page2 from './page2'  

const Page1 = (props) => {

    const [data, setData] = useState([])
    const [showPage, setShowPage] = useState(false)

    let history = useHistory();
    console.log("data",data)


    const handleClick = () => {
      setShowPage(true)
        props.history.push({pathname:"/page2", state:data});
    }

    async function getData() {
        const response = await Axios.get('https://jsonplaceholder.typicode.com/users')
        console.log("response", response); 
        setData(response.data) 
    }

    useEffect(() => {
        getData();
    },[])



    return (
        <div>
            <h1>Page1</h1>
       
            <table className="table">
  <thead>
    <tr>
      <th scope="col">#</th>
      <th scope="col">Name</th>
      <th scope="col">User Name</th>
      <th scope="col">Email</th>
      <th scope="col">Phone</th>
    </tr>
  </thead>
  {data && data.map((val, index) => 
  
  <tbody>
    <tr>
      <th scope="row">{val.id}</th>
      <td>{val.name}</td>
      <td>{val.username}</td>
      <td>{val.email}</td>
      <td>{val.phone}</td>
    </tr>
  </tbody> 
  )}
</table>
            <button type="button" className="btn btn-primary" onClick={handleClick}>Next Page</button>
{showPage === true ? 
<Page2 data={data} setData={setData} showPage={showPage} /> : <></>}
        </div>
        
    )
}

export default Page1
