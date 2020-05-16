import React from 'react'
import Nav from './nav'

const Base = ({
    title="",
    description="",
    className="",
    children
}) => {
    return (
        <div>
        <Nav/>
            <div className="jumbotron-fluid bg-success text-center">
                 <h2 className="display-3 text-center p-4">{title}</h2>
                  <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
         </div>
    )
}






export default Base