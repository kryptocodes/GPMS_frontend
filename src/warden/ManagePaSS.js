import React from 'react'
import Base from '../Home/base'
import ManagePass from '../components/warden/managePass'
import { Link } from 'react-router-dom'

const ManagePaSS = () => {

    const goBack = () => {
        return(
        <div className="ml-1">
        <Link className="btn btn-lg btn-warning mb-4" to="/warden/dashboard">Back</Link>
        </div>
    )}

    return (
        <Base
            title="Manage Pass"
            className="container">
            {goBack()}
            {ManagePass()}
        </Base>
    )
}










export default ManagePaSS