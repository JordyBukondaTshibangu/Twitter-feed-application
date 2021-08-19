import React from 'react';
import { BrowserRouter as Router, Switch, Route} from 'react-router-dom'
import HomePage from './pages/HomePage';
import UsersPage from './pages/UsersPage';
import Navbar from './components/Navbar';
import './App.css';


const  App = () => {
  return (
   <div className="App">
      <Router>
        <div className="nav-bar">
            <Navbar />
        </div>
      <Switch>
        <Route path="/" exact component={HomePage} />
        <Route path="/users/:name" exact component={UsersPage} />
      </Switch>
    </Router>
   </div>
  );
}

export default App;
