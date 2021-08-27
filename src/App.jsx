import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLogIn from "./components/PageLogIn/PageLogIn";
import PageSignUp from "./components/PageSignUp/PageSignUp";
import Navbar from "./components/Navbar/Navbar";
import NoMatch from "./components/NoMatch/NoMatch";
// import Footer from "./components/subComponents/Footer/Footer";
import Dashboard from "./components/Products/Products";
import Orders from "./components/Orders/Orders";
import Graphs from "./components/Graphs/Graphs";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import DashboardCards from "./components/DashboardCards/DashboardCards";
import Product from "./components/Product/Product";

import "./App.css";
import PageUsers from "./components/Users/PageUsers";

function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <Router>
        <Navbar />
        <DashboardCards />
        <div>
          <Switch>
            {/* <Route exact path="/registro" component={PageSignUp} /> */}
            <Route exact path="/login" component={PageLogIn} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/create-product" component={CreateProduct} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/graphs" component={Graphs} />
            <Route exact path="/users" component={PageUsers} />
            <Route exact path="/:slug" component={Product} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
