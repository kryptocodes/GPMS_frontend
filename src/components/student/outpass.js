import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../auth'
import { createPass } from '../../auth/pass'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from "react-hook-form"

//ant components
import { Result, Button } from 'antd'


const Outpass = () => {
    
    const { register,handleSubmit,errors } = useForm()

    const [success,setSuccess] = useState(false)

    const {user: {_id,year,dept} ,token} = isAuthenticated()

    const onSubmit = (values) => {
        const {exp_arr_time,exp_dep_time,reason} = values
        const value = {exp_arr_time,exp_dep_time,reason,info:_id,year:year,dept:dept,pass_type:"Out Pass"}
        createPass(_id,token,value)
        .then(data => {
            if(data.error){
                toast.error(data.error)
            } else {
                setSuccess(true)
            }
        })
    }

    const warning = () => (
        <div className="invalid-feedback d-block">This field is required</div>
    )

    const Success = () => (
        <Result
    status="success"
    title="Successfully Applied"
    className="jumbotron bg-white shadow center" 
    extra={[
      <Link to="/dashboard" key="Go Dashboard"><Button type="primary">
        Go Dashboard
      </Button></Link>,
      <Link to="/student/managepass" key="Manage Pass"><Button>Manage Pass</Button></Link>,
    ]}/>
    )

    const OutPassForm = () => {
        return(
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="card form-group jumbotron bg-white shadow rounded">
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Time</p>
            <div className="row mx-auto my-3 justify-content-center">
            <div className="col-md-5">
            <p className="lead">Expected leaving time</p>
            <input type="time"
                className={errors.exp_dep_time ? "form-control is-invalid" : "form-control"}
                name="exp_dep_time"
                placeholder="hh:mm"
                ref={register({required:true })}
                />
                 {errors.exp_dep_time && warning()}
            </div>
            <div className="col-md-5">
                <p className="lead">Expected arrival time</p>
                <input type="time"
                    className={errors.exp_arr_time ? "form-control is-invalid" : "form-control"}
                    name="exp_arr_time"
                    placeholder="hh:mm"
                    ref={register({required:true})}
                />
                {errors.exp_arr_time && warning() }
            </div>
            </div>
            </div>
                <div className="card my-2">
                <p className="lead card-header text-white bg-dark">Reason</p>
                <div className="p-2">
                <textarea type="text"
                    className={errors.reason ? "form-control is-invalid" : "form-control"}
                    name="reason"
                    placeholder="Valid Reason"
                    ref={register({required:true})}
                />
                {errors.reason && warning()}
                </div>
            </div>
            <button type="submit" className="btn btn-block p-2 btn-outline-success">Apply</button>
            </div>
            </form>
        )
    }

    return (
        <React.Fragment>
        <ToastContainer position="top-center"/>
        {success ? Success() : (
        <div className="row bg-white rounded">
        <div className="container col-md-8 offset-md-2">
            {OutPassForm()}
        </div>
        </div>)}
        </React.Fragment>
    )
}







export default Outpass