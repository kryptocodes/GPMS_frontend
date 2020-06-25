import React from 'react'
import Base from '../Home/base'
import FacDashboard from '../components/faculty/FacDashboard'

const FacultyDashboard = () => {
    return (
        <Base title="Faculty Dashboard" className="container p-2">
        {FacDashboard()}
        </Base>
    )
}


export default FacultyDashboard