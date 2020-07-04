import React from 'react'
import Base from '../Home/base'
import EnRoll from '../components/warden/EnRoll'

const Enrollment = () => {
    return (
        <Base title="Enrollment"
               className="container shadow-lg mt-5">
               {EnRoll()}
        </Base>
    )
}










export default Enrollment