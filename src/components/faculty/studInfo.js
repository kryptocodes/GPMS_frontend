import React, { useState, useEffect} from 'react'
import { isAuthenticated } from '../../auth'
import { getStudentInfo } from '../../auth/helpers/faculty'

//ant components
import { Table } from 'antd'

const StdInfo = () => {

    const [values,setValues] = useState([])

    const [loading,setLoading] = useState(true)

    const {user, token} = isAuthenticated()

    const Student = () => {
        getStudentInfo(user._id,token)
        .then( data => {
            setValues(data)
            setLoading(false)
        }).catch(err => {
            console.log(err.error)
        })
    }

    useEffect(() => {
        Student()
        // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])

    const columns = [
        {
            title: 'S.No',
            width: 15,
            dataIndex: 'key',
            key: 'key'
        },
        {
            title: 'Name',
            width: 100,
            dataIndex: 'name',
            key: 'name'
        },
        {
            title: 'Dept',
            width: 100,
            dataIndex: 'dept',
            key: 'dept'
        },
        {
            title: 'Year',
            width: 100,
            dataIndex: 'year',
            key: 'year'
        },
        {
            title: 'Room No',
            width: 100,
            dataIndex: 'room_no',
            key: 'room_no'
        }
    ]

    const data = values.map((student,index) => ({
        key: index+1,
        name: student.name,
        dept: student.dept,
        year: student.year,
        room_no: student.room_no,
        mobile_no: student.mobile_no,
        roll_no: student.roll_no,
        address: student.address
    }) )

    const StudentData = () => {
        return(
            <Table
                className="table-responsive"
                columns={columns} 
                dataSource={data} 
                bordered 
                pagination={false}
                loading={loading}/>
        )
    }

    return (
        <div>
        {StudentData()}
        </div>
    )
}










export default StdInfo