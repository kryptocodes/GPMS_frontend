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

    const updateForm = () => {
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
                required
                />
            </div>
            <div className="col-md-3">
                <p className="lead">Arrival Time</p>
                <input type="time"
                    className="form-control my-3"
                    required
                />
            </div>
            </div>
            </div>
                <div className="card my-2">
                <p className="lead card-header text-white bg-dark">Reason</p>
                <div className="p-2">
                <textarea type="text"
                    className="form-control my-3"
                    required
                    placeholder="Please Leave me I wanna go home"
                />
                </div>
            </div>
            <button className="btn btn-block p-2 btn-outline-success">Apply</button>
            </div>
            </form>
        )
    }

    return (
        <Base title="Out Pass" className="container">
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