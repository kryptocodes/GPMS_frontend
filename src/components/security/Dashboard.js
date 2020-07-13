import React from 'react'
import { Link } from 'react-router-dom'

//img
import logsPNG from '../../assets/logs.png'

//ant components
import { Card } from 'antd'


const SecurityBoard = () => {

    const dashboard = () => (
        <div className="row m-0">
        <div className="col-md-3 p-2 mx-auto">
        <Card className="h-100 d-flex justify-content-center" hoverable>
            <Link to="/security/logs">
            <img src={logsPNG} className="w-100 mx-auto" alt="log"/>
            <h3 className="lead text-center p-2">Logs</h3></Link>
        </Card>      
        </div>
        <div className="col-md-3 p-2 mx-auto">
        <Card className="h-100 d-flex justify-content-center" hoverable>
             <Link to="/security/entry"><img src="https://5.imimg.com/data5/DS/NH/MY-22643665/entry-signage-500x500.jpg" 
             className="w-100" alt="log"/>
            <h3 className="lead text-center p-2">Entry</h3></Link>
        </Card>
        </div>
        <div className="col-md-3 p-2 mx-auto">
        <Card className="h-100 d-flex justify-content-center" hoverable>
             <Link to="/security/exit"><img src="https://s3-ap-southeast-2.amazonaws.com/wc-prod-pim/JPEG_1000x1000/SANMS06_sandleford_exit_sign_300_x_200mm.jpg" 
             className="w-100" alt="log"/>
            <h3 className="lead text-center p-2">Exit</h3></Link>      
        </Card>      
        </div>

        </div>
    )

    return (
        <div>
        {dashboard()}
        </div>
    )
}










export default SecurityBoard