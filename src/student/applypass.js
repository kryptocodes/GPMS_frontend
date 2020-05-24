import React,{useState} from 'react'
import Base from '../Home/base'
import {Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'
import { createPass } from '../auth/pass'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const ApplyPass = () => {
    
    const [values , setValues] = useState({
        info:"",
        dept:"",
        year:"",
        exp_dep_time:"",
        exp_arr_time:"",
        from_date:"",
        to_date:"",
        reason:""
    })

    const {exp_dep_time,exp_arr_time,from_date,to_date,reason} = values



    const {user: {_id,year,dept},token} = isAuthenticated()

    const goBack = () => {
        return(
        <div className="ml-3">
        <Link className="btn btn-lg btn-warning mb-4" to="/dashboard">Back</Link>
        </div>
    )}

    const handleChange = name => event => {
        setValues({ ...values,dept:dept,year:year,info:_id,[name]: event.target.value});
        console.log(values)
      }

      const onSubmit = event => {
        event.preventDefault()
        setValues({...values})
        createPass(_id,token,values)
        .then(data => {
            if(data.error){
                setValues({...values})
                toast.error(data.error)
            } else {
                setValues({
                    ...values,
                    exp_dep_time:"",
                    exp_arr_time:"",
                    from_date:"",
                    to_date:"",
                    reason:""
                })
                toast.success("Applied Successfully")
            }
        })
    }

    const HomePassForm = () => {
        return(
            <form>
            <div className="form-group jumbotron bg-white">
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Time</p>
            <div className="row m-0 p-2">
            <div className="col-md-3">
            <p className="lead">Departure time</p>
            <input type="time"
                className="form-control my-3"
                onChange={handleChange("exp_dep_time")}
                required
                value={exp_dep_time}
                />
            </div>
            <div className="col-md-3">
                <p className="lead">Arrival Time</p>
                <input type="time"
                    className="form-control my-3"
                    onChange={handleChange("exp_arr_time")}
                    required
                    value={exp_arr_time}
                />
            </div>
            </div>
            </div>
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Date</p>
            <div className="row m-0">
            <div className="col-md-4">
            <p className="lead">From</p>
            <input type="date"
                className="form-control my-3"
                onChange={handleChange("from_date")}
                required
                value={from_date}
                />
            </div>
            <div className="col-md-4">
                <p className="lead">To</p>
                <input type="date"
                    className="form-control my-3"
                    onChange={handleChange("to_date")}
                    required
                    value={to_date}
                />
            </div>
                </div>
                </div>
                <div className="card my-2">
                <p className="lead card-header text-white bg-dark">Reason</p>
                <div className="p-2">
                <textarea type="text"
                    className="form-control my-3"
                    onChange={handleChange("reason")}
                    required
                    placeholder="Please Leave me I wanna go home"
                    value={reason}
                />
                </div>
            </div>
            <button onClick={onSubmit} className="btn btn-block p-2 btn-outline-success">Apply</button>
            </div>
            </form>
        )
    }

    return (
        <Base title="Home Pass" className="container">
        <ToastContainer position="top-center"/>
        <div className="row bg-white rounded">
        <div className="container col-md-8 offset-md-2">
            {HomePassForm()}
            {goBack()}
        </div>
        </div>
        </Base>
    )
}







export default ApplyPass