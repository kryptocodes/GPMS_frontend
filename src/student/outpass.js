import React,{useState} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'
import { createPass } from '../auth/pass'
import { ToastContainer, toast } from 'react-toastify'
import { useForm } from "react-hook-form"

const OutPass = () => {

    const { register,handleSubmit,errors } = useForm()

    const [values,setValues] = useState({
        info:"",
        dept:"",
        year:"",
        exp_dep_time:"",
        exp_arr_time:"",
        pass_type:"",
        reason:""
    })

    const {exp_dep_time,exp_arr_time,reason} = values

    const {user: {_id,year,dept}, token} = isAuthenticated()

    const handleChange = name => event => {
        setValues({...values,dept:dept,year:year,pass_type:"Out Pass",info:_id,[name]:event.target.value})
    }

    const onSubmit = () => {
        setValues({...values})
        createPass(_id,token,values)
        .then(data => {
            if(data.error){
                setValues({...values})
                toast.error(data.error)
            }
            else{
                setValues({...values,
                    exp_dep_time:"",
                    exp_arr_time:"",
                    reason:""
                })
                toast.success("Applied Successfully")
            }
        })
    }

    const goBack = () => {
        return(
        <div className="ml-2">
        <Link className="btn btn-lg btn-warning mb-3" to="/dashboard">Back</Link>
        </div>
    )}

    const warning = () => (
        <p className="text-danger text-center">This field is required</p>
    )

    const updateForm = () => {
        return(
            <form>
            <div className="form-group jumbotron bg-white shadow rounded-lg">
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Time</p>
            <div className="row mx-auto p-2">
            <div className="col-md-5 mx-auto">
            <p className="lead">Expected leaving time</p>
            <input type="time"
                className="form-control my-3"
                onChange={handleChange("exp_dep_time")}
                required
                name="exp_dep_time"
                value={exp_dep_time}
                placeholder="hh:mm"
                ref={register({required:true})}
                />
                 {errors.exp_dep_time && warning()}
            </div>
            <div className="col-md-5 mx-auto">
                <p className="lead">Expected arrival time</p>
                <input type="time"
                    className="form-control my-3"
                    onChange={handleChange("exp_arr_time")}
                    required
                    name="exp_arr_time"
                    value={exp_arr_time}
                    placeholder="hh:mm"
                    ref={register({required:true})}
                />
                 {errors.exp_arr_time && warning()}
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
        <Base title="Out Pass" className="container">
        <ToastContainer position="top-center"/>
        <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
            {updateForm()}
            {goBack()}
        </div>
        </div>
        </Base>
    )
}







export default OutPass