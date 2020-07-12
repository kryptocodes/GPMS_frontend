import React,{ useState , useEffect } from 'react'

//ant components
import { Table } from 'antd';
import { Managepass } from '../../auth/helpers/wardenStats';
import { isAuthenticated } from '../../auth';



const ManagePass = () => {

    const [values,setValues] = useState([])

    const [Loading,setLoading] = useState(true)

    const { user,token } = isAuthenticated()

    const Student = () => {
        Managepass(user._id,token)
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
        // eslint-disable-next-line react-hooks/exhaustive-deps
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
        },
        {
            title: 'Pass Type',
            width: 100,
            dataIndex: 'pass_type',
            key: 'pass_type'
        }
    ]

    const data = values.map((student,index) => ({
        key: index+1,
        name: student.info.name,
        dept: student.info.dept,
        year: student.info.year,
        room_no: student.info.room_no,
        pass_type: student.pass_type,
        reason: student.reason
    }))



    const StudentTable = () => {
        return(
            <Table 
                className="table-responsive"
                columns={columns}
                expandable={{
                    expandedRowRender: record => ( 
                        <p className="mx-auto">
                            <strong className="p-2">Reason:</strong>{record.reason}
                        </p>)
                }} 
                dataSource={data} 
                bordered 
                pagination={false}
                loading={Loading}/>
        )
    }
    
    
    return (
        <div>
            {StudentTable()}
        </div>
    )
}





















export default ManagePass