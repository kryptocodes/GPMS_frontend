import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './Home/home'
import Dashboard from './Home/dashboard'

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                    <Route path="/dashboard" exact component={Dashboard}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
