import React, { useState,useEffect } from "react";
import { Redirect } from "react-router-dom";
import { signin ,authenticate , isAuthenticated } from "../auth/index"
import logo from '../assets/logo.png'

//antd components
import { Form, Input, Button, Checkbox, Card } from 'antd'
import { UserOutlined, LockOutlined } from '@ant-design/icons'

const Signin = () => {

  const [values , setValues] = useState({
    error: "",
    buttonText:"Log in",
    didRedirect: false,
    Loading:false
  })

  const { email,password,error,didRedirect,Loading} = values;
  const { user } = isAuthenticated()

  const handleChange = name => event => {
    setValues({...values,error: false, [name]: event.target.value})
  }

  const onSubmit = values => {
    setValues({ ...values,error: false, Loading:true })
    signin(values)
      .then(data => {
        if(data.error) {
          setValues({...values,error:data.error, Loading:false })
          console.log(values)
        } else{
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            })
            
          })
        }
      })
  }

  const onFinishFailed = errorInfo => {
    console.log('Failed:', errorInfo);
  }


  useEffect(() => {
    if (isAuthenticated()){
      setValues({didRedirect:true})
    }
  },[]);

  //to perform redirect to dashboard
  const performRedirect = () => {
    if(isAuthenticated()){
    if(didRedirect) {
      if(user && user.role === 1){
        return <Redirect to="/faculty/dashboard"/>
      }
      if(user && user.role === 2){
        return <Redirect to="/security/dashboard"/>
      }
      if(user && user.role === 4){
        return <Redirect to="/warden/dashboard"/>
      }
       else{
        return <Redirect to="/dashboard"/>
      }
    }
  }
}

  //error console
  const errorMessage = () => {
    return ( 
      <div className="justify-content-center alert alert-danger text-center" 
            style={{display: error ? "" : "none"}}>
      {error}
      </div>
    )
  }


  const signInForm = () => {
    return (
       <Form
        className="login-form"
        layout="vertical"
        name="login-form"
        initialValues={{ remember: true }}
        onFinish={onSubmit}
        onFinishFailed={onFinishFailed}
      >
      {errorMessage()}
        <Form.Item
          name="email"
          label="Username"
          rules={[{ required: true, message: 'Please input your username!' }]}
        >
          <Input
            prefix={<UserOutlined className="site-form-item-icon" />}
            placeholder="Username"
            onChange={handleChange("email")}
            value={email}
          />
        </Form.Item>
        <Form.Item
          name="password"
          label="Password"
          rules={[{ required: true, message: 'Please input your Password!' }]}
        >
          <Input.Password
            prefix={<LockOutlined className="site-form-item-icon" />}
            type="password"
            placeholder="Password"
            onChange={handleChange("password")}
            value={password}
            
          />
        </Form.Item>
        <Form.Item>
        <Form.Item name="remember" valuePropName="checked" noStyle>
          <Checkbox>Remember me</Checkbox>
        </Form.Item>
        </Form.Item>
        <Form.Item>
          <Button
            type="primary"
            htmlType="submit"
            className="btn-block login-form-button"
            loading={Loading}
          >
            Log in
          </Button>
        </Form.Item>
      </Form>
      
      //signin form 
      /*<div className="row m-0">
        <div className="col-md-7 text-left">
          {errorMessage()} 
          <form>
            <div className="form-group">
              <label className="text-dark">Username</label>
              <input
                onChange={handleChange("email")}
                value={email}
                placeholder="Enter your Username"
                className="form-control"
                type="username"
              />
            </div>
            <div className="form-group">
              <label className="text-dark">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                placeholder="Enter your password"
                className="form-control"
                type="password"
                autoComplete="password"
              />
            </div>
            <p className="lead">Having trouble logging in ?</p>
            <div className="d-flex flex-row">
            <div className="mr-2">
            <button 
              onClick={onSubmit}
              className="btn btn-info btn-block">
              {buttonText}
            </button>
            </div>
            <div className="mr-2">
            <button 
              className="btn btn-danger btn-block">
              Reset
            </button>
            </div>
            </div>
          </form>
        </div>
      </div>*/
    )
  }

  return (
      <div className="container my-5 mx-auto">
      <Card>
      <div className="row d-flex justify-content-center">
      <div className="col-md-5 rounded pt-5 mt-3">
      <img src={logo} 
          className="w-100"
          alt="Amrita logo"/>
      </div>
      <div className="col-md-7 col-lg-5">
      {signInForm()}
      {performRedirect()}
      </div>
      </div>
      </Card>
      </div>
  )
}




export default Signin