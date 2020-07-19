import React from 'react'
import { BrowserRouter , Switch , Route } from "react-router-dom"
import Home from './Home/home'
import Dashboard from './student/dashboard'
import FacultyDashboard from './faculty/faculty_dashboard'
import StudentRoute from './auth/studentDashboard'
import FacultyRoute from './auth/facultyDashboard'
import SecurityRoute from './auth/security'
import UpdatePassword from './auth/updatePassword'
import UpdateProfile from './student/updateProfile'
import ApplyPass from './student/applypass'
import OutPass from './student/outpass'
import ManagePass from './student/managePass'
import ViewPass from './faculty/view_pass'
import UpdateFacultyInfo from './faculty/updateInfo'
import EditPass from './student/editPass'
import SecurityDashboard from './security/security_dashboard'
import Entry_check from './security/entry_check'
import Exit_check from './security/exit_check'
import ManageLogs from './security/logs'
import WardenRoute from './auth/warden'
import WardenDashboard from './warden/dashboard'
import Attend from './warden/attend'
import Atten from './warden/attenLog'
import StudInfo from './warden/StudInfo'
import ManagePaSS from './warden/ManagePaSS'
import Enrollment from './warden/enrollment'
import StudentInfo from './faculty/StudentInfo'

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <FacultyRoute path="/faculty/dashboard" exact component={FacultyDashboard}/>
                    <FacultyRoute path="/faculty/studentinfo" exact component={StudentInfo}/>
                    <FacultyRoute path="/faculty/updatepassword" exact component={UpdatePassword}/>
                    <FacultyRoute path="/faculty/updateInfo" exact component={UpdateFacultyInfo}/>
                    <FacultyRoute path="/faculty/managepass" exact component={ViewPass}/>

                    <StudentRoute path="/dashboard" exact component={Dashboard}/>
                    <StudentRoute path="/student/updatepassword" exact component={UpdatePassword}/>
                    <StudentRoute path="/student/updateprofile" exact component={UpdateProfile}/>
                    <StudentRoute path="/student/gatepass" exact component={ApplyPass}/>
                    <StudentRoute path="/student/outpass" exact component={OutPass}/>
                    <StudentRoute path="/student/managepass" exact component={ManagePass}/>
                    <StudentRoute path="/student/pass/editpass/:passId" exact component={EditPass}/>
                   
                    <SecurityRoute path="/security/dashboard" exact component={SecurityDashboard}/>
                    <SecurityRoute path="/security/entry" exact component={Entry_check}/>
                    <SecurityRoute path="/security/exit" exact component={Exit_check}/>
                    <SecurityRoute path="/security/logs" exact component={ManageLogs}/>

                    <WardenRoute path="/warden/dashboard" exact component={WardenDashboard}/>
                    <WardenRoute path="/warden/attendance" exact component={Attend}/>
                    <WardenRoute path="/warden/log" exact component={Atten}/>
                    <WardenRoute path="/warden/managepass" exact component={ManagePaSS}/>
                    <WardenRoute path="/warden/enrollment" exact component={Enrollment}/>
                    <WardenRoute path="/warden/studentinfo" exact component={StudInfo}/>

                </Switch>
            </BrowserRouter>
        </div>
    )
}
