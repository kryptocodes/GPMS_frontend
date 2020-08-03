import React from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'
import { UpdatePass } from './update'
import { useForm } from "react-hook-form"
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const UpdatePassword = () => {

    const { register,watch,handleSubmit,reset,errors } = useForm()

    const WatchAllFields = watch()

    const {user, token} = isAuthenticated()

    const goBack = (
    ) => {
        if(user.role===1){
        return(
        <div className="ml-1">
            <Link className="btn btn-lg btn-warning mb-2" to="/faculty/dashboard">Back</Link>
        </div>
        )} return (
            <div className="ml-1">
            <Link className="btn btn-lg btn-warning mb-2" to="/dashboard">Back</Link>
            </div>
        )
    }

    const Check = () => (
        WatchAllFields.password !== WatchAllFields.cur ? true : false
    ) 

    const onSubmit = (values) => {
        (Check() ? toast.error("Check Your Password") :
        //backend request
        UpdatePass(user._id,token,values)
        .then(data => {
            if(data.error){
                toast.error(data.error)
            } else {
                toast.success("Password updated successfully")
                reset({values})
            }
        }))
    }

    const warningMessage = () => (
        <div className="invalid-feedback d-block">This field is required</div>
    )

    const updateForm = () => {
        return(
            <React.Fragment>
            <form className="card shadow rounded-lg" onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group p-4">
            <p className="lead">Enter new password</p>
            <input type="password"
                className={errors.password ? "form-control is-invalid" : "form-control my-3"}
                name="password"
                placeholder="Password"
                ref={register({required:true,
                                minLength:{
                                        value: 8,
                                        message:"Password should be atleast 8 char long."
                                }})}
                />
                 {errors.password && warningMessage()}
            <p className="lead">Confirm your password</p>
            <input type="password"
                 className={errors.cur ? "form-control is-invalid" : "form-control my-3"}
                name="cur"
                placeholder="password"
                ref={register({required:true,
                                minLength:{
                                    value: 8,
                                    message:"Password should be atleast 8 char long."
                                }})}
                />
                 {errors.cur && warningMessage()}
            <button type="submit" 
                    className="btn btn-block p-2 btn-outline-success">Update Password</button>
            </div>
            </form>
            </React.Fragment>
        )
    }

    return (
        <Base 
            title="Update Password"
            className="container">
        <ToastContainer position="top-center"/>
        {goBack()}
        <div className="row mt-4 bg-white rounded">
        <div className="col-md-7 mx-auto">
            {updateForm()}
        </div>
        </div>
        </Base>
    )
}







export default UpdatePassword