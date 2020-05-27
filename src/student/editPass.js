import React,{useState,useEffect} from 'react'
import Base from '../Home/base'
import { Link } from 'react-router-dom'
import { isAuthenticated } from '../auth'
import { getPass } from '../auth/pass'

const EditPass = ({match}) => {
    
    const [values,setValues] = useState({
        pass_type:"",
        exp_dep_time:"",
        exp_arr_time:"",
        from_date:"",
        to_date:"",
        reason:""
    })

    const {pass_type,exp_dep_time,exp_arr_time,from_date,to_date,reason} = values

    const {user,token} = isAuthenticated()

    const handleChange = name => event => {
        setValues({...values,[name]:event.target.value})
    }

    const preload = passId => {
        getPass(passId)
        .then(data => {
            const {pass_type,exp_arr_time,exp_dep_time,from_date,to_date,reason} = data
            if(data.error){
                console.log(data.error)
            } else{
                setValues({
                    ...values,
                    pass_type,
                    exp_dep_time,
                    exp_arr_time,
                    from_date,
                    to_date,
                    reason
                })
            }
        })
        }

      useEffect(() => {
          preload(match.params.passId)
      }, [])

      const onSumbit = () => {
          
      }

    const goBack = () => {
        return(
            <div className="mr-2 ml-3">
            <Link className="btn btn-lg btn-warning" to="/student/viewpass">Back</Link>
            </div>
        )
    }


    const PassForm = () => {
        return(
            <form>
            <div className="form-group jumbotron bg-white">
            <div className="card my-2">
            <p className="lead card-header text-white bg-dark">Time</p>
            <div className="row mx-auto p-2">
            <div className="col-md-5">
            <p className="lead">Expected leaving time</p>
            <input type="time"
                className="form-control my-3"
                onChange={handleChange("exp_dep_time")}
                required
                value={exp_dep_time}
                />
            </div>
            <div className="col-md-5">
                <p className="lead">Expected arrival time</p>
                <input type="time"
                    className="form-control my-3"
                    onChange={handleChange("exp_arr_time")}
                    required
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
                required
                value={from_date}
                />
            </div>
            <div className="col-md-6">
                <p className="lead">To</p>
                <input type="date"
                    className="form-control my-3"
                    onChange={handleChange("to_date")}
                    required
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
                    required
                    value={reason}
                />
                </div>
            </div>
            <button  className="btn btn-block p-2 btn-outline-success">Apply</button>
            </div>
            </form>
        )
    }


    return (
        <Base title="Edit Pass" className="container">
        {goBack()}
        {PassForm()}
        </Base>
    )
}










export default EditPass