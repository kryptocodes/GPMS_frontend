import React from 'react'
import { QRCode } from "react-qr-svg";

const QR_code = (passId) => {

    const PassToken = () => {
        return(
                <div className="jumbotron-fluid rounded">
                <QRCode 
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                className="w-100"
                value={passId}
                />
                </div>
        )
    }

    return (
            <div>
            {PassToken(passId)}
            </div>
    )
}










export default QR_code