import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { getUserPass } from '../auth/pass' 
import { isAuthenticated } from '../auth'


const ManagePass = () => {
    
    const [values,setValues] = useState([])

    const {user,token} = isAuthenticated()

    const preload = () => {
        getUserPass(user._id,token)
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
        preload();
    },[])

    const passstatus = status => {
        if(status <= 2){
            return <p>under process</p>
        } else if(status){
            return <p>Approved</p>
        }
    }

    const goBack = () => {
        return(
        <div className="mt-5">
        <Link className="btn btn-xl btn-warning mb-3" to="/dashboard">Back</Link>
        </div>
    )}

    const passinfo = () => (
        <React.Fragment>
        <h1 className="text-center">Displaying {values.length} records</h1>
        <ul className="container-fluid list-group">
        {values && values.map((pass,index)=> (
            <div key={index}>
            <div className="row m-0">
            <div className="col-md-5">
            <li className="list-group-item flex-grow-1 mr-auto">
            <span className="badge badge-success mr-2">Pass id:</span>{pass._id}
          </li>
          </div>
          <div className="col-md-3">
          <li className="list-group-item mx-auto">
          <span className="badge badge-success mr-2">Status:</span>{passstatus(pass.status)}
            </li>
            </div>
          </div>
          <div className="row">
          <div className="col-md-5">
        <li className="list-group-item">
            <span className="badge badge-success mr-2">Expected leaving time:</span>{pass.exp_dep_time}
        </li>
        <li className="list-group-item">
            <span className="badge badge-success mr-2">Expected arrival time:</span>{pass.exp_arr_time}
        </li>
        </div>
        <div className="col-md-5">
        <li className="list-group-item">
            <span className="badge badge-success mr-2">From:</span>{pass.from_date}
        </li>
        <li className="list-group-item">
            <span className="badge badge-success mr-2">To:</span>{pass.to_date}
        </li>
        </div>
        </div>
        </div>
        ))}   
        </ul>      
        </React.Fragment>         
    )

    return (
        <Base title="Manage Pass">
        <div className="container p-2">
        {passinfo()}
        {goBack()}
        </div>
        </Base>
    )
}

export default ManagePass
