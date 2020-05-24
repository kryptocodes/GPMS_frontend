import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import {Link } from 'react-router-dom'
import { isAuthenticated } from '../auth/'
import { UpdateInfo, getUser } from '../auth/update'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

const UpdateFacultyInfo = () => {
    
    const [values , setValues] = useState({
        email:"",
        name:"",
        dept:"",
        year:""
    })

    const {email,name,dept,year} = values

    const {user, token} = isAuthenticated()

    const goBack = (
    ) => {
        return (
            <div className="mt-5">
            <Link className="btn btn-xl btn-warning mb-3" to="/faculty/dashboard">Back</Link>
            </div>
        )
    }

    const preload = () => {
        getUser(user._id)
        .then(data => {
            const {email,name,dept,year} = data;
            if(data.error){
                setValues({...values})
                toast.error(data.error)
            } else{
                setValues({...values,email,name,dept,year})
            }
        })
    }

    useEffect(() => {
        preload()
    },[])

    const handleChange = name => event => {
        setValues({...values,[name]:event.target.value});
        console.log(values)
      }

    const onSubmit = event => {
        event.preventDefault()
        //backend request
        setValues({...values})
        UpdateInfo(user._id,token,values)
        .then(data => {
            if(data.error){
                setValues({...values})
                toast.error(data.error)
            } else {
                setValues({
                    ...values
                })
                toast.success("Updated Successfully")
            }
        })
    }

    const updateForm = () => {
        return(
            <form>
            <div className="form-group">
            <p className="lead">Email Id</p>
            <input type="text"
                className="form-control my-3"
                disabled
                value={email}
                />
                <p className="lead">Name</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("name")}
                    required
                    value={name}
                />
                <p className="lead">year</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("year")}
                    required
                    value={year}
                />
                <p className="lead">Dept</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("dept")}
                    required
                    value={dept}
                />
            </div>
            
            <button onClick={onSubmit} className="btn btn-outline-success">Update profile</button>
            </form>
        )
    }

    return (
        <Base title="Profile" className="container">
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







export default UpdateFacultyInfo