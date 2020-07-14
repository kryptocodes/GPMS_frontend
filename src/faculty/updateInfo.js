import React from 'react'
import Base from '../Home/base'
import FacultyProfile from '../components/faculty/facultyProfile'
import goBack from '../components/common/back'

const UpdateFacultyInfo = () => {
    return (
        <Base
            title="Profile"
            className="container">
            {goBack({className:"ml-1",Route:"/faculty/dashboard"})}
            {FacultyProfile()}
        </Base>
    )
}










export default UpdateFacultyInfo