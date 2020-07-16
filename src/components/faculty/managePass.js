import React,{useState,useEffect} from 'react'
import { getFacultyPass,updateStatus } from '../../auth/pass' 
import { isAuthenticated } from '../../auth'
import Empty from '../../assets/empty.svg'
import LoadingScreen from '../../Home/loadingScreen'

//antd components
import { Modal } from 'antd'

const ManagePass = () => {
    
    const [values,setValues] = useState([])

    const [loading,setLoading] = useState(true)

    const [filters,setFilter] = useState(false)

    const {user,token} = isAuthenticated()

    const preload = () => {
        getFacultyPass(user._id,token)
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                setValues(data)
                setLoading(false)
            }
        })
        }

    useEffect(() => {
        preload()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const onSubmit = async (passId,status) => {
        console.log(status)
        await updateStatus(user._id,token,passId,status)
        .then(data => {
            if(data.error){
                console.log(data.error)
            }
            else{
                preload()
            }
        })
    }

    const Approve = (passId,status) => {
        Modal.confirm({
            title:"Pass",
            centered:true,
            content:"Do you want to approve",
            okText:"Yes",
            cancelText:"Close",
            onOk() {
                onSubmit(passId,status)
            }
        })
    }

    const Decline = (passId,status) => {
        Modal.confirm({
            title:"Pass",
            centered:true,
            content:"Are you sure? Do you want to decline",
            okText:"Decline",
            okType:"danger",
            cancelText:"Close",
            onOk() {
                 onSubmit(passId,status)
            }
        })
    }

    const options = () => {
        return(
            <div className="d-flex justify-content-center">
            <div className="mx-auto btn-group btn-group-toggle" data-toggle="buttons">
                 <label className="btn btn-outline-secondary active">
                     <input 
                        type="radio" 
                        onClick={() => setFilter(false)}/> All
                </label>
                <label className="btn btn-outline-secondary">
                <input 
                   type="radio" 
                   onClick={() => setFilter('HomePass')}/> Home Pass
                </label>
                <label className="btn btn-outline-secondary">
                <input 
                   type="radio" 
                   onClick={() => setFilter('Out Pass')}/> Out Pass
                </label>
            </div>
            </div>       
        )
    }

    const passinfo = () => (
        <React.Fragment>
        {(values.length === 0) ? 
        (<img src={Empty} className="rounded d-block mx-auto w-75" 
         alt="empty"/>) : options()}
        <div className="jumbotron-fluid">
        {values && values.filter(pass => (filters ? pass.pass_type === filters : pass)).map((pass,index)=> (
            <ul className="list-group" key={index}>
            <div className="card my-4 p-4">
                    <h4 className="card-header row m-0 bg-dark text-white bd-highlight">
                        <div className="col-md-8">
                        <span><span className="badge badge-success flex-grow-1 mr-2">Name:</span>{pass.info.name}</span>
                        </div>
                        <div className="col-md-4">
                        <span><span className="badge badge-success mr-2">Pass type</span>{pass.pass_type}</span>
                        </div>
                     </h4>
        <div className="d-flex flex-column">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Expected leaving time:</span>{pass.exp_dep_time}
        </li>
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">Expected arrival time:</span>{pass.exp_arr_time}
        </li>
        </div>
        {(pass.pass_type === "HomePass") && (
        <div className="d-flex flex-row">
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">From:</span>{pass.from_date}
        </li>
        <li className="list-group-item flex-grow-1">
            <span className="badge badge-success mr-2">To:</span>{pass.to_date}
        </li>
        </div>)}
        <div className="row m-0">
        <li className="list-group-item flex-grow-1">
            <p className="text-justify"><span className="badge badge-success mr-2">Reason:</span>{pass.reason}</p>
        </li>
        <div className="d-flex">
        <button onClick={() =>{Approve(pass._id,{status:"Approved"})}}  type="button" className="btn btn-sm btn-warning mr-3">Approve</button>
        <button onClick={() =>{Decline(pass._id,{status:"Declined"})}} type="button" className="btn btn-sm btn-danger">Decline</button>
        </div>
        </div>
        </div>
        </ul>
        ))}      
        </div>
        </React.Fragment>         
    )

    return (
        <React.Fragment>
        {loading ? LoadingScreen() :
        passinfo()}
        </React.Fragment>
    )
}

export default ManagePass
