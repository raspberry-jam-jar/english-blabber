import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";

import './App.css';
import DeskControl from './common/DeskControl';


function Header() {
  return(
    <div className="header">
      <div className="header-navigation">
        <Link to="/shop">Shop</Link>
        <Link to="/users">Users</Link>
        <Link to="/groups">Groups</Link>
      </div>
    </div>
  )
}


function UsersDashboard () {
  return (
      <div className="container">
        <DeskControl form_type="user" title="Admins"/>
        <DeskControl form_type="user" title="Teachers"/>
        <DeskControl form_type="user" title="Students"/>
      </div>
  );
}


function ShopDashboard() {
  return(
    <div className="container">
        <DeskControl title="Draft"/>
        <DeskControl title="Published"/>
    </div>
  )
}


function GroupsDashboard() {
  return(
    <div className="container">
        <DeskControl title="Group1"/>
    </div>
  )
}


function App() {
  return (
    <Router>
      <Header/>
      <Switch>
        <Route exact path="/users">
          <UsersDashboard />
        </Route>
        <Route path="/groups">
          <GroupsDashboard />
        </Route>
        <Route path="/shop">
          <ShopDashboard />
        </Route>
      </Switch>
  </Router>
  )
}


export default App;
