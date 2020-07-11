import React from 'react'
import Base from '../Home/base'
import EnRoll from '../components/warden/EnRoll'
import goBack from '../components/common/back'

const Enrollment = () => {
    return (
        <Base title="Enrollment"
               className="container">
               {goBack({className:"ml-1",Route:"/warden/dashboard"})}
               {EnRoll()}
        </Base>
    )
}










export default Enrollment