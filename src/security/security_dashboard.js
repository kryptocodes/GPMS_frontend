import React from 'react'
import Base from '../Home/base'
import SecurityBoard from '../components/security/Dashboard'

const SecurityDashboard = () => {
    return (
        <Base 
            title="Security Dashboard"
            className="container p-2">
            {SecurityBoard()}
        </Base>
    )
}










export default SecurityDashboard