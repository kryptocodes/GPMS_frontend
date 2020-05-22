import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { getUserPass,deletePass } from '../auth/pass' 
import { isAuthenticated } from '../auth'


const ManagePass = () => {
    
    const [values,setValues] = useState([])

    const {user,token} = isAuthenticated()

    const preload = passId => {
        getUserPass(user._id,token,passId)
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

    const onSumbit = (passId) => {
        deletePass(user._id,token,passId)
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                preload();
            }
        })

    }


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
        <div className="jumbotron-fluid">
        {values && values.map((pass,index)=> (
            <div className="card my-4 p-4" key={index}>
                    <h4 className="card-header bg-dark flex-grow-1 text-white bd-highlight">
                        <span className="badge badge-success mr-2">Pass id:</span>{pass._id}
                    </h4>
        <ul className="list-group">
        <div className="d-flex flex-column">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Expected leaving time:</span>{pass.exp_dep_time}
        </li>
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Expected arrival time:</span>{pass.exp_arr_time}
        </li>
        </div>
        <div className="d-flex flex-row">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">From:</span>{pass.from_date}
        </li>
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">To:</span>{pass.to_date}
        </li>
        </div>
        <div className="d-flex flex-row">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Status:</span>{pass.status}
        </li>
        <button type="button" className="btn btn-sm btn-warning">Edit</button>
        <button onClick={() => {
            onSumbit(pass._id)}} type="button" className="btn  btn-sm btn-danger">Delete</button>
        </div>
        </ul>
        </div>
        ))}      
        </div>
        </React.Fragment>         
    )

    return (
        <Base title="Manage Pass">
        <div className="container p-2 mx-auto">
        {passinfo()}
        {goBack()}
        </div>
        </Base>
    )
}

export default ManagePass
