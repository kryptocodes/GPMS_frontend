import React from 'react'
import Base from '../Home/base'
import Outpass from '../components/student/outpass'
import goBack from '../components/common/back'



const Applypass = () => {
    return (
        <Base 
            title="Out Pass"
            className="container">
            {goBack({className:"ml-1",Route:"/dashboard"})}
            {Outpass()}
        </Base>
    )
}










export default Applypass