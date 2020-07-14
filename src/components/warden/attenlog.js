import React,{ useState,useEffect } from 'react'
import { getAttendance } from '../../auth/helpers/wardenStats'
import LoadingScreen from '../../Home/loadingScreen'

const Attenlog = () => {

    const [values,setValues] = useState([])

    const [loading,setLoading] = useState(true)

    var date = new Date();
    var dd = String(date.getDate()).padStart(2, '0');
    var mm = String(date.getMonth() + 1).padStart(2, '0'); //January is 0!
    var yyyy = date.getFullYear();

    date = dd + '/' + mm  + '/' + yyyy;

    const Student = () => {
        getAttendance()
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
        {values && values.map((atten,index) => (
        
        
            <tbody key={index}>
                <tr>
                    <th scope="row">{index+1}</th>
                    <td>{atten.student.name}</td>
                    <td>{atten.student.dept}</td>
                    <td>{atten.student.year}</td>
                    <td>{atten.student.room_no}</td>
                    <td>{atten.status}</td>
                </tr>
                </tbody>))}
            </table>
        </div>
        </React.Fragment>         
    )

    return (
        <div>
            {loading ? 
                LoadingScreen() : ( 
                student() 
            )}
        </div>
    )
}









export default Attenlog 