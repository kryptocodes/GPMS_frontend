import React,{ useState, useEffect } from 'react'
import { getStudent, addAtten } from '../../auth/helpers/wardenStats'
import { isAuthenticated } from '../../auth'
import LoadingScreen from '../../Home/loadingScreen'

const Attendance = () => {

    const [values,setValues] = useState([])

    const [loading,setLoading] = useState(true)

    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    date = dd + '/' + mm  + '/' + yyyy;

    const { user,token } = isAuthenticated()

    const Student = () => {
        getStudent(user._id,token)
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                setValues(data)
                setLoading(false)
            }
        })
    }

    const onSubmit = (e,id,status) => {
        console.log(id)
        e.target.disabled = true
        addAtten(user._id,token,{student:id,date,status:status})
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else {
                console.log(data)
            }
        })
    }

    

    

    useEffect(() => {
        Student()
        // eslint-disable-next-line
    }, [])

    const student = () => (
        <React.Fragment>
        <h3 className="text-center">Date:{date}</h3>
        <div className="jumbotron-fluid table-responsive-md">
        <table className="table">
            <thead className="thead-dark">
              <tr>
                <th scope="col">S.No.</th>
                <th scope="col">Name</th>
                <th scope="col">Dept</th>
                <th scope="col">Year</th>
                <th scope="col">Room No</th>
                <th scope="col">Status</th>
              </tr>
            </thead>
        {values && values.map((student,index) => (
        
        
            <tbody key={index}>
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{student.name}</td>
                    <td>{student.dept}</td>
                    <td>{student.year}</td>
                    <td>{student.room_no}</td>
                    <td> <React.Fragment> 
                    <button 
                    className="btn btn-sm btn-success"
                    onClick={(e)=> {onSubmit(e,student._id,"Present")}}
                    >
                    Present
                </button>
                <button 
                    className="btn btn-sm btn-danger"
                    onClick={(e) => {onSubmit(e,student._id,"Absent")}}
                    >
                    Absent    
                </button>
                    
                    </React.Fragment></td>
                </tr>
            </tbody>))} 
            
            </table>
            
        </div>
        
        </React.Fragment>         
    )

    return (
        <React.Fragment>
        {loading ? LoadingScreen() :
            student() }
        </React.Fragment>
    )
}










export default Attendance