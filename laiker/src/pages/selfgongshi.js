import React, { Component } from 'react';


class Selfgongshi extends Component {
	constructor(){
		super();
		this.handlegongshi=this.handlegongshi.bind(this)
	}
	handlegongshi(e){
		let selfRecords=JSON.parse(localStorage.getItem("self"))||{};
      	selfRecords.gongshi=e.target.dataset.gongshi;
    	 localStorage.setItem("self",JSON.stringify(selfRecords));
   		  this.props.history.push("/self/selfmian");
	}
	render(){
		return (<div className="selfzhiweiBox">
					<div className="selftishibiaoti">“对公司规模可有要求”</div>
	
					<ul onClick={this.handlegongshi}>
						<li data-gongshi="">没有要求</li>
						<li data-gongshi="初创型">初创型<span>(天使轮及未融资)</span></li>
						<li data-gongshi="成长型">成长型<span>(A轮或B轮融资)</span></li>
						<li data-gongshi="成熟型">成熟型<span>(C轮融资以上但未上市)</span></li>
						<li data-gongshi="上市公司">上市公司</li>
					</ul>

				</div>)
	}
}
export default Selfgongshi