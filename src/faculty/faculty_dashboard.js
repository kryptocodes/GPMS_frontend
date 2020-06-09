import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'
import { getUser } from '../auth/update'
import LoadingScreen from '../Home/loadingScreen'

const FacultyDashboard = () => {

    const [values,setValues] = useState({
        name:"",
        email:"",
        dept:"",
        year:"",
        loading:true
    })

    const { name,email,dept,year,loading } = values

    const { user } = isAuthenticated() 

    const preload = () => {
        getUser(user._id)
        .then(data =>{
            const {name,email,year,dept} = data
            if(data.error){
                console.log(data.error)
            }
            else{
                setValues({...values,name,email,year,dept,loading:false})
            }
        })
    }

    useEffect(() => {
        preload()
    },[])

    const faculty = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">Faculty</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link className="nav-link text-success">Check Student Info</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/faculty/viewpass" className="nav-link text-success">View Pass</Link>
                    </li>
                    <li className="list-group-item">
                    <Link className="nav-link text-success">Log</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const info = () => {
        return(
        <div className="card mb-4">
                <div className="card-header bg-secondary d-flex bd-highlight">
                <h4 className=" text-white flex-grow-1 bd-highlight">Faculty Information</h4>
                <Link 
                    className="btn mr-1 text-center btn-info"
                    to="/faculty/updatepassword"
                    >
                    Change Password
                </Link>
                <Link 
                className="btn text-center btn-info"
                to="/faculty/updateInfo"
                >
                Edit
            </Link>
                </div>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name:</span>{name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email:</span>{email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Dept:</span>{dept}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Year:</span>{year}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-danger">Faculty Area</span>
                    </li>
                </ul>
            </div>
    )}

    return (
        <Base title="Faculty Dashboard" className="container p-2">
            {loading && LoadingScreen()}
            {!loading &&  (
            <div className="row m-0">
                <div className="col-md-3 p-2 mx-auto">
                {faculty()}
                </div>
                <div className="col-md-9 p-2 mx-auto">
                {info()}
                </div>
            </div>)}
        </Base>
    )
}


export default FacultyDashboard