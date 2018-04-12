import React,{Component} from 'react';
import Work from './work';
import Main from './main';
import Search from './search';
import City from '../components/city'
import {
  Route,//路由切换的坑
  Link,
  NavLink,//可以添加选中状态
  Redirect,
  Switch
} from 'react-router-dom'
class User extends Component{
	constructor(){
		super();
		this.fnreturn=this.fnreturn.bind(this);
	}
	fnreturn(){
  	 this.props.history.goBack();
 	 }
	render(){
		let {match}=this.props;
		return(
			

			<div className="usermain">	
			   <header className="App-header">
                <h1 className="App-title"><b onClick={this.fnreturn}>&lt;</b>拉勾网</h1>
              </header>
            <br />
                 <div className='userBox'>
		        <Route path="/user/work" component={Work}></Route>
		        <Route path="/user/main" component={Main}></Route>
		        <Route path="/user/search" component={Search}></Route>
          	  	<Route path="/user/city" component={City}></Route>
		            {/*当路由匹配到login时替换组件,其中冒号必须写*/}
		        </div>
		        <ul className="footer"> 
		          <li><NavLink  to='/user/work' activeClassName="link_active">
		           职位
		          </NavLink ></li> 
		          <li><NavLink  to='/user/search' activeClassName="link_active">
		           搜索
		          </NavLink ></li>
		          <li><NavLink  to='/user/main' activeClassName="link_active">
		            我的
		          </NavLink ></li> 
		        {/*路由、模板切换，to有历史记录，replace不留历史记录*/}
		        </ul>  
		      </div>
		     
			)
	}

}

export default User