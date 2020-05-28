import React,{useState} from 'react'
import QrReader from 'react-qr-reader'
import Base from '../Home/base'
import { getPass, updatePass } from '../auth/pass'
import { isAuthenticated } from '../auth'



const Entry_check = () => {

    const [values,setValues] = useState({
        showQR:true,
        showPass:false,
        showError:false,
        showRetry:false,
        name:"",
        passId:"",
        pass_type:"",
        exp_arr_time:"",
        exp_dep_time:"",
        from_date:"",
        to_date:"",
        curTime : new Date().toLocaleString()
    })

    const date = new Date()

    const {user,token} = isAuthenticated()

    const {showQR,showPass,showRetry,showError,name,passId,pass_type,exp_arr_time,exp_dep_time,from_date,to_date,curTime} = values

    const handleScan = value => {
        console.log(value)
        if(value != null){
        getPass(value)
        .then(data => {
            if(data.error){
                console.log(data.error)
                setValues({showQR:false,showError:data.error})
            } else{
                console.log(data)
                setValues({
                    ...values,
                    showQR:false,
                    showPass:true,
                    name:data.info.name,
                    passId:data.passId,
                    pass_type:data.pass_type,
                    exp_arr_time:data.exp_arr_time,
                    exp_dep_time:data.exp_dep_time,
                    from_date:data.from_date,
                    to_date:data.to_date
                })
                console.log(values)
            }
        })

    }
    }

    const NoPass = () => (
        <div>
        <h1 className="display-5">{showError}</h1>
        {Retry()}
        </div>
    )

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
                            <div className="col-md-8">
                            <span><span className="badge badge-success flex-grow-1 mr-2">Name:</span>{name}</span>
                            </div>
                            <div className="col-md-4">
                            <span><span className="badge badge-success mr-2">Pass type</span>{pass_type}</span>
                            </div>
                         </h4>
            <div className="d-flex flex-column">
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">Expected leaving time:</span>{exp_dep_time}
            </li>
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">Expected arrival time:</span>{exp_arr_time}
            </li>
            </div>
            {(pass_type === "HomePass") && (
            <div className="d-flex flex-row">
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">From:</span>{from_date}
            </li>
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">To:</span>{to_date}
            </li>
            </div>
            )}
            <li className="list-group-item flex-grow-1">
                <span className="badge badge-success mr-2">Entry Date and Time:</span>{curTime}
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
        <Base title="Entry" className="container p-2">
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










export default Entry_check