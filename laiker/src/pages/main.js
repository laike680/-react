import React,{Component} from 'react';
import './main.css'
import Information from './information'
import Resume from './resume'
import {
  Route,//路由切换的坑
  Redirect,
  Switch
} from 'react-router-dom'

class Main extends Component{
  constructor(){
    super();
  }

 
// *******************************************

  render(){ 
    return(
      <Switch>
          <Route path="/user/main/information" component={Information}></Route>
          <Route path="/user/main/resume" component={Resume}></Route>
          <Redirect path="/user/main" to="/user/main/information" exact></Redirect>
          <Route tender={()=>(<div>404!</div>)}/>
      </Switch>  
      )
  }

}

export default Main