import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";
import { signin ,authenticate , isAuthenticated } from "../auth/index"

const Signin = () => {
  const [values , setValues] = useState({
    email: "",
    password: "",
    error: "",
    loading: false,
    didRedirect: false
  })

  const { email,password,error,loading,didRedirect} = values;
  const { user } = isAuthenticated()

  const handleChange = name => event => {
    setValues({...values,error: false, [name]: event.target.value})
  }

  const onSubmit = event => {
    event.preventDefault()
    setValues({ ...values,error: false, loading: true})
    signin({email,password})
      .then(data => {
        if(data.error) {
          setValues({ ...values,error:data.error, loading:false})
        } else{
          authenticate(data, () => {
            setValues({
              ...values,
              didRedirect: true
            })
          })
        }
      })
      .catch(console.log("sigin request failed"))
  }

  const performRedirect = () => {
      if(isAuthenticated()){
        return <Redirect to="/dashboard" />
      }
  }

  const loadingMessage = () => {
    return(
      loading && (
        <div className="alert alert-info">
          <h2>Loading...</h2>
        </div>
      )
    )
  } 

  const errorMessage = () => {
    return ( 
      <div className="row">
      <div className="col-md-5 offset-sm-3 text-left">
      <div className="alert alert-danger" style={{display: error ? "" : "none"}}>
      {error}
      </div>
      </div>
      </div>
    )
  }


  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Username</label>
              <input
                onChange={handleChange("email")}
                value={email}
                placeholder="Enter your Username"
                className="form-control"
                type="username"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                onChange={handleChange("password")}
                value={password}
                placeholder="Enter your password"
                className="form-control"
                type="password"
              />
            </div>
            <button 
              onClick={onSubmit}
              className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  }

  return (
      <div> 
      <div className="jumbotron bg-success">
      <h1 className="display-3 text-center text-white">Signin</h1>
      </div>
      <div className="container justify-content-center">
      {loadingMessage()}
      {errorMessage()}
      {signInForm()}
      {performRedirect()}
        <p className="text-center">{JSON.stringify(values)}</p>
      </div>
      </div>
  )
}




export default Signin