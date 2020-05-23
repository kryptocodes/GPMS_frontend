import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { signin ,authenticate , isAuthenticated } from "../auth/index"

const Signin = () => {
  const [values , setValues] = useState({
    email: "",
    password: "",
    error: "",
    buttonText:"Log in",
    didRedirect: false
  })

  const { email,password,error,buttonText,didRedirect} = values;
  const { user } = isAuthenticated()

  const handleChange = name => event => {
    setValues({...values,error: false, [name]: event.target.value})
  }

  const onSubmit = event => {
    event.preventDefault()
    setValues({ ...values,buttonText:"Logging in",error: false, loading: true})
    signin({email,password})
      .then(data => {
        if(data.error) {
          setValues({ ...values,buttonText:"Log in",error:data.error, loading:false})
        } else{
          authenticate(data, () => {
            setValues({
              ...values,
              buttonText:"Log in",
              didRedirect: true
            })
          })
        }
      })
      .catch(console.log("sigin request failed"))
  }

  //to perform redirect to dashboard
  const performRedirect = () => {
    if(isAuthenticated()){
    if(didRedirect) {
      if(user && user.role === 1){
        return <Redirect to="/faculty/dashboard"/>
      } else{
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
      //signin form 
      <div className="row m-0">
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
      </div>
    );
  }

  return (
      <div> 
      <div className="jumbotron-fluid bg-info">
      <h1 className="display-3 text-white text-center p-4">GPMS</h1>
      </div>
      <div className="container p-4 mx-auto">
      <div className="row py-4 my-4 offset-md-2">
      <div className="col-md-4 mt-5">
      <a href="https://amrita.edu.in">
      <img src="http://moodle.amrita.edu.in/pluginfile.php/1/theme_essential/logo/1589905491/Amrita%20logo.png" 
          className="w-100"
          alt="Amrita logo"/>
      </a>
      </div>
      <div className="col-md-8">
      {signInForm()}
      {performRedirect()}
      </div>
      </div>
      </div>
      </div>
  )
}




export default Signin