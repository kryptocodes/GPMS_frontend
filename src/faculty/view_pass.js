import React from 'react'
import Base from '../Home/base'
import ManagePass from '../components/faculty/managePass'
import goBack from '../components/common/back'

const ViewPass = () => {
    return (
        <Base
            title="Manage Pass"
            className="container p-2">
            {goBack({className:"ml-1",Route:"/faculty/dashboard"})}
            {ManagePass()}
        </Base>
    )
}










export default ViewPass