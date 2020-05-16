import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './Home/home'
import Dashboard from './student/dashboard'
import FacultyDashboard from './Home/faculty_dashboard'
import StudentRoute from './auth/studentDashboard'
import FacultyRoute from './auth/facultyDashboard'
import UpdatePassword from './auth/updatePassword'

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <FacultyRoute path="/faculty/dashboard" exact component={FacultyDashboard}/>
                    <StudentRoute path="/dashboard" exact component={Dashboard}/>
                    <StudentRoute path="/student/updatepassword" exact component={UpdatePassword}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
