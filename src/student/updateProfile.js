import React from 'react'
import Base from '../Home/base'
import goBack from '../components/common/back'
import Profile from '../components/student/Profile'

const updateProfile = () => {
    return (
        <Base 
         title="Update Profile"
         className="container">
         {goBack({className:"ml-5",Route:"/dashboard"})}
         {Profile()}
        </Base>
    )
}










export default updateProfile