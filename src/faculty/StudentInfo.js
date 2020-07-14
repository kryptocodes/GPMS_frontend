import React from 'react'
import Base from '../Home/base'
import StdInfo from '../components/faculty/studInfo'
import goBack from '../components/common/back'


const StudentInfo = () => {
    return (
        <Base 
            title="Student Info"
            className="container">
            {goBack({className:"ml-1",Route:"/faculty/dashboard"})}
            {StdInfo()}
        </Base>
    )
}










export default StudentInfo