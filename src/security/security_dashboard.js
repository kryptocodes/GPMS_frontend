import React from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'

const SecurityDashboard = () => {

    const dashboard = () => (
        <div className="row m-0">
        <div className="col-md-3 p-2 mx-auto">
        <div className="card px-2 py-4 h-100 d-flex align-items-center">
             <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn%3AANd9GcQLHZXHf638nwRddOBMp2EGTqaIg95wuWNA6buppAOh7QBN8p-S&usqp=CAU" 
             className="w-100 mx-auto" alt="log"/>
            <h3 className="lead p-2">Log</h3>
        </div>      
        </div>
        <div className="col-md-3 p-2 mx-auto">
        <div className="card px-2 py-4 h-100 d-flex align-items-center">
             <Link to="/security/entry"><img src="https://5.imimg.com/data5/DS/NH/MY-22643665/entry-signage-500x500.jpg" 
             className="w-100 mx-auto" alt="log"/>
            <h3 className="lead text-center p-2">Entry</h3></Link>
        </div>
        </div>
        <div className="col-md-3 p-2 mx-auto">
        <div className="card px-2 py-4 h-100 d-flex align-items-center">
             <Link><img src="https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/SANMS06_sandleford_exit_sign_300_x_200mm.jpg" 
             className="w-100 mx-auto" alt="log"/>
            <h3 className="lead text-center p-2">Exit</h3></Link>      
        </div>      
        </div>

        </div>
    )

    return (
        <Base title="Security Dashboard" className="container p-2">
        <div className="row mx-auto">
        <div className="col-md-12">
        {dashboard()}
        </div>
        </div>
        </Base>
    )
}










export default SecurityDashboard