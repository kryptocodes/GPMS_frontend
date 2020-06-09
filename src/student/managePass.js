import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { getUserPass } from '../auth/pass' 
import { isAuthenticated } from '../auth'
import Empty from '../assets/empty.svg'
import LoadingScreen from '../Home/loadingScreen'
import 'antd/dist/antd.css'
import { Modal } from 'antd'
import QR_code from './qrcode'

const ManagePass = () => {
    
    const [values,setValues] = useState([])

    const [loading,setLoading] = useState(true)

    const {user,token} = isAuthenticated()

    const preload = () => {
        getUserPass(user._id,token)
        .then(data => {
            console.log(data)
            if(data.error){
                console.log(data.error)
            } else{
                setValues(data)
                setLoading(false)
            }
        })
        }

    useEffect(() => {
        preload()
    },[])

    const goBack = () => {
        return(
        <div className="mt-2 ml-3">
        <Link className="btn btn-lg btn-warning mb-3" to="/dashboard">Back</Link>
        </div>
    )}

    const qrcode = (passId) => {
        console.log(passId)
        Modal.confirm({
            title: "Pass",
            content: (
                <div>
                {QR_code(passId)}
                </div>
            ),
          })
    }

    const passinfo = () => (
        <React.Fragment>
        {goBack()}
        {(values.length === 0) &&
        (<img src={Empty} className="rounded d-block mx-auto w-75" 
         alt="empty"/>)
        }
        <div className="jumbotron-fluid">
        {values && values.map((pass,index) => (
            <ul className="list-group" key={index}>
            <div className="card my-4 p-4">
                    <h4 className="card-header row m-0 bg-dark text-white bd-highlight">
                        <div className="col-md-8">
                        <span><span className="badge badge-success flex-grow-1 mr-2">Pass id:</span>{pass._id}</span>
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
        <div className="d-flex flex-row">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Status:</span>{pass.status}
        </li>
       
        {(pass.status === "Approved") && (
            <button 
                className="btn btn-warning"
                onClick={() => {qrcode(pass._id)}} >
                Generate QR
            </button>
        )}
        {(pass.status === "Under Process") && (
            <Link className="btn p-1 btn-warning mr-2"  to={`/student/pass/editpass/${pass._id}`}>
            <button 
                className="btn p-2 btn-warning">Edit</button>
            </Link> 
        )}
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
        {loading ? LoadingScreen() : (
        <React.Fragment> 
        {passinfo()} 
        </React.Fragment>)}
        </div>
        </Base>
    )
}

export default ManagePass
