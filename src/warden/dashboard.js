import React from 'react'
import Base from '../Home/base'
import HomeDashboard from '../components/warden/homeDashboard'

const WardenDashboard = () => {
    
    
    return (
        <Base 
            title="Warden Dashboard"
            className="container p-2">
            {HomeDashboard()}
        </Base>
    )

}










export default WardenDashboard