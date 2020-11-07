import React, {Component} from 'react';
import "bootstrap/dist/css/bootstrap.min.css";
import { BrowserRouter as Router, Switch, Route, Link } from 'react-router-dom';

import Index from './component/component.index';
import Create from './component/component.create';
import Edit from './component/component.edit';

class App extends Component {
  render() {
    return(
      <Router>
        <div className="container">
          <nav className="navbar navbar-expand-lg navbar-light bg-light">
            <Link to={'/'} className="navbar-brand">Home</Link>
            <div className="collapse navbar-collapse" id="navbarSupportedContent">
              <ul className="navbar-nav mr-auto">
                <li className="nav-item">
                  <Link to={'/index'} className="nav-link">Index</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/create'} className="nav-link">Create</Link>
                </li>
                <li className="nav-item">
                  <Link to={'/edit'} className="nav-link">Edit</Link>
                </li>
              </ul>
            </div>
          </nav><br/>
          <p>Welocome to MERN by pramitha</p>
        </div>
        <Switch>
          <Route exact path='/create' component={Create}/>
          <Route exact path='/edit/:id' component={Edit}/>
          <Route exact path='/index' component={Index}/>
        </Switch>
      </Router>
    );
  }
}

export default App;
