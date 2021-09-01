import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLogIn from "./components/PageLogIn/PageLogIn";
// import Navbar from "./components/Navbar/Navbar";
import NoMatch from "./components/NoMatch/NoMatch";
import Dashboard from "./components/Dashboard/Dashboard";
import Orders from "./components/Orders/Orders";
import Graphs from "./components/Graphs/Graphs";
import CreateProduct from "./components/CreateProduct/CreateProduct";
import UpdateProduct from "./components/UpdateProduct/UpdateProduct";
import PageUsers from "./components/Users/PageUsers";
import Categories from "./components/Categories/Categories";
import Category from "./components/Category/Category";
import Products from "./components/Products/Products";
// import Footer from "./components/subComponents/Footer/Footer";
// import PageSignUp from "./components/PageSignUp/PageSignUp";
import SideBar from "./components/SideBar/SideBar";
import CreateCategory from "./components/CreateCategory/CreateCategory";

function App() {
  return (
    <div className="App d-flex flex-column h-100">
      <Router>
        {/* <Navbar /> */}
        <SideBar />
        <div>
          <Switch>
            {/* <Route exact path="/registro" component={PageSignUp} /> */}
            <Route exact path="/login" component={PageLogIn} />
            <Route exact path="/" component={Dashboard} />
            <Route exact path="/products" component={Products} />
            <Route exact path="/create-product" component={CreateProduct} />
            <Route exact path="/orders" component={Orders} />
            <Route exact path="/graphs" component={Graphs} />
            <Route exact path="/users" component={PageUsers} />
            <Route exact path="/categories" component={Categories} />
            <Route exact path="/create-category" component={CreateCategory} />
            <Route exact path="/category/:slug" component={Category} />
            <Route exact path="/:slug" component={UpdateProduct} />
            <Route component={NoMatch} />
          </Switch>
        </div>
        {/* <Footer /> */}
      </Router>
    </div>
  );
}

export default App;
