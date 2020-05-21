import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './Home/home'
import Dashboard from './student/dashboard'
import FacultyDashboard from './Home/faculty_dashboard'
import StudentRoute from './auth/studentDashboard'
import FacultyRoute from './auth/facultyDashboard'
import UpdatePassword from './auth/updatePassword'
import UpdateProfile from './student/updateProfile'
import ApplyPass from './student/applypass'
import OutPass from './student/outpass'
import ManagePass from './student/managePass'

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <FacultyRoute path="/faculty/dashboard" exact component={FacultyDashboard}/>
                    <FacultyRoute path="/faculty/updatepassword" exact component={UpdatePassword}/>
                    <StudentRoute path="/dashboard" exact component={Dashboard}/>
                    <StudentRoute path="/student/updatepassword" exact component={UpdatePassword}/>
                    <StudentRoute path="/student/updateprofile" exact component={UpdateProfile}/>
                    <StudentRoute path="/student/gatepass" exact component={ApplyPass}/>
                    <StudentRoute path="/student/outpass" exact component={OutPass}/>
                    <StudentRoute path="/student/viewpass" exact component={ManagePass}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
