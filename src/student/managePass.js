import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { getUser } from '../auth/update'
import { getAllPass } from '../auth/pass' 


const ManagePass = () => {
    
    const [values,setValues] = useState([])
    const [names,setNames] = useState("")

    const preload = () => {
        getAllPass()
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
        loadprofile();
    },[])

    const loadprofile = (id) => {
        getUser(id)
        .then(data => {
            console.log(data)
        if(data.error){
            console.log(data.error)
        } else{
            setNames(data.name)
        }
        })
        return names
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
        <ul className="list-group">
        {values && values.map((pass,index)=> (
            <div key={index}>
            <li className="list-group-item">
            <span className="badge badge-success mr-2">Name:</span>{loadprofile(pass.info)}
          </li>
        <li className="list-group-item">
            <span className="badge badge-success mr-2">Expected leaving time:</span>{pass.exp_dep_time}
        </li>
        <li className="list-group-item">
            <span className="badge badge-success mr-2">Expected arrival time:</span>{pass.exp_arr_time}
        </li>
        <li className="list-group-item">
            <span className="badge badge-success mr-2">From:</span>{pass.from_date}
        </li>
        <li className="list-group-item">
            <span className="badge badge-success mr-2">To:</span>{pass.to_date}
        </li>
        <li className="list-group-item">
            <span className="badge badge-success mr-2">Status:</span>{passstatus(pass.status)}
        </li>
        </div>
        ))}   
        </ul>               
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
