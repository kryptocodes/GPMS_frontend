import React,{ useState, useEffect} from 'react'
import { isAuthenticated } from '../../auth'
import { UpdateInfo, getUser } from '../../auth/update'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingScreen from '../../Home/loadingScreen'

const FacultyProfile = () => {
    
    const [values , setValues] = useState({
        email:"",
        name:"",
        dept:"",
        year:"",
        loading:true
    })

    const {email,name,dept,year,loading} = values

    const {user, token} = isAuthenticated()

    const preload = () => {
        getUser(user._id)
        .then(data => {
            const {email,name,dept,year} = data;
            if(data.error){
                setValues({...values})
                toast.error(data.error)
            } else{
                setValues({...values,email,name,dept,year,loading:false})
            }
        })
    }

    useEffect(() => {
        preload()
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
            <form className="card shadow rounded">
            <div className="form-group p-4">
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
                <p className="lead">Year</p>
                <select name="year" 
                        className="form-control my-3"
                        onChange={handleChange("year")}
                        required
                        value={year}>
                    <option value="1">I</option>
                    <option value="2">II</option>
                    <option value="3">III</option>
                    <option value="4">IV</option>
                </select>
                <p className="lead">Dept</p>
                <select name="dept" 
                        className="form-control my-3"
                        onChange={handleChange("dept")}
                        required
                        value={dept}>
                    <option value="CSE">CSE</option>
                    <option value="ECE">ECE</option>
                    <option value="EEE">EEE</option>
                    <option value="CE">CE</option>
                    <option value="ME">ME</option>
                </select>            
            <button onClick={onSubmit} className="btn btn-block btn-outline-success">Update profile</button>
            </div>
            </form>
        )
    }

    return (
        <React.Fragment>
        <ToastContainer position="top-center"/>
        {loading ? LoadingScreen() : (
        <div className="row my-4">
        <div className="col-md-8 offset-md-2">
            {updateForm()}
        </div>
        </div>)}
        </React.Fragment>
    )
}







export default FacultyProfile