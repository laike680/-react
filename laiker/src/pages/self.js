import React, { Component } from 'react';
import './self.css'
import Selfmian from './selfmian';
import Selfzhiwei from './selfzhiwei';
import Selfdiding from './selfdiding';
import Selfxingshui from './selfxingshui';
import Selfgongshi from './selfgongshi';

import {
  Route,//路由切换的坑
  Redirect,
  Switch
} from 'react-router-dom'

class Self extends Component {
	constructor(){
		super();
		this.fnreturn=this.fnreturn.bind(this);
	}
	fnreturn(){
  	 this.props.history.goBack();
 	}
	render(){
		return (
			<div className="usermain">	
			   <header className="App-header selfhead">
                <h2 className="App-title "><b onClick={this.fnreturn}>&lt;</b>设置定制信息</h2>
             	</header>
            <br />
                 <div className='selfBox'>
		      		  <Switch>
				          <Route path="/self/selfmian" component={Selfmian}></Route>
				          <Route path="/self/selfzhiwei" component={Selfzhiwei}></Route>
				          <Route path="/self/selfdiding" component={Selfdiding}></Route>
				          <Route path="/self/selfxingshui" component={Selfxingshui}></Route>
				          <Route path="/self/selfgongshi" component={Selfgongshi}></Route>
				          <Redirect path="/self" to="/self/selfmian" exact></Redirect>
				          <Route tender={()=>(<div>404!</div>)}/>
				      </Switch>
		            {/*当路由匹配到login时替换组件,其中冒号必须写*/}
		        </div>       
		      </div>
			)
	}
}
export default Self