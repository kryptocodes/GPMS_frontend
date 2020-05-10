import React from 'react'
import {BrowserRouter,Switch,Route} from "react-router-dom"
import Home from './Home/home'

export default function Routes() {
    return (
        <div>
            <BrowserRouter>
                <Switch>
                    <Route path="/" exact component={Home}/>
                </Switch>
            </BrowserRouter>
        </div>
    )
}
