import "./App.css";
import React from "react";
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";
import PageLogIn from "./components/PageLogIn/PageLogIn";
import Main from "./components/Main/Main";
import PageSignUp from "./components/PageSignUp/PageSignUp";

import "./App.css";

function App() {
  return (
    <div className="App">
      <Router>
        <div>
          <Switch>
            <Route path="/registro" component={PageSignUp} />
            <Route path="/login" component={PageLogIn} />
            <Route component={Main} />
          </Switch>
        </div>
      </Router>
    </div>
  );
}

export default App;
