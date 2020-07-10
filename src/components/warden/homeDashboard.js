import React from 'react'
import { Link } from 'react-router-dom'

//img
import AttendancePNG  from '../../assets/Warden/attendance.png'
import ManagePassPNG from '../../assets/Warden/managePass.png'

//antd components
import { Card } from 'antd'



const HomeDashboard = () => {
    return (
        <div className="row m-0 p-3 container">
        <div className="col-md-3 p-2">
        <Card 
            hoverable
            cover={<img alt="attendance" 
            src={AttendancePNG}
            className="p-4 mx-auto"
            />}>
            <Link to="/warden/attendance"><p className="lead text-center">Attendance</p></Link>
        </Card>
        </div>
        <div className="col-md-3 p-2">
        <Card 
        hoverable
        cover={<img alt="attendance_log" 
        src="https://static.thenounproject.com/png/342013-200.png"
        className="p-4 mx-auto"
        />}>
        <Link to="/warden/log"><p className="lead text-center">Attendance Log</p></Link>
    </Card>
        </div>
        <div className="col-md-3 p-2">
        <Card 
            hoverable
            cover={<img alt="manage_pass" 
            src={ManagePassPNG}
            className="p-4 mx-auto w-75"
            />}>
            <Link to="/warden/managepass"><p className="lead text-center">Manage Pass</p></Link>
        </Card>
        </div>
        <div className="col-md-3 p-2">
        <Card 
        hoverable
        cover={<img alt="student_info" 
        src="https://i7.uihere.com/icons/251/857/218/user-info-dc772ffbb3eeb53b4008d7b949983dae.png"
        className="p-4 mx-auto"
        />}>
        <Link to="/warden/studentinfo"><p className="lead text-center">Student Info</p></Link>
    </Card>
        </div>
        <div className="col-md-3 p-2">
        <Card 
        hoverable
        cover={<img alt="enrollment" 
        src="https://i7.uihere.com/icons/251/857/218/user-info-dc772ffbb3eeb53b4008d7b949983dae.png"
        className="p-4 mx-auto"
        />}>
        <Link to="/warden/enrollment"><p className="lead text-center">Enrollment</p></Link>
    </Card>
        </div>
        </div>
    )
}








export default HomeDashboard