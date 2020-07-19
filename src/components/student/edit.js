import React,{useState,useEffect} from 'react'
import { useForm } from 'react-hook-form'
import { isAuthenticated } from '../../auth'
import { getPass,updatePass } from '../../auth/pass'
import LoadingScreen from '../../Home/loadingScreen'
import { ToastContainer, toast } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'



const EditPas = ({match}) => {

    const { register,handleSubmit,errors } = useForm({})
    
    const [values,setValues] = useState()

    const [loading,setLoading] = useState(true)

    const {user,token} = isAuthenticated()

    const preload = (passId) => {
         getPass(passId)
        .then(data => {
            if(data.error){
                toast.error(data.error)
            } else{
                setValues(data)
                setLoading(false)
            }
        })
        }

      useEffect(() => {
          preload(match.params.passId)
          // eslint-disable-next-line react-hooks/exhaustive-deps
      }, [])

      const onSubmit = (values) => {
          updatePass(user._id,token,match.params.passId,values)
          .then(data => {
            if(data.error){
                toast.error(data.error)
            } else {
                toast.success("Updated Successfully")
            }
        })
    }

    const warning = () => (
        <div className="invalid-feedback d-block">This field is required</div>
    )

    const PassForm = () => {
        const {pass_type,exp_dep_time,exp_arr_time,from_date,to_date,reason} = values
        return(
            <form onSubmit={handleSubmit(onSubmit)}>
            <div className="form-group jumbotron bg-white shadow rounded">
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Time</p>
            <div className="row mx-auto p-2">
            <div className="col-md-5">
            <p className="lead">Expected leaving time</p>
            <input type="time"
                className={errors.exp_dep_time ? "form-control is-invalid" : "form-control"}
                name="exp_dept_time"
                defaultValue={exp_dep_time}
                placeholder="hh:mm"
                ref={register({required:true })}
                />
                 {errors.exp_dep_time && warning()}
            </div>
            <div className="col-md-5">
                <p className="lead">Expected arrival time</p>
                 <input type="time"
                    className={errors.exp_arr_time ? "form-control is-invalid" : "form-control"}
                    name="exp_arr_time"
                    defaultValue={exp_arr_time}
                    placeholder="hh:mm"
                    ref={register({required:true})}
                />
                {errors.exp_arr_time && warning() }
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
                className={errors.from_date ? "form-control is-invalid" : "form-control"}         
                name="from_date"
                defaultValue={from_date}
                placeholder="dd-mm-yyyy"
                ref={register({required:true})}
                />
                {errors.from_date && warning()}
            </div>
            <div className="col-md-6">
                <p className="lead">To</p>
                 <input type="date"
                    className={errors.to_date ? "form-control is-invalid" : "form-control"}
                    name="to_date"
                    defaultValue={to_date}
                    placeholder="dd-mm-yyyy"
                    ref={register({required:true})}
                    />
                    {errors.to_date && warning()}
            </div>
                </div>
                </div>
            )}
                <div className="card my-2">
                <p className="lead card-header text-white bg-dark">Reason</p>
                <div className="p-2">
                <textarea type="text"
                className={errors.reason ? "form-control is-invalid" : "form-control"}
                    name="reason"
                    placeholder="Valid Reason"
                    defaultValue={reason}
                    ref={register({required:true})}
                />
                {errors.reason && warning()}
                </div>
            </div>
            <button type="submit" className="btn btn-block p-2 btn-outline-success">Apply</button>
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