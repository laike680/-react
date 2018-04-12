import React,{Component} from 'react';
import axios from 'axios';
import CustomizedList from './customizedList'

class Customized extends Component{
  constructor(){
    super();
    this.state={
      wordmsg:{}
    }
  }
  render(){
    console.log(this.props.history)
    return(
      <div className='customizedBox'>
        <CustomizedList history={this.props.history} /> 
      </div>
      )
  }
}

export default Customized