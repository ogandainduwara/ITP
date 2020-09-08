import React from 'react';
import logo from './logo.svg';
import { BrowserRouter as Router, Link, Route } from 'react-router-dom';
import './App.css';
import Customer from "./Components/Customer";
import Admin from "./Components/Admin";
function App() {
  return (
    <div className="mx-2 my-4">
        <Router>
            <Route exact path="/" component={Customer} />
            <Route exact path="/admin" component={Admin} />
        </Router>

    </div>
  );
}

export default App;
