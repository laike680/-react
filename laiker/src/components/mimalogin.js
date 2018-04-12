import React,{Component} from 'react';
import axios from 'axios';
import{
	Link
} from 'react-router-dom';

class Mimalogin extends Component{
	constructor(){
		super();
		this.state={
			username:"",
			userpwd:"",
			string:""
		}
	this.handlePWD=this.handlePWD.bind(this);
	this.handleName=this.handleName.bind(this);
	this.handleshoujilogin=this.handleshoujilogin.bind(this);
	}
// ****************************************
	handlePWD(e){
		this.setState({userpwd:e.target.value})
	}
// ****************************************
	handleName(e){
		this.setState({username:e.target.value})
	}
// ****************************************
	handleshoujilogin(){
		let _name=this.state.username;
		let _pwd=this.state.userpwd;
		axios.post('/appmimaLogin',{username:_name,pwd:_pwd}).then((res)=>{
			if(!res.data.user){
				this.setState({string:"账号或密码错误"})
				return
			}
			 localStorage.setItem("login",JSON.stringify(res.data.user))
			this.props.history.push('/user/work')

		})		
	}
// ****************************************
	render(){
		return(
				<div className="mimalogin">
					<div className="form-group">
					    <input type="text"  className="username" placeholder="请输入已验证的手机或邮箱" onChange={this.handleName}/>
					 </div>
					 <div className="form-group">
					    <input type="password" className="pwd" placeholder="请输入密码" onChange={this.handlePWD}/>
					 </div>
					
					<button className="btn btnLogin shoujibtn" onClick={this.handleshoujilogin} >登录</button>
					 <p className="jinggao">{this.state.string}</p>
					 <Link  to='/login/shoujilogin' className="_shojibtn">手机登录</Link >
				</div>

			)
	}
};
export default Mimalogin