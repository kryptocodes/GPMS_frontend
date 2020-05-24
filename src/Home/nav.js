import React from 'react'
import {Link, withRouter} from "react-router-dom"
import {signout , isAuthenticated } from '../auth'


const Nav = ({history}) => (
    <div>
        <nav className="navbar navbar-light bg-dark">
        <span className="text-white display-4">GPMS</span>
        <ul className="nav navbar-nav">
            {isAuthenticated() && (
                <li className="nav-item">
                <Link
                className="nav-link text-warning"
                onClick={() => {
                    signout(() => {
                        history.push("/")
                    })
                }}
                >
                    Signout
                </Link>
            </li>
            )}
             
        </ul>
    </nav>
    </div>
)



export default withRouter(Nav)