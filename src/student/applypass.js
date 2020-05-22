import React,{useState} from 'react'
import Base from '../Home/base'
import {Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'
import { HomePass } from '../auth/update'

const ApplyPass = () => {
    
    const [values , setValues] = useState({
        info:"",
        exp_dep_time:"",
        exp_arr_time:"",
        from_date:"",
        to_date:"",
        reason:"",
        success: false
    })

    const {info,exp_dep_time,exp_arr_time,from_date,to_date,reason} = values



    const {user: {_id},token} = isAuthenticated()

    const goBack = () => {
        return(
        <div className="mt-5">
        <Link className="btn btn-xl btn-warning mb-3" to="/dashboard">Back</Link>
        </div>
    )}

    const handleChange = name => event => {
        setValues({ ...values,info:_id,[name]: event.target.value});
        console.log(values)
      }

      const onSubmit = event => {
        event.preventDefault()
        setValues({...values,error:"",success:false})
        HomePass(_id,token,values)
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error})
            } else {
                setValues({
                    ...values,
                    exp_dep_time:"",
                    exp_arr_time:"",
                    from_date:"",
                    to_date:"",
                    reason:"",
                    success:true
                })
            }
        })
    }

    

    const successMessage = () => (
        <div className="alert alert-success mt-3"
        style={{display:values.success ? "" : "none"}}>
       <h4>pass applied successfully</h4>  
      </div>
    )

    const warningMessage = () => (
        <div className="alert alert-danger mt-3"
          style={{display:values.error?"": "none"}}>
          <h4>{values.error}</h4>  
        </div>
    )

    const HomePassForm = () => {
        return(
            <form>
            <div className="form-group">
            <p className="lead">Time</p>
            <div className="row m-0">
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
            <p className="lead">Date</p>
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
                <p className="lead">Reason</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("reason")}
                    required
                    placeholder="Please Leave me I wanna go home"
                    value={reason}
                />
            </div>
            <button onClick={onSubmit} className="btn btn-outline-success">Apply</button>
            </form>
        )
    }

    return (
        <Base title="Home Pass">
        <div className="container">
        <div className="row bg-white rounded">
        <div className="container col-md-8 offset-md-2">
            {successMessage()}
            {warningMessage()}
            {HomePassForm()}
            {goBack()}
        </div>
        </div>
        </div>
        </Base>
    )
}







export default ApplyPass