import React from 'react'
import 'antd/dist/antd.css'
import { Card } from 'antd'
import { Link } from 'react-router-dom'
import AttendancePNG  from '../../assets/attendance.png'



const HomeDashboard = () => {
    return (
        <div className="row mx-auto container">
        <div className="col-md-3 p-2">
        <Card 
            hoverable
            cover={<img alt="image" 
            src={AttendancePNG}
            className="p-4 mx-auto"
            />}>
            <Link to="/warden/attendance"><p className="lead text-center">Attendance</p></Link>
        </Card>
        </div>
        <div className="col-md-3 p-2">
        <Card 
        hoverable
        cover={<img alt="image" 
        src="https://static.thenounproject.com/png/342013-200.png"
        className="p-4 mx-auto"
        />}>
        <Link to="/warden/log"><p className="lead text-center">Attendance Log</p></Link>
    </Card>
        </div>
        <div className="col-md-3 p-2">
        <Card 
            hoverable
            cover={<img alt="image" 
            src="https://www.dlf.pt/png/big/14/143193_register-icon-png.png"
            className="p-4 mx-auto"
            />}>
            <p className="lead text-center">Manage Pass</p>
        </Card>
        </div>
        <div className="col-md-3 p-2">
        <Card 
        hoverable
        cover={<img alt="image" 
        src="https://i7.uihere.com/icons/251/857/218/user-info-dc772ffbb3eeb53b4008d7b949983dae.png"
        className="p-4 mx-auto"
        />}>
        <Link to="/warden/studentinfo"><p className="lead text-center">Student Info</p></Link>
    </Card>
        </div>
        </div>
    )
}








export default HomeDashboard