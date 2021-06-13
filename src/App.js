import './App.css';
import React from "react";
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom';
import 'tachyons';
import {Navbar} from "./components/Navbar";
import {EmployeePanel} from "./components/EmployeePanel";
import {Home} from "./components/Home";
import {Cart} from "./components/Cart";

function App() {
  return (
    <Router>
      <div className="w-100">
        <Navbar/>

        <Switch>
          <Route exact path="/">
            <Home />
          </Route>
          <Route exact path="/employee">
            <EmployeePanel />
          </Route>
          <Route exact path="/cart">
            <Cart />
          </Route>
        </Switch>
      </div>
    </Router>
  );
}

export default App;
