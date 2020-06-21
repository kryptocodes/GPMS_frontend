import React from "react"
import {Route, Redirect} from "react-router-dom"
import { isAuthenticated } from "./index"

const WardenRoute = ({ component: Component, ...rest }) => {
    return (
      <Route
        {...rest}
        render={props =>
            (isAuthenticated() && isAuthenticated().user.role === 4)  ? (
                <Component {...props} />
            ) : (
            <Redirect
              to={{
                pathname: "/",
                state: { from: props.location }
              }}
            />
          )
        }
      />
    );
  }


  export default WardenRoute