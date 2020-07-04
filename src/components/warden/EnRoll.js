import React from 'react'

//antd components
import 'antd/dist/antd.css'
import { Form, Input, Select, Button } from 'antd'

const { Option } = Select

const EnRoll = () => {

    const stud = () => {
        return (
            <Form name="enrollment">
                <Form.Item
                    name="Name"
                    label="Name"
                    rules={[
                        {
                            required:true
                        }
                    ]}>
                        <Input/>
                </Form.Item>
                 <Form.Item
                    name="Email"
                    label="Email"
                    rules={[
                        {
                            required:true
                        }
                    ]}>
                        <Input/>
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
                    name="Address"
                    label="address"
                    rules={[
                        {
                            required:true
                        }
                    ]}>
                        <Input.TextArea/>
                </Form.Item>
                 <Form.Item
                    name="Mobile No"
                    label="mobile_no"
                    rules={[
                        {
                            type: 'number',
                            required:true
                        }
                    ]}>
                        <Input/>
                </Form.Item>
                 <Form.Item
                    name="Roll No"
                    label="roll_no"
                    rules={[
                        {
                            type: 'number',
                            required:true
                        }
                    ]}>
                        <Input/>
                </Form.Item>
                 <Form.Item
                    name="Password"
                    label="password"
                    hidden="true"
                    >
                        <Input 
                        defaultValue="hello@123"/>
                </Form.Item>
                <Form.Item>
                    <Button type="primary">
                       Submit
                     </Button>
                 </Form.Item>
            </Form>
        )
    }

    return (
        <div className="container p-5">
            {stud()}
        </div>
    )
}










export default EnRoll