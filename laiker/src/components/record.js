import React,{Component} from 'react';

class Record extends Component{
	constructor(){
		super();
		this.handleDelete=this.handleDelete.bind(this)
	}

handleDelete(e){
	this.props.onfn(e.target.dataset.id)
}
	render(){
		let _records=this.props.msg.map((val,i)=>{
    	  return  <div className="linesearch" key={i}>{val}<b data-id={i} onClick={this.handleDelete}>×</b></div>
   		 })
		return (
			<div >
				 {_records}
			</div>
			)
	}
}
export default Record