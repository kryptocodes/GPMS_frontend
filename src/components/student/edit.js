import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../../auth'
import { getPass,updatePass } from '../../auth/pass'
import LoadingScreen from '../../Home/loadingScreen'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'


const EditPas = ({match}) => {
    
    const [values,setValues] = useState({
        pass_type:"",
        exp_dep_time:"",
        exp_arr_time:"",
        from_date:"",
        to_date:"",
        reason:""
    })

    const {pass_type,exp_dep_time,exp_arr_time,from_date,to_date,reason} = values

    const [loading,setLoading] = useState(true)

    const {user,token} = isAuthenticated()

    const handleChange = name => event => {
        setValues({...values,[name]:event.target.value});
      }

    const preload = passId => {
        getPass(passId)
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                setValues({
                    ...values,
                    _id:data._id,
                    pass_type:data.pass_type,
                    exp_dep_time:data.exp_dep_time,
                    exp_arr_time:data.exp_arr_time,
                    from_date:data.from_date,
                    to_date:data.to_date,
                    reason:data.reason
                })
                setLoading(false)
            }
        })
        }

      useEffect(() => {
          preload(match.params.passId)
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const onSumbit = (event) => {
          event.preventDefault()
          console.log(values)
          setValues({...values})
          updatePass(user._id,token,match.params.passId,values)
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

    const PassForm = () => {
        return(
            <form>
            <div className="form-group jumbotron bg-white shadow rounded">
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Time</p>
            <div className="row mx-auto p-2">
            <div className="col-md-5">
            <p className="lead">Expected leaving time</p>
            <input type="time"
                className="form-control my-3"
                onChange={handleChange("exp_dep_time")}
                value={exp_dep_time}
                />
            </div>
            <div className="col-md-5">
                <p className="lead">Expected arrival time</p>
                <input type="time"
                    className="form-control my-3"
                    onChange={handleChange("exp_arr_time")}
                    value={exp_arr_time}
                />
            </div>
            </div>
            </div>
            {(pass_type === "HomePass") && (
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Date</p>
            <div className="row mx-auto p-2">
            <div className="col-md-6">
            <p className="lead">From</p>
            <input type="date"
                className="form-control my-3"
                onChange={handleChange("from_date")}
                value={from_date}
                />
            </div>
            <div className="col-md-6">
                <p className="lead">To</p>
                <input type="date"
                    className="form-control my-3"
                    onChange={handleChange("to_date")}
                    value={to_date}
                />
            </div>
                </div>
                </div>
            )}
                <div className="card my-2">
                <p className="lead card-header text-white bg-dark">Reason</p>
                <div className="p-2">
                <textarea type="text"
                    className="form-control my-3"
                    onChange={handleChange("reason")}
                    value={reason}
                />
                </div>
            </div>
            <button onClick={onSumbit} className="btn btn-block p-2 btn-outline-success">Apply</button>
            </div>
            </form>
        )
    }


    return (
        <React.Fragment>
        <ToastContainer position="top-center"/>
        <div className="row bg-white rounded">
        <div className="col-md-8 offset-md-2">
        {loading ? LoadingScreen() : PassForm()}
        </div>
        </div>
        </React.Fragment>
    )
}










export default EditPas