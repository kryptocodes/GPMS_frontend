import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import {Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'
import { UpdateInfo, getUser } from '../auth/update'

const UpdateProfile = () => {
    
    const [values , setValues] = useState({
        email:"",
        roll_no:"",
        name:"",
        room_no:"",
        dept:"",
        year:"",
        mobile_no:"",
        address:"",
        error: "",
        success: false
    })

    const {email,roll_no,name,room_no,dept,year,mobile_no,address} = values

    const {user, token} = isAuthenticated()

    const goBack = (
    ) => {
        return (
            <div className="mt-5">
            <Link className="btn btn-xl btn-warning mb-3" to="/dashboard">Back</Link>
            </div>
        )
    }

    const preload = () => {
        getUser(user._id,token)
        .then(data => {
            const {email,roll_no,name,room_no,dept,year,mobile_no,address} = data;
            if(data.error){
                setValues({...values,error:data.error})
            } else{
                setValues({...values,email,roll_no,name,room_no,dept,year,mobile_no,address})
            }
        })
    }

    useEffect(() => {
        preload()
    }, [])

    const handleChange = name => event => {
        setValues({ ...values, [name]: event.target.value });
      }

    const onSubmit = (event) => {
        event.preventDefault()
        //backend request
        setValues({...values,error:"",success:false})
        UpdateInfo(user._id,token,values)
        .then(data => {
            if(data.error){
                setValues({...values,error:data.error})
            } else {
                setValues({
                    ...values,
                    success:true
                })
            }
        })
    }

    const successMessage = () => (
        <div className="alert alert-success mt-3"
        style={{display:values.success ? "" : "none"}}>
       <h4>Profile updated successfully </h4>  
      </div>
    )

    const warningMessage = () => (
        <div className="alert alert-danger mt-3"
          style={{display:values.error?"": "none"}}>
         <h4>failed to update profile </h4>  
        </div>
    )

    const updateForm = () => {
        return(
            <form>
            <div className="form-group">
            <p className="lead">Email Id</p>
            <input type="text"
                className="form-control my-3"
                disabled
                defaultValue={email}
                />
                <p className="lead">Name</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("name")}
                    required
                    defaultValue={name}
                />
                <p className="lead">roll_no</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("roll_no")}
                    disabled
                    defaultValue={roll_no}
                />
                <p className="lead">Room No</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("room_no")}
                    required
                    defaultValue={room_no}
                />
                <p className="lead">year</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("year")}
                    required
                    defaultValue={year}
                />
                <p className="lead">Dept</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("dept")}
                    required
                    defaultValue={dept}
                />
                <p className="lead">Mobile No</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("mobile_no")}
                    required
                    defaultValue={mobile_no}
                />
                <p className="lead">address</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("address")}
                    required
                    defaultValue={address}
                />
            </div>
            
            <button onClick={onSubmit} className="btn btn-outline-success">Update profile</button>
            </form>
        )
    }

    return (
        <Base title="Profile">
        <div className="container">
        <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
            {updateForm()}
            {successMessage()}
            {warningMessage()}
            {goBack()}
        </div>
        </div>
        </div>
        </Base>
    )
}







export default UpdateProfile