import React from 'react'
import { Link } from 'react-router-dom'

const goBack = () => {
    return(
    <div className="ml-1 p-2">
    <Link className="btn btn-lg btn-warning mb-4" to="/warden/dashboard">Back</Link>
    </div>
)}











export default goBack