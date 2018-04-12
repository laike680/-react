import React,{Component} from 'react';
import './login.css';
import Mimalogin from '../components/mimalogin';
import Shoujilogin from '../components/shoujilogin';
import {
  Route,//路由切换的坑
  Redirect,
  Switch
} from 'react-router-dom'
class Login extends Component{
	constructor(){
		super();
		 this.state = {
               username:"",
               pwd:""
       };
       this.handleRegister=this.handleRegister.bind(this)

	}
	handleRegister(){
		this.props.history.push('/register')
	}
	render(){

		return(

			<div className="container loginmian">

				<div className=" loginHead">
					<h4>登录拉勾</h4>	
					<h5 onClick={this.handleRegister}>注册</h5>	
				</div>
				<Switch>
					<Route path="/login/mimalogin" component={Mimalogin}></Route>
			        <Route path="/login/shoujilogin" component={Shoujilogin}></Route>
			        <Redirect path="/login" to="/login/mimalogin" exact></Redirect>
			        <Route tender={()=>(<div>404!</div>)}/>
				</Switch>
			</div>
			)
	}

}

export default Login