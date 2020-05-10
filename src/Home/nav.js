import React from 'react'
import { Switch } from 'react-router-dom'

export default function nav() {
    return (
        <div>
            <nav className="navbar navbar-expand-lg navbar-light bg-dark">
                <a className="navbar-brand text-white" href="#">GPMS</a>
                    <button className="navbar-toggler" type="button" data-toggle="collapse" data-target="#navbarNav" aria-controls="navbarNav" aria-expanded="false" aria-label="Toggle navigation">
              <span className="navbar-toggler-icon"></span>
            </button>
            <div className="collapse navbar-collapse" id="navbarNav">
              <ul className="navbar-nav">
                <li className="nav-item">
                </li>
                <li className="nav-item">
                </li>
                </ul>
            </div>
            </nav>
        </div>
    )
}
