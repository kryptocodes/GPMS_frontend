import React,{useState} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'
import { UpdatePass } from './update'
import { useForm } from "react-hook-form"


const UpdatePassword = () => {

    const { register,handleSubmit,errors } = useForm()
    
    const [pass, setPass] = useState({
        password:"",
        cur:""
    })

    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const { password, cur } = pass

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

    const handleChange = name => event => {
        setError(false)
        setPass({...pass,[name]:event.target.value});
      }

    const onSubmit = () => {
        setError("")
        setSuccess(false)
        //backend request
        UpdatePass(user._id,token,{password})
        .then(data => {
            if(data.error){
                setError(data.error)
            } else {
                setError("")
                setSuccess(true)
                setPass({
                    ...pass,
                    password:"",
                    cur:""
                })
            }
        })
    }

    const successMessage = () => {
        if(success) {
            return <h4 className="alert alert-success text-center">Password updated successfully</h4>
        }
    }

    const errorMessage = () => {
        return ( 
          <div className="justify-content-center alert alert-danger text-center" 
                style={{display: error ? "" : "none"}}>
          {error}
          </div>
        )
    }

    const warningMessage = () => {
        return(
            <p className="text-danger">Required</p>
        )
    }

    const updateForm = () => {
        return(
            <form className="card shadow rounded-lg">
            <div className="form-group p-4">
            <p className="lead">Enter new password</p>
            <input type="password"
                className="form-control my-3"
                onChange={handleChange("password")}
                value={password}
                required
                name="password"
                placeholder="Password"
                ref={register({required:true,min:8})}
                />
                 {errors.password && warningMessage()}
            <p className="lead">Confirm your password</p>
            <input type="password"
                className="form-control my-3"
                onChange={handleChange("cur")}
                value={cur}
                required
                name="cur"
                placeholder="password"
                ref={register({required:true,min:8})}
                />
                 {errors.cur && warningMessage()}
            <button onClick={handleSubmit(onSubmit)} className="btn btn-block btn-outline-success">Update password</button>
            </div>
            </form>
        )
    }

    return (
        <Base 
            title="Update Password"
            className="container">
        {goBack()}
        <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
            {successMessage()}
            {errorMessage()}
            {updateForm()}
        </div>
        </div>
        </Base>
    )
}







export default UpdatePassword