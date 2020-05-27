import React from 'react'
import { QRCode } from "react-qr-svg";
import Base from '../Home/base';
import { Link } from 'react-router-dom'

const QR_code = ({match}) => {

    const goBack = () => {
        return(
            <div className="mt-2 ml-3">
            <Link className="btn btn-lg btn-warning mb-3" to="/student/viewpass">Back</Link>
            </div>
        )
    }

    const PassToken = () => {
        return(
                <div className="jumbotron-fluid rounded">
                <QRCode 
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                className="w-100"
                value={match.params.passId}
                />
                <p className="lead text-center">{match.params.passId}</p>
                </div>
        )
    }

    return (
        <Base title="QR Code" className="container p-2">
        {goBack()}
        <div className="row rounded mx-auto">
            <div className="container col-md-5">
            <h1 className="text-center">Show at Gate</h1>
            {PassToken()}
            </div>
        </div>
        </Base>
    )
}










export default QR_code