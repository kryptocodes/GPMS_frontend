import React from 'react'
import Base from '../Home/base'
import EnRoll from '../components/warden/EnRoll'
import { Link } from 'react-router-dom'

const Enrollment = () => {
    
    const goBack = () => {
        return(
        <div className="ml-3">
        <Link className="btn btn-lg btn-warning mb-4" to="/warden/dashboard">Back</Link>
        </div>
    )}

    return (
        <Base title="Enrollment"
               className="container shadow-lg mt-5">
               {EnRoll()}
               {goBack()}
        </Base>
    )
}










export default Enrollment