import React from 'react';
import { Router, Route } from 'react-router-dom'
import Login from './components/login/index'
import Items from './components/items/index'
import history from './history'
import './App.css';


function App() {
  return (
    <Router history={history}>
      <Route path={["/login", "/"]} exact component={Login}  history={history}/>
      <Route path="/items" exact component={Items}  history={history}/>
    </Router>
  );
}

export default App;
