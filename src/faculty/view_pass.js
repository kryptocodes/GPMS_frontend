import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { getFacultyPass,updateStatus } from '../auth/pass' 
import { isAuthenticated } from '../auth'
import Empty from '../assets/empty.svg'


const ViewPass = () => {
    
    const [values,setValues] = useState([])


    const {user,token} = isAuthenticated()

    const preload = () => {
        getFacultyPass(user._id,token)
        .then(data => {
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

    const onSubmit = (passId,status) => {
        console.log(status)
        updateStatus(user._id,token,passId,status)
        .then(data => {
            if(data.error){
                console.log(data.error)
            }
            else{
                preload()
                console.log(data)
            }
        })
    }

    const goBack = () => {
        return(
        <div className="mt-2 ml-3">
        <Link className="btn btn-lg btn-warning mb-3" to="/faculty/dashboard">Back</Link>
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
        <div className="jumbotron-fluid">
        {values && values.map((pass,index)=> (
            <ul className="list-group">
            <div className="card my-4 p-4" key={index}>
                    <h4 className="card-header row m-0 bg-dark text-white bd-highlight">
                        <div className="col-md-8">
                        <span><span className="badge badge-success flex-grow-1 mr-2">Name:</span>{pass.info.name}</span>
                        </div>
                        <div className="col-md-4">
                        <span><span className="badge badge-success mr-2">Pass type</span>{pass.pass_type}</span>
                        </div>
                     </h4>
        <div className="d-flex flex-column">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Expected leaving time:</span>{pass.exp_dep_time}
        </li>
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Expected arrival time:</span>{pass.exp_arr_time}
        </li>
        </div>
        {(pass.pass_type === "HomePass") && (
        <div className="d-flex flex-row">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">From:</span>{pass.from_date}
        </li>
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">To:</span>{pass.to_date}
        </li>
        </div>)}
        <div className="row m-0">
        <li className="list-group-item flex-grow-1">
            <p className="text-justify"><span className="badge badge-success mr-2">Reason:</span>{pass.reason}</p>
        </li>
        <div className="d-flex">
        <button onClick={() =>{onSubmit(pass._id,{status:"Approved"})}}  type="button" className="btn btn-sm btn-warning mr-3">Approve</button>
        <button type="button" className="btn btn-sm btn-danger">Decline</button>
        </div>
        </div>
        </div>
        </ul>
        ))}      
        </div>
        </React.Fragment>         
    )

    return (
        <Base title="Manage Pass">
        <div className="container p-2 mx-auto">
        {passinfo()}
        </div>
        </Base>
    )
}

export default ViewPass
