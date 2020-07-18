import React,{useState} from 'react'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../../auth'
import { createPass } from '../../auth/pass'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import { useForm } from "react-hook-form"

//ant components
import { Result, Button } from 'antd'


const HomePass = () => {
    
    const { register,handleSubmit,errors } = useForm()

    const [values , setValues] = useState({
        info:"",
        dept:"",
        year:"",
        exp_dep_time:"",
        exp_arr_time:"",
        from_date:"",
        to_date:"",
        reason:"",
        successMessage:false
    })

    const { exp_dep_time,
           exp_arr_time,
           from_date,
           to_date,
           reason,
           successMessage} = values



    const {user: {_id,year,dept} ,token} = isAuthenticated()


    const handleChange = name => event => {
        setValues({ ...values,dept:dept,year:year,info:_id,[name]: event.target.value});
      }

      const onSubmit = () => {
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
                    reason:"",
                    successMessage:true
                })
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
    extra={[
      <Link to="/student/dashboard"><Button type="primary">
        Go Dashboard
      </Button></Link>,
      <Link to="/student/viewpass"><Button>Manage Pass</Button></Link>,
    ]}/>
    )

    const HomePassForm = () => {
        return(
            <form>
            <div className="card form-group jumbotron bg-white shadow rounded">
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Time</p>
            <div className="row mx-auto my-3 justify-content-center">
            <div className="col-md-5">
            <p className="lead">Expected leaving time</p>
            <input type="time"
                className={errors.exp_dep_time ? "form-control is-invalid" : "form-control"}
                onChange={handleChange("exp_dep_time")}
                required
                name="exp_dep_time"
                value={exp_dep_time}
                placeholder="hh:mm"
                ref={register({required:true, })}
                />
                 {errors.exp_dep_time && warning()}
            </div>
            <div className="col-md-5">
                <p className="lead">Expected arrival time</p>
                <input type="time"
                    className={errors.exp_arr_time ? "form-control is-invalid" : "form-control"}
                    onChange={handleChange("exp_arr_time")}
                    required
                    name="exp_arr_time"
                    value={exp_arr_time}
                    placeholder="hh:mm"
                    ref={register({required:true})}
                />
                {errors.exp_arr_time && warning() }
            </div>
            </div>
            </div>
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Date</p>
            <div className="card-body row mx-auto my-3 p-2">
            <div className="col-md-6">
            <p className="lead">From</p>
            <input type="date"
                className={errors.from_date ? "form-control is-invalid" : "form-control"}
                onChange={handleChange("from_date")}
                required
                name="from_date"
                value={from_date}
                placeholder="dd-mm-yyyy"
                ref={register({required:true})}
                />
                {errors.from_date && warning()}
            </div>
            <div className="col-md-6">
                <p className="lead">To</p>
                <input type="date"
                    className={errors.to_date ? "form-control is-invalid" : "form-control"}
                    onChange={handleChange("to_date")}
                    required
                    name="to_date"
                    value={to_date}
                    placeholder="dd-mm-yyyy"
                    ref={register({required:true})}
                />
                {errors.to_date && warning()}
            </div>
                </div>
                </div>
                <div className="card my-2">
                <p className="lead card-header text-white bg-dark">Reason</p>
                <div className="p-2">
                <textarea type="text"
                    className={errors.reason ? "form-control is-invalid" : "form-control"}
                    onChange={handleChange("reason")}
                    required
                    name="reason"
                    placeholder="Valid Reason"
                    value={reason}
                    ref={register({required:true})}
                />
                {errors.reason && warning()}
                </div>
            </div>
            <button onClick={handleSubmit(onSubmit)} className="btn btn-block p-2 btn-outline-success">Apply</button>
            </div>
            </form>
        )
    }

    return (
        <React.Fragment>
        <ToastContainer position="top-center"/>
        {successMessage ? Success() : (
        <div className="row bg-white rounded">
        <div className="container col-md-8 offset-md-2">
            {HomePassForm()}
        </div>
        </div>)}
        </React.Fragment>
    )
}







export default HomePass