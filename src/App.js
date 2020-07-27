import React from 'react';
import GlobalState from "./components/context/GlobalState";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom";
import Navigation from "./components/Navigation";
import Shop from "./components/Shop";
import LogIn from "./components/LogIn";
import SignUp from "./components/SignUp";
import Cart from "./components/Cart";
import ItemDetails from "./components/ItemDetails";
import Footer from "./components/Footer";
import PageNotFound from "./components/PageNotFound";
import './App.css';

export default function App() {
  return (
    <GlobalState>
      <div className="App">
        <Router>
          <Navigation />{/* NavLink mora biti u Router komponenti */}
          <Switch>
            <Route path="/" exact component={Shop}></Route>
            <Route path="/LogIn" component={LogIn}></Route>
            <Route path="/SignUp" component={SignUp}></Route>
            <Route path="/Cart" component={Cart}></Route>
            <Route path="/ItemDetails" component={ItemDetails}></Route>
            <Route component={PageNotFound}></Route>
          </Switch>
          <Footer />
        </Router>
      </div>
    </GlobalState>
  );
}

