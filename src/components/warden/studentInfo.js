import React,{ useState , useEffect } from 'react'
import { getStudent } from '../../auth/helpers/wardenStats';
import { isAuthenticated } from '../../auth';

//ant components
import { Table,Descriptions } from 'antd';




const StudentInfo = () => {

    const [values,setValues] = useState([])

    const [Loading,setLoading] = useState(true)

    const { user, token } = isAuthenticated()

    const Student = () => {
        getStudent(user._id,token)
        .then(data => {
            if(data.error){
                console.log(data.error)
            } else{
                setValues(data)
                setLoading(false)
            }
        })
    }

    useEffect(() => {
        Student()
        // eslint-disable-next-line
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
    }))



    const StudentTable = () => {
        return(
            <Table
                className="table-responsive"
                columns={columns}
                expandable={{
                    expandedRowRender: record => ( 
                        <Descriptions
                            className="container" 
                            column={{ xxl: 1, xl: 1, lg: 1, md: 1, sm: 1, xs: 1 }}
                            bordered >
                            <Descriptions.Item label="Mobile No:">{record.mobile_no}</Descriptions.Item>
                            <Descriptions.Item label="Roll No:">{record.roll_no}</Descriptions.Item>
                            <Descriptions.Item label="Address:">{record.address}</Descriptions.Item>
                        </Descriptions>
                        )
                }} 
                dataSource={data} 
                bordered 
                pagination={false}
                loading={Loading} />
        )
    }
    
    
    return (
        <div>
            {StudentTable()}
        </div>
    )
}










export default StudentInfo