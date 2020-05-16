import React from 'react'
import { isAuthenticated } from '../auth'
import { Link } from 'react-router-dom'
import Base from '../Home/base'

const dashboard = () => {
    
    const { user: {name,email,roll_no,room_no,year,mobile_no,dept,address}} = isAuthenticated()

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
                    <Link to="/student/viewpass" className="nav-link text-success">View Pass Status</Link>
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
                <div className="d-flex bd-highlight">
                <h4 className="card-header p-2 flex-grow-1 bd-highlight">Student Information</h4>
                <Link 
                    className="btn btn-success mx-auto bd-highligh"
                    to="/student/updatepassword"
                    >
                    Change Password
                </Link>
                <Link 
                className="btn btn-success mx-auto bd-highligh"
                to="/student/updateprofile"
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
                        <span className="badge badge-success mr-2">Roll No:</span>{roll_no}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Room No:</span>{room_no}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Year:</span>{year}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Dept:</span>{dept}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Mobile No:</span>{mobile_no}
                    </li>
                    <li className="list-group-item">
                        <span className="badge badge-success mr-2">Address:</span>{address}
                    </li>                    
                </ul>
            </div>
    )}

    return (
        <Base title="Student Dashboard">
        <div className="container p-2">
            <div className="row m-0">
                <div className="col-md-3 p-2 mx-auto">
                {student()}
                </div>
                <div className="col-md-9 p-2 mx-auto">
                {info()}
                </div>
            </div>
        </div>
        </Base>
    )
}


export default dashboard