import React,{useState} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'
import { UpdatePass } from './update'


const UpdatePassword = () => {
    
    const [password, setPassword] = useState("")
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const {user, token} = isAuthenticated()

    const goBack = (
    ) => {
        if(user.role===1){
        return(
        <div className="mt-5">
            <Link className="btn btn-xl btn-warning mb-3" to="/faculty/dashboard">Back</Link>
        </div>
        )} return (
            <div className="mt-5">
            <Link className="btn btn-xl btn-warning mb-3" to="/dashboard">Back</Link>
            </div>
        )
    }

    const handleChange = event => {
        setError("");
        setPassword(event.target.value)
    }

    const onSubmit = (event) => {
        event.preventDefault()
        setError("")
        setSuccess(false)
        //backend request
        UpdatePass(user._id,token,{password})
        .then(data => {
            if(data.error){
                setError(true)
            } else {
                setError("")
                setSuccess(true)
                setPassword("")
            }
        })
    }

    const successMessage = () => {
        if(success) {
            return <h4 className="alert alert-success text-center">Password updated successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error) {
            return <h4 className="alert alert-danger text-center">Failed to update successfully</h4>
        }
    }

    const updateForm = () => {
        return(
            <form className="card shadow rounded-lg">
            <div className="form-group p-4">
            <p className="lead">Enter new password</p>
            <input type="password"
                className="form-control my-3"
                onChange={handleChange}
                value={password}
                autoFocus
                required
                placeholder="enter"
                />
            <button onClick={onSubmit} className="btn btn-block btn-outline-success">Update password</button>
            </div>
            
            </form>
        )
    }

    return (
        <Base title="Update Password">
        <div className="container">
        <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
            {successMessage()}
            {warningMessage()}
            {updateForm()}
            {goBack()}
        </div>
        </div>
        </div>
        </Base>
    )
}







export default UpdatePassword