import React from 'react'
import Base from '../Home/base'
import goBack from '../components/common/back'
import EditPas from '../components/student/edit'

const EditPass = ({match}) => {
    return (
        <Base 
            title="Edit Pass"
            className="container">
            {goBack({className:"ml-1",Route:"/student/managepass"})}
            {EditPas({match})}
            </Base>
    )
}










export default EditPass