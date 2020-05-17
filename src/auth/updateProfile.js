import React,{useState} from 'react'
import Base from '../Home/base'
import {Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'

const UpdateProfile = () => {
    
    const [error, setError] = useState(false)
    const [success, setSuccess] = useState(false)

    const {user: {name,email,roll_no,room_no,year,dept,mobile_no,address,role}, token} = isAuthenticated()

    const goBack = (
    ) => {
        if(role===1){
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
            <form>
            <div className="form-group">
            <p className="lead">Email Id</p>
            <input type="text"
                className="form-control my-3"
                autoFocus
                disabled
                defaultValue={email}
                />
                <p className="lead">Name</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    defaultValue={name}
                />
                <p className="lead">roll_no</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    disabled
                    defaultValue={roll_no}
                />
                <p className="lead">Room No</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    defaultValue={room_no}
                />
                <p className="lead">year</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    defaultValue={year}
                />
                <p className="lead">Dept</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    defaultValue={dept}
                />
                <p className="lead">Mobile No</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    defaultValue={mobile_no}
                />
                <p className="lead">address</p>
                <input type="text"
                    className="form-control my-3"
                    autoFocus
                    required
                    defaultValue={address}
                />
            </div>
            
            <button className="btn btn-outline-success">Update profile</button>
            </form>
        )
    }

    return (
        <Base title="Profile">
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







export default UpdateProfile