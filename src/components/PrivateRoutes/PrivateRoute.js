import { useSelector } from "react-redux";
import React from "react";
import { Route, Redirect } from "react-router-dom";

const PrivateRoute = ({ component: Component }) => {
  const accessKey = useSelector((state) => state.accessKey);
  return (
    <Route
      render={(props) =>
        accessKey ? <Component {...props} /> : <Redirect to="/login" />
      }
    />
  );
};

export default PrivateRoute;
