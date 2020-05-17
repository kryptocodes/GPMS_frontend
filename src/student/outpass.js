import React,{useState} from 'react'
import Base from '../Home/base'
import {Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'

const OutPass = () => {
    
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const {user: {role}, token} = isAuthenticated()

    const goBack = () => {
        return(
        <div className="mt-5">
        <Link className="btn btn-xl btn-warning mb-3" to="/dashboard">Back</Link>
        </div>
    )}

    const successMessage = () => {
        if(success) {
            return <h4 className="alert alert-success text-center">Applied successfully</h4>
        }
    }

    const warningMessage = () => {
        if(error) {
            return <h4 className="alert alert-danger text-center">Failed to apply successfully</h4>
        }
    }

    const updateForm = () => {
        return(
            <form>
            <div className="form-group">
            <p className="lead">Time</p>
            <div className="row m-0">
            <div className="col-md-3">
            <p className="lead">Departure time</p>
            <input type="text"
                className="form-control my-3"
                autoFocus
                required
                placeholder="hh:mm"
                />
            </div>
            <div className="col-md-3">
                <p className="lead">Arrival Time</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    placeholder="hh:mm"
                />
            </div>
            </div>
               <p className="lead">Reason</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    placeholder="Please I wanna go out"
                />
            </div>
            
            <button className="btn btn-outline-success">Apply</button>
            </form>
        )
    }

    return (
        <Base title="Out Pass">
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







export default OutPass