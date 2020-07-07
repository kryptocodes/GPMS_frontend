import React from 'react'
import Nav from './nav'
import 'antd/dist/antd.css'

const Base = ({
    title,
    description,
    className,
    children
}) => {
    return (
        <div>
            <Nav/>
            <div className="jumbotron-fluid bg-info text-center">
                 <h2 className="text-white text-center p-4">{title}</h2>
                  <p className="lead">{description}</p>
            </div>
            <div className={className}>{children}</div>
         </div>
    )
}






export default Base