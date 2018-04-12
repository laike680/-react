import React, { Component } from 'react';


class Selfxingshui extends Component {
	constructor(){
		super();
		this.state={
			xingshui:["2k以下","2k-5k","5k-10k","10k-15k","15k-25k","25k-50k","50k以上"]
		}
		this.handleselfxingshui=this.handleselfxingshui.bind(this);
	}
	handleselfxingshui(e){
		let selfRecords=JSON.parse(localStorage.getItem("self"))||{};
      	selfRecords.xingshui=e.target.innerText;
    	 localStorage.setItem("self",JSON.stringify(selfRecords));
   		  this.props.history.push("/self/selfmian");
	}
	render(){
		let _xingshui=this.state.xingshui.map((elem,i)=>{
			return (<li key={i}>{elem}</li>)
		})
		return (<div className="selfzhiweiBox">
					<div className="selftishibiaoti">“你值得更好的生活”</div>
					<ul onClick={this.handleselfxingshui}>
						{_xingshui}
					</ul>

				</div>)
	}
}
export default Selfxingshui