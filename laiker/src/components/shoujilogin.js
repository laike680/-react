import React,{Component} from 'react';
import axios from 'axios';
import{
	Link
} from 'react-router-dom';



class Shoujilogin extends Component{
	constructor(){
		super();
		this.state={
			random:'获取验证码',
			_random:'',
			validate:'',
			phone:''
		}
		this.cityphone=this.cityphone.bind(this);
		this.handleChangeCode=this.handleChangeCode.bind(this);
		this.handleRegister=this.handleRegister.bind(this);
		this.handlePhone=this.handlePhone.bind(this);
		this.handlevalidate=this.handlevalidate.bind(this);
		this.handleRandom=this.handleRandom.bind(this);
	}

// 获取手机号****************************************
	handlePhone(e){
		this.setState({
			phone:e.target.value
		})
	}
// 图片验证码****************************************
	handlevalidate(e){
		this.setState({
			validate:e.target.value
		})
	}

// 点击获取验证码****************************************
	handleChangeCode(){
		let code=Math.floor(Math.random()*1000000)
		this.setState({random:code})
	}
// 验证码****************************************
	handleRandom(e){
		this.setState({
			_random:e.target.value
		})
	}

// 点击选择区号****************************************
	cityphone(){
		this.props.history.push('/cityphone')
	}
// 点击注册****************************************

	handleRegister(){
		let phoneRegExp=new RegExp(/^1[0-9]{10}$/)
		if(!phoneRegExp.test(this.state.phone)){
			return
		}
		if(this.state.validate!='uwv6'){
			return
		}
		if(this.state.random!=this.state._random){
			return
		}
		axios.post('appRegister',this.state.phone).then((res)=>{
			if(!res.data){
				return
			}
			this.props.history.push('/login')
		})
	}

// ****************************************
	render(){
		let choosePhone=this.props.history.location.state||'0086';
		return(
				<div className="shoujilogin">
					<div className="form-group">
					   <span onClick={this.cityphone}><b>{choosePhone}</b>▼</span> <input type="text"  className="phoneNumber" placeholder="请输入常用手机号" onChange={this.handlePhone}/>
					 </div>
					 <div className="form-group">
					    <input type="text" className="yangzhengma" placeholder="请证明你不是机器人" onChange={this.handlevalidate}/><img alt="" src="https://timgsa.baidu.com/timg?image&quality=80&size=b9999_10000&sec=1523272549834&di=ef71584d49cb42793293beaf8a8fb1bc&imgtype=0&src=http%3A%2F%2Fimages2015.cnblogs.com%2Fblog%2F822721%2F201607%2F822721-20160720230416701-1768858575.png"/>
					 </div>
					 <div className="form-group">
					    <input type="password" className="shoujiyanzhengma" placeholder="请输入收到的验证码" onChange={this.handleRandom}/><span onClick={this.handleChangeCode}>{this.state.random}</span>
					 </div>
					 <button className="btn btnLogin shoujibtn" onClick={this.handleRegister}>登录</button>
					 <Link  to='/login/mimalogin' className="_mimabtn">密码登录</Link >
				</div>
			)
	}
};
export default Shoujilogin