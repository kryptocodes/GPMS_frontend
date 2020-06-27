import React from 'react'
import Base from '../Home/base'
import StudentInfo from '../components/warden/studentInfo'
import { Link } from 'react-router-dom'

const StudInfo = () => {
    
    const goBack = () => {
        return(
        <div className="ml-1">
        <Link className="btn btn-lg btn-warning mb-4" to="/warden/dashboard">Back</Link>
        </div>
    )}
    
    return (
        <Base 
            title="Student Info"
            className="container p-4">
            {goBack()}
            {StudentInfo()}
        </Base>
    )
}









export default StudInfo