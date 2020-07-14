import React from 'react'
import Base from '../Home/base'
import HomePass from '../components/student/HomePass'
import goBack from '../components/common/back'


const Applypass = () => {
    return (
        <Base 
            title="Home Pass"
            className="container">
            {goBack({className:"ml-1",Route:"/dashboard"})}
            {HomePass()}
        </Base>
    )
}










export default Applypass