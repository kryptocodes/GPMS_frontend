import React,{ useState , useEffect } from 'react'

//ant components
import 'antd/dist/antd.css';
import { Table } from 'antd';
import { getStudent } from '../../auth/helpers/wardenStats';



const StudentInfo = () => {

    const [values,setValues] = useState([])

    const Student = () => {
        getStudent()
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                setValues(data)
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
        room_no: student.room_no
    }))



    const StudentTable = () => {
        return(
            <Table columns={columns} dataSource={data} bordered pagination={false} />
        )
    }
    
    
    return (
        <div>
            {StudentTable()}
        </div>
    )
}










export default StudentInfo