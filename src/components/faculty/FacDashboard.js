import React,{useState,useEffect} from 'react'
import { isAuthenticated } from '../../auth'
import { Link } from 'react-router-dom'
import { getUser } from '../../auth/update'
import LoadingScreen from '../../Home/loadingScreen'

//ant components
import 'antd/dist/antd.css'
import { Card, Descriptions } from 'antd'

const FacDashboard = () => {

    const [values,setValues] = useState({
        name:"",
        email:"",
        dept:"",
        year:"",
        loading:true
    })

    const { name,email,dept,year,loading } = values

    const { user } = isAuthenticated() 

    const preload = () => {
        getUser(user._id)
        .then(data =>{
            const {name,email,year,dept} = data
            if(data.error){
                console.log(data.error)
            }
            else{
                setValues({...values,name,email,year,dept,loading:false})
            }
        })
    }

    useEffect(() => {
        preload()
    },[])

    const faculty = () => {
        return (
            <Card>      
                    <div className="row m-0">
                        <Link className="nav-link text-info col-md-3">
                        <Card hoverable className="list-group-item">Check Student Info</Card>
                        </Link>
                        <Link to="/faculty/viewpass" className="nav-link text-info col-md-3">
                        <Card hoverable className="list-group-item">View Pass</Card>
                        </Link>
                        <Link className="nav-link text-info col-md-3">
                        <Card hoverable className="list-group-item">Log</Card>
                        </Link>
                        <Link to="/faculty/updatepassword" className="nav-link text-info col-md-3">
                        <Card hoverable className="list-group-item">Change Password</Card>
                        </Link>
                    </div>
            </Card>
        )
    }

    const info = () => {
        return(
            <Card 
                    title="Faculty Information"
                    extra={<Link to="/faculty/updateInfo">Update Profile</Link>}
                    className="rounded"
                    >
                <Descriptions
                    bordered
                    column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}>
                    
                <Descriptions.Item label="Name:">{name}</Descriptions.Item>
                <Descriptions.Item label="Dept:">{dept}</Descriptions.Item>
                <Descriptions.Item label="Year:">{year}</Descriptions.Item>
                </Descriptions>
                </Card>
    )}

    return (
        <React.Fragment>
            {loading && LoadingScreen()}
            {!loading &&  <React.Fragment>
            <div className="shadow mx-auto mb-4">
                {faculty()}
                </div>
                <div className="shadow mx-auto mb-4">
                {info()}
                </div>
            </React.Fragment>}
        </React.Fragment>
    )
}




export default FacDashboard