import React from 'react'
import Attenlog  from '../components/warden/attenlog'
import Base  from '../Home/base'
import { Link } from 'react-router-dom'

const Atten = () => {

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
            {Attenlog()}
        </Base>
    )
}










export default Atten