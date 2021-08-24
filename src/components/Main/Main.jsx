import "../../App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import Dashboard from "../Dashboard/Dashboard";
import NoMatch from "../NoMatch/NoMatch";
import DashboardCards from "../DashboardCards/DashboardCards";
import Orders from "../Orders/Orders";
import Graphs from "../Graphs/Graphs";
import CreateProduct from "../Dashboard/CreateProduct";
import Navbar from "../Navbar/Navbar";

function Main() {
  return (
    <div>
      <div className="App">
        <Router>
          <div>
            <Navbar />
            <div className="container bg-light">
              <DashboardCards />

              <Switch>
                <Route exact path="/" component={Dashboard} />
                <Route exact path="/create-product" component={CreateProduct} />
                <Route exact path="/orders" component={Orders} />
                <Route exact path="/graphs" component={Graphs} />
                <Route component={NoMatch} />
              </Switch>
            </div>
          </div>
        </Router>
      </div>
    </div>
  );
}

export default Main;
