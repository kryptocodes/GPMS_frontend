import React from 'react'
import Nav from './nav'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'

const dashboard = () => {
    
    const { user: {name,email,roll_no,room_no,year}} = isAuthenticated ()

    const student = () => {
        return (
            <div className="card">
                <h4 className="card-header bg-dark text-white">Student</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <Link to="/student/gatepass" className="nav-link text-success">Apply Home Pass</Link>
                    </li>
                    <li className="list-group-item">
                        <Link to="/student/outpass" className="nav-link text-success">Apply Out Pass</Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/student/viewpass" className="nav-link text-success">View Pass</Link>
                    </li>
                    <li className="list-group-item">
                    <Link to="/student/qrcode" className="nav-link text-success">QR Code</Link>
                    </li>
                </ul>
            </div>
        )
    }

    const info = () => {
        return(
        <div className="card mb-4">
                <h4 className="card-header">Student Information</h4>
                <ul className="list-group">
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Name:</span>{name}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Email:</span>{email}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Roll No:</span>{roll_no}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Room No:</span>{room_no}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">year:</span>{year}
                    </li>                    
                    <li className="list-group-item">
                        <span className="badge badge-danger">Student Area</span>
                    </li>
                </ul>
            </div>
    )}

    return (
        <div>
        <Nav/>
        <div className="container">
            <h1 className="display-3 text-center mb-4">Student Dashboard</h1>
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


export default dashboard