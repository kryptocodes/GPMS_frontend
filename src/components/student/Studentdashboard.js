import React,{ useState,useEffect } from 'react'
import { isAuthenticated } from '../../auth'
import { Link } from 'react-router-dom'
import { getUser } from '../../auth/update'
import LoadingScreen from '../../Home/loadingScreen'

//ant component
import { Card, Descriptions } from 'antd'

const StudentBoard = () => {

    const [values,setValues] = useState({
        name:"",
        roll_no:"",
        room_no:"",
        dept:"",
        year:"",
        mobile_no:"",
        address:"",
        loading:true
    })

    const {name,roll_no,room_no,dept,year,mobile_no,address,loading} = values;
    
    const {user} = isAuthenticated()

    const preload = () => {
        getUser(user._id)
        .then(data => {
            const {roll_no,name,room_no,dept,year,mobile_no,address} = data;
            if(data.error){
                setValues({...values,error:data.error})
            } else{
                setValues({...values,roll_no,name,room_no,dept,year,mobile_no,address,loading:false})
            }
        })
    }

    useEffect(() => {
        preload();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
   

    const student = () => {
        return (
            <Card className="shadow rounded h-100">
                <h4 className="card-header bg-dark text-white">Student</h4>
                <ul className="list-group">
                    <Card hoverable>
                        <Link to="/student/gatepass" className="nav-link text-info">Apply Home Pass</Link>
                    </Card>
                    <Card hoverable>
                        <Link to="/student/outpass" className="nav-link text-info">Apply Out Pass</Link>
                    </Card>
                    <Card hoverable>
                    <Link to="/student/viewpass" className="nav-link text-info">View Pass Status</Link>
                    </Card>
                    <Card hoverable>
                    <Link to="/student/updatepassword" className="nav-link text-info">Update Password</Link>
                    </Card>
                </ul>
            </Card>
        )
    }

    const info = () => {
        return(
                <Card 
                    title="Student Information"
                    extra={<Link to="/student/updateprofile">Update Profile</Link>}
                    className="shadow rounded h-100"
                    >
                <Descriptions
                    bordered
                    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                    
                <Descriptions.Item label="Name:">{name}</Descriptions.Item>
                <Descriptions.Item label="Roll No:">{roll_no}</Descriptions.Item>
                <Descriptions.Item label="Room No:">{room_no}</Descriptions.Item>
                <Descriptions.Item label="Dept:">{dept}</Descriptions.Item>
                <Descriptions.Item label="Year:">{year}</Descriptions.Item>
                <Descriptions.Item label="Mobile No:">{mobile_no}</Descriptions.Item>
                <Descriptions.Item label="Address:">{address}</Descriptions.Item>
                </Descriptions>
                </Card>
    )}

    return (
            <React.Fragment>
            {loading ? LoadingScreen() : (
            <div className="row mx-auto">
                <div className="col-md-4 p-2 mx-auto">
                {student()}
                </div>
                <div className="col-md-7 p-2 mx-auto">
                {info()}
                </div>
            </div>)}
            </React.Fragment>
    )
}


export default StudentBoard