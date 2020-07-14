import React,{useState} from 'react'
import QrReader from 'react-qr-reader'
import Base from '../Home/base'
import { getPass } from '../auth/pass'
import { isAuthenticated } from '../auth'
import { Link } from'react-router-dom'
import { exitCheck } from '../auth/gate'

const Exit_check = () => {

    const [values,setValues] = useState({
        showQR:true,
        showPass:false,
        showError:false,
        name:"",
        pass_type:"",
        room_no:"",
        dept:"",
        year:"",
        place:"",
        exit:new Date().toLocaleString()
    })

    const {user,token} = isAuthenticated()

    const {showQR,
          showPass,
          showError,
          name,
          pass_type,
          room_no,
          dept,
          year,
          place,
          exit
        } = values

    const handleScan = value => {
        console.log(value)
        if(value != null){
        getPass(value)
        .then(data => {
            if(data.error){
                console.log(data.error)
                setValues({showQR:false,showError:data.error})
            } else{
                setValues({
                    ...values,
                    showQR:false,
                    showPass:true,
                    name:data.info.name,
                    passId:data._id,
                    pass_type:data.pass_type,
                    room_no:data.info.room_no,
                    dept:data.dept,
                    year:data.year,
                    place:data.info.address
                })
                Exit(data._id)
            }
        })

    }
    }

    const Exit = async (passId) => {
        await exitCheck(user._id,token,passId,{exit:exit})
        .then(data => {
          if(data.error){
              console.log(data.error)
          } else {
              console.log(exit)
          }
      })
  }


    const NoPass = () => (
        <div>
        <h1 className="display-5">{showError}</h1>
        {Retry()}
        </div>
    )

    const goBack = () => {
        return(
        <div className="ml-3">
        <Link className="btn btn-lg btn-warning mb-4" to="/security/dashboard">Back</Link>
        </div>
    )}


    const Retry = () => (
        <div>
        <button onClick={() => {setValues({showQR:true,showError:false})}} 
          className="btn btn-lg btn-warning">New Scan</button>
        </div>
    )

    const PassInfo = () => (
            <React.Fragment>
            <div className="jumbotron-fluid">
                <ul className="list-group">
                <div className="card my-4 p-4">
                        <h4 className="card-header row m-0 bg-dark text-white bd-highlight">
                            <div className="col-md-6">
                            <span><span className="badge badge-success flex-grow-1 mr-2">Name:</span>{name}</span>
                            </div>
                            <div className="col-md-6">
                            <span><span className="badge badge-success mr-2">Pass type</span>{pass_type}</span>
                            </div>
                         </h4>
            <div className="d-flex flex-row">
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">Room No:</span>{room_no}
            </li>
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">Place:</span>{place}
            </li>
            </div>
            <div className="d-flex flex-row">
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">Dept:</span>{dept}
            </li>
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">Year:</span>{year}
            </li>
            </div>
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">Exit Date and Time:</span>{exit}
            </li>
            </div>
            </ul> 
            {Retry()}
            </div>
            </React.Fragment>         
        )

    const handleError = err => {
        console.log(err)
    }


    return (
        <Base title="Exit" className="container p-2">
        {goBack()}
        <div className="row m-0">
        {showQR && (
        <div className="container col-md-5">
        <QrReader
          delay={20}
          className="w-100"
          onError={handleError}
          onScan={handleScan}
          />
          </div>)}
        {showError && (
            <div className="col-md-5 offset-sm-2">
            {NoPass()}
            </div>
        )}
        {showPass && (
            <div className="col-md-8 offset-sm-2">
            {PassInfo()}
            </div>
            )}
      </div>
        </Base>
    )
}










export default Exit_check