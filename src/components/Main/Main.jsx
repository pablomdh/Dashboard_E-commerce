import "../../App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import NoMatch from "../NoMatch/NoMatch";
import Navbar from "../Navbar/Navbar";

function Main() {
  return (
    <div>
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <Switch>
              <Route exact path="/" component={Dashboard} />
              <Route component={NoMatch} />
            </Switch>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Main;
