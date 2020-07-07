import React,{ useState } from 'react'
import { createUser } from '../../auth/helpers/wardenStats'
import { Link } from 'react-router-dom'

//antd components
import { Form, Input, Select, Button, Result } from 'antd'


const { Option } = Select

const EnRoll = () => {

    const [Loading,setLoading] = useState(false)
    
    const onSubmit = (values) => {
        const {name,email,year,room_no,dept,address,mobile_no,roll_no} = values
        const value = {name,email,year,room_no,dept,address,mobile_no,roll_no,password:"hello@123"}
        createUser(value)
        .then(data =>{
            if(data.error){
                console.log(data.error)
            } else{
            console.log(data)
            setLoading(true)
            }
        })
    }

    const onFinishFailed = errorInfo => {
        console.log("Error",errorInfo)
    }

    const Success = () => (
        <Result
    status="success"
    title="Created User" 
    extra={[
      <Link to="/warden/dashboard"><Button type="primary">
        Go Dashboard
      </Button></Link>,
      <Link to="/warden/enrollment"><Button type="primary">
        Create Another User
      </Button></Link>,
    ]}/>
    )

    const stud = () => {
        return (
            <Form 
                name="enrollment"
                layout="vertical"
                onFinish={onSubmit}
                onFinishFailed={onFinishFailed}
                >
                <Form.Item
                    name="name"
                    label="Name"
                    rules={[
                        {
                            required:true
                        }
                    ]}>
                        <Input/>
                </Form.Item>
                 <Form.Item
                    name="email"
                    label="Email"
                    rules={[
                        {
                            required:true
                        }
                    ]}>
                        <Input/>
                </Form.Item>
                <Form.Item label="Year" required>
                <Form.Item 
                    name="year"
                    noStyle
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Select placeholder="Select Year">
                        <Option value="1">I</Option>
                        <Option value="2">II</Option>
                        <Option value="3">III</Option>
                        <Option value="4">IV</Option>
                    </Select>
                </Form.Item>
                </Form.Item>

                <Form.Item
                name="room_no"
                label="Room No"
                rules={[
                    {
                        required:true
                    }
                ]}>
                    <Input/>
            </Form.Item>
             <Form.Item label="Dept" required>
                <Form.Item 
                    name="dept"
                    noStyle
                    rules={[
                        {
                            required: true
                        }
                    ]}>
                    <Select placeholder="Select Dept">
                        <Option value="CSE">CSE</Option>
                        <Option value="ECE">ECE</Option>
                        <Option value="EEE">EEE</Option>
                        <Option value="CE">CE</Option>
                        <Option value="ME">ME</Option>
                    </Select>
                </Form.Item>
                </Form.Item>
                 <Form.Item
                    name="address"
                    label="Address"
                    rules={[
                        {
                            required:true
                        }
                    ]}>
                        <Input.TextArea/>
                </Form.Item>
                 <Form.Item
                    name="mobile_no"
                    label="Mobile No"
                    rules={[
                        {
                            required:true
                        }
                    ]}>
                        <Input/>
                </Form.Item>
                 <Form.Item
                    name="roll_no"
                    label="Roll No"
                    rules={[
                        {
                            required:true
                        }
                    ]}>
                        <Input/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary" htmlType="submit">
                       Submit
                     </Button>
                 </Form.Item>
            </Form>
        )
    }

    return (
        <div className="p-5 row rounded">
            <div className="col-md-6 mx-auto">
            {Loading ? Success() :
            stud() }
            </div>
        </div>
    )
}










export default EnRoll