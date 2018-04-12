import React, { Component } from 'react';
import {
  Link
} from 'react-router-dom'

class Selfmain extends Component {
	constructor(){
		super();
		this.handleself=this.handleself.bind(this);
	}
	handleself(){
		this.props.history.push("/user/search",{code:1});
	}
	render(){
		return (<div className="selfmainBox">
					<dl>
						<dt>职位类型</dt>
						<Link to="/self/selfzhiwei"><dd>总监</dd></Link>
					</dl>
					<dl>
						<dt>工作地点</dt>
						<Link to="/self/selfdiding"><dd>成都</dd></Link>
					</dl>
					<dl>
						<dt>期望薪水</dt>
						<Link to="/self/selfxingshui"><dd>5k-10k</dd></Link>
					</dl>
					<dl>
						<dt>公司规模</dt>
						<Link to="/self/selfgongshi"><dd>没有要求</dd></Link>
					</dl>
					 <ul className="selfoot" onClick={this.handleself}> 
		         	 <li>开始搜索</li> 
		       		 </ul>  
				</div>)
	}
}
export default Selfmain