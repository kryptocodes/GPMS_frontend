import React,{ useState , useEffect } from 'react'
import { getStudent } from '../../auth/helpers/wardenStats';
import { isAuthenticated } from '../../auth';

//ant components
import { Table } from 'antd';




const StudentInfo = () => {

    const [values,setValues] = useState([])

    const { user, token } = isAuthenticated()

    const Student = () => {
        getStudent(user._id,token)
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                setValues(data)
                console.log(data)
            }
        })
    }

    useEffect(() => {
        Student()
    },[])

    const columns = [
        {
            title: 'S.No',
            width: 5,
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
    }))



    const StudentTable = () => {
        return(
            <Table
                className="table-responsive"
                columns={columns}
                expandable={{
                    expandedRowRender: record => ( 
                        <p className="mx-auto">
                            <strong className="p-4">Mobile No:</strong>{record.mobile_no}
                            <br/>
                            <strong className="p-4">Roll No:</strong>{record.roll_no}
                            <br/>
                            <strong className="p-4">Address:</strong>{record.address}
                        </p>)
                }} 
                dataSource={data} 
                bordered 
                pagination={false} />
        )
    }
    
    
    return (
        <div className="container">
            {StudentTable()}
        </div>
    )
}










export default StudentInfo