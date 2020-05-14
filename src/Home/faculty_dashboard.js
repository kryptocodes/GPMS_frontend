import React from 'react'
import Nav from './nav'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'

const FacultyDashboard = () => {
    
    const { user: {name,email,dept}} = isAuthenticated()

    const student = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">Faculty</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/faculty/studentInfo" className="nav-link text-success">Check Student Info</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/faculty/viewpass" className="nav-link text-success">View Pass</Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/faculty/passlog" className="nav-link text-success">Log</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const info = () => {
        return(
        <div className="card mb-4">
                <h4 className="card-header">Faculty Information</h4>
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
                        <span className="badge badge-danger">Faculty Area</span>
                    </li>
                </ul>
            </div>
    )}

    return (
        <div>
        <Nav/>
        <div className="jumbotron-fluid bg-success">
            <h1 className="display-3 text-center p-4">Faculty Dashboard</h1>
            </div>
        <div className="container p-2">
            <div className="row m-0">
                <div className="col-md-3">
                {student()}
                </div>
                <div className="col-md-9">
                {info()}
                </div>
            </div>
        </div>
        </div>
    )
}


export default FacultyDashboard