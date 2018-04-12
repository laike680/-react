import React, { Component } from 'react';
import axios from 'axios';

class Selfzhiwei extends Component {
	constructor(){
		super();
		this.state={
			zhiweitishi:[],
			_zhiwei:""
		}
		this.handleselfzhiwei=this.handleselfzhiwei.bind(this);
		this.fnzhiwei=this.fnzhiwei.bind(this);
		this.handleOK=this.handleOK.bind(this);
	}
	componentWillMount(){
		axios.post("/appzhiwei").then((res)=>{
			this.setState({
				zhiweitishi:res.data
			})
			
		})

	}
	handleselfzhiwei(e){
		this.setState({
			_zhiwei:e.target.innerText
		})
	}
	fnzhiwei(e){
		this.setState({
			_zhiwei:e.target.value
		})
	}
	handleOK(e){	
		 let selfRecords=JSON.parse(localStorage.getItem("self"))||{};
		 	selfRecords.zhiwei=this.state._zhiwei;
		 localStorage.setItem("self",JSON.stringify(selfRecords))
		 this.props.history.push("/self/selfmian")
	}
	render(){
		let zhiweitishis=this.state.zhiweitishi.map(function(elem,index){
				return (
					<li key={index}>{elem.zhiwei}</li>
					)
		})
		return (<div className="selfzhiweiBox">
					<div className="selftishibiaoti">“想找什么职位？”</div>
					<div className="selfinput">
						<input type="text" placeholder="请输入要定制的职位" value={this.state._zhiwei} onChange={this.fnzhiwei}/><span onClick={this.handleOK}>OK</span>
					</div>
					<ul onClick={this.handleselfzhiwei}>
						{zhiweitishis}
					</ul>

				</div>)
	}
}
export default Selfzhiwei