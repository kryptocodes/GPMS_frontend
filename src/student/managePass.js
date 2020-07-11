import React from 'react'
import Base from '../Home/base'
import ManagePass from '../components/student/managePass'
import goBack from '../components/common/back'

const managePass = () => {
    return (
        <Base 
            title="Manage Pass"
            className="container p-2 mx-auto">
            {goBack({className:"ml-2 mt-2",Route:"/dashboard"})}
            {ManagePass()}
        </Base>
    )
}










export default managePass