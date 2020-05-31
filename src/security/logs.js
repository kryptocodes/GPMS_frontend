import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { getLogs, } from '../auth/pass' 
import Empty from '../assets/empty.svg'


const ManageLogs = () => {
    
    const [values,setValues] = useState([])


    const preload = () => {
        getLogs()
        .then(data => {
            console.log(data)
            if(data.error){
                console.log(data.error)
            } else{
                setValues(data)
            }
        })
        }

    useEffect(() => {
        preload()
    },[])


    const goBack = () => {
        return(
        <div className="mt-2 ml-3">
        <Link className="btn btn-lg btn-warning mb-3" to="/security/dashboard">Back</Link>
        </div>
    )}

    const passinfo = () => (
        <React.Fragment>
        {goBack()}
        <h1 className="text-center">Displaying {values.length} records</h1>
        {(values.length === 0) &&
        (<img src={Empty} className="rounded d-block mx-auto w-75" 
         alt="empty"/>)
        }
        {values && values.map((pass,index) => (
        <div className="jumbotron-fluid table-responsive-md">
        <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Dept</th>
                <th scope="col">Year</th>
                <th scope="col">Place</th>
                <th scope="col">Pass type</th>
                <th scope="col">Exit Date and Time</th>
                <th scope="col">Entry Date and Time</th>
              </tr>
            </thead>
        
            <tbody key={index}>
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{pass.info.name}</td>
                    <td>{pass.dept}</td>
                    <td>{pass.year}</td>
                    <td>{pass.info.address}</td>
                    <td>{pass.pass_type}</td>
                    <td>{pass.entry}</td>
                    <td>{pass.exit}</td>
                    
                </tr>
            </tbody>
            
            </table>
            
        </div>
        ))} 
        </React.Fragment>         
    )

    return (
        <Base title="Gatepass logs">
        <div className="container p-2 mx-auto">
        {passinfo()}
        </div>
        </Base>
    )
}

export default ManageLogs
