import React, { Component } from 'react';
import './App.css';
import User from './pages/user';
import Login from './pages/login';
import Register from './pages/register'
import Customized from './pages/customized';
import Self from './pages/self';
import Cityphone from './components/cityphone';

import {
  BrowserRouter as Router,// 路径模式,路由的最外层
  Route,//路由切换的坑
  Redirect,
  Switch
} from 'react-router-dom'

class App extends Component {
  render() {
    return (
          <Router>
          <div className="App"> 
            <Switch>
              <Route path="/user" component={User}></Route>
              <Route path="/login" component={Login}></Route>
              <Route path="/cityphone" component={Cityphone}></Route>
              <Route path="/register" component={Register}></Route>
              <Route path="/customized" component={Customized}></Route>
              <Route path="/self" component={Self}></Route>
              <Redirect path="/" to="/user/work" exact></Redirect>
              <Route tender={()=>(<div>404!</div>)}/>
            </Switch>
          </div> 
          </Router>
    );
  }
}

export default App;
