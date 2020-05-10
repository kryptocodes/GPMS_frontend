import React, { useState } from "react";
import { Link, Redirect } from "react-router-dom";

  const signInForm = () => {
    return (
      <div className="row">
        <div className="col-md-6 offset-sm-3 text-left">
          <form>
            <div className="form-group">
              <label className="text-light">Username</label>
              <input
                placeholder="Enter your Username"
                className="form-control"
                type="username"
              />
            </div>
            <div className="form-group">
              <label className="text-light">Password</label>
              <input
                placeholder="Enter your password"
                className="form-control"
                type="password"
              />
            </div>
            <button className="btn btn-success btn-block">
              Submit
            </button>
          </form>
        </div>
      </div>
    );
  };

  
  export default function signin() {
  return (
      <div> 
      <div className="jumbotron bg-success">
      <h1 className="display-3 text-center text-white">Signin</h1>
      </div>
      <div className="container justify-content-center">
      {signInForm()}
      </div>
      </div>
  )
}
