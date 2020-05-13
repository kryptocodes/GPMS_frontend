import React from 'react'
import {Link, withRouter} from "react-router-dom"
import {signout , isAuthenticated } from '../auth'


const currentTab = (history, path) => {
    if(history.location.pathname === path){
        return {color: '#0099ff'}
    } else{
        return {color: "#FFFFFF"}
    }
}

const Nav = ({history}) => (
    <div>
        <nav className="navbar navbar-expand-lg navbar-light bg-dark">
        <p className="text-white">GPMS</p>
        <button 
            className="navbar-toggler collapsed" 
            type="button" 
            data-toggle="collapse" 
            data-target="#navbarNav" 
            aria-controls="navbarNav" 
            aria-expanded="false" 
            aria-label="Toggle navigation"
        >
        <span className="close text-white"><i className="fa fa-times"></i></span>
        <span className="open text-white"><i className="fa fa-bars"></i></span>
      </button>
        <div className="collapse navbar-collapse justify-content-end" id="navbarNav">
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
        </div>  
    </nav>
    </div>
)



export default withRouter(Nav)