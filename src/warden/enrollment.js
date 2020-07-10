import React from 'react'
import Base from '../Home/base'
import EnRoll from '../components/warden/EnRoll'
import goBack from '../components/common/back'

const Enrollment = () => {
    return (
        <Base title="Enrollment"
               className="container mx-auto shadow-lg mt-2 mb-2">
               {goBack()}
               {EnRoll()}
        </Base>
    )
}










export default Enrollment