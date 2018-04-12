import React, { Component } from 'react';
import City from '../components/citys'

class Selfdiding extends Component {
	constructor(){
		super();

	}

	render(){
		return (<div className="selfzhiweiBox">
					<div className="selftishibiaoti">“告诉我你期望的工作地点？”</div>
					
					<ul>
					<City history={this.props.history}/>
					</ul>

				</div>)
	}
}
export default Selfdiding