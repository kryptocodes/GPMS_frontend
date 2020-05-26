import React,{useState,useEffect} from 'react'
import { QRCode } from "react-qr-svg";
import Base from '../Home/base';
import { getPass } from '../auth/pass';

const QR_code = ({match}) => {

    const [values,setValues] = useState({
    })

 
    const DispPass = () =>(
        <React.Fragment>
        <div className="jumbotron-fluid my-4">
            <ul className="list-group">
            <div className="card">
                    <h4 className="card-header row m-0 bg-dark text-white bd-highlight">
                        <div className="col-md-8">
                        <span><span className="badge badge-success flex-grow-1 mr-2">Pass id:</span></span>
                        </div>
                        <div className="col-md-4">
                        <span><span className="badge badge-success mr-2">Pass type</span></span>
                        </div>
                     </h4>
        <div className="d-flex flex-column">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Expected leaving time:</span>
        </li>
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Expected arrival time:</span>
        </li>
        </div>
        <div className="d-flex flex-row">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">From:</span>
        </li>
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">To:</span>
        </li>
        </div>
        <div className="d-flex flex-row">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Status:</span>
        </li>
        </div>
        </div>
        </ul>
        </div>
        </React.Fragment>
    )

    const PassToken = () => {
        return(
                <div className="row m-0">
                <div className="col-md-4 p-4">
                <div className="jumbotron-fluid rounded">
                <QRCode 
                bgColor="#FFFFFF"
                fgColor="#000000"
                level="Q"
                className="w-100"
                value={match.params.passId}
                />
                </div>
                </div>
                <div className="col-md-8">
                {DispPass()}
                </div>
                </div>
        )
    }

    return (
        <Base title="QR Code" className="container p-2">
        <div className="row rounded mx-auto">
            <div className="container col-md-14">
            {PassToken()}
            </div>
        </div>
        </Base>
    )
}










export default QR_code