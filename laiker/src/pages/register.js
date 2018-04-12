import React,{Component} from 'react';
import './register.css';
import Shoujilogin from '../components/shoujilogin';
import{
	Route,
	Link
} from 'react-router-dom';
class Register extends Component{
	constructor(){
		super();
		this.handleLogin=this.handleLogin.bind(this)
	}
	handleLogin(){
		this.props.history.push('/login')
	}
	render(){
		return(
				<div className="container registermian">

					<div className=" loginHead">
						<h4>注册拉勾</h4>	
						<h5 onClick={this.handleLogin}>登录</h5>	
					</div>
				        
				     <Route path="/register" component={Shoujilogin}></Route>
				     <div className="zezhao"></div>
				     <p>注册拉勾代表你已同意<a>《拉勾用户协议》</a></p>
				</div>

			)
	}
};
export default Register