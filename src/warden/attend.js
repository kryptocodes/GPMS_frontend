import React from 'react'
import Base from '../Home/base'
import Attendance from '../components/warden/attendance'
import { Link } from 'react-router-dom'



const Attend = () => {

    const goBack = () => {
        return(
        <div className="ml-3">
        <Link className="btn btn-lg btn-warning mb-4" to="/warden/dashboard">Back</Link>
        </div>
    )}
    
    return (
        <Base
            title="Attendance"
            className="container">
            {goBack()}
            {Attendance()}    
        </Base>
    )
}










export default Attend