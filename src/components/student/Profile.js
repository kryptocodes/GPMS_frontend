import React,{ useState, useEffect} from 'react'
import { isAuthenticated } from '../../auth'
import { UpdateInfo, getUser } from '../../auth/update'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'
import LoadingScreen from  '../../Home/loadingScreen'

const Profile = () => {
    
    const [values , setValues] = useState({
        email:"",
        roll_no:"",
        name:"",
        room_no:"",
        dept:"",
        year:"",
        mobile_no:"",
        address:"",
        loading:true
    })

    const {email,roll_no,name,room_no,dept,year,mobile_no,address,loading} = values

    const {user, token} = isAuthenticated()

    const preload = () => {
        getUser(user._id)
        .then(data => {
            const {email,roll_no,name,room_no,dept,year,mobile_no,address} = data;
            if(data.error){
                setValues({...values})
            } else{
                setValues({...values,email,roll_no,name,room_no,dept,year,mobile_no,address,loading:false})
            }
        })
    }

    useEffect(() => {
        preload()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    

    const handleChange = name => event => {
        setValues({...values,[name]:event.target.value});
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
                <p className="lead">Roll no</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("roll_no")}
                    disabled
                    value={roll_no}
                />
                <p className="lead">Room No</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("room_no")}
                    required
                    value={room_no}
                />
                <p className="lead">Year</p>
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
                <p className="lead">Mobile No</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("mobile_no")}
                    required
                    value={mobile_no}
                />
                <p className="lead">Address</p>
                <input type="text"
                    className="form-control my-3"
                    onChange={handleChange("address")}
                    required
                    value={address}
                />
                <button onClick={onSubmit} className="btn btn-block btn-outline-success">Update profile</button>
            </div>
            
            
            </form>
        )
    }

    return (
        <React.Fragment>
        <ToastContainer position="top-center"/>
        {loading ? LoadingScreen() : (
        <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
            {updateForm()}
        </div>
        </div>)}
        </React.Fragment>
    )
}







export default Profile