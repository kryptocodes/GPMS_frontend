import React from 'react'
import Base from '../Home/base'
import StudentBoard from '../components/student/Studentdashboard'

const Dashboard = () => {
    return (
        <Base 
            title="Student Dashboard"
            className="container p-2">
            {StudentBoard()}
        </Base>
    )
}










export default Dashboard