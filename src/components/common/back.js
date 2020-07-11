import React from 'react'
import { Link } from 'react-router-dom'

const goBack = ({
    className,
    Route
}) => {
    return(
    <div className={className}>
    <Link className="btn btn-lg btn-warning mb-4" to={Route}>Back</Link>
    </div>
)}











export default goBack