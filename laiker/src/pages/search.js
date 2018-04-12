import React,{Component} from 'react';
import './search.css';
import City from '../components/city';
import Record from '../components/record';
import WorkList from '../components/workList';
import axios from 'axios';

class Search extends Component{
  constructor(){
    super();
    this.state={
       _worklists:[],
        word:"",
        record:[]
       };
    this.handlecity=this.handlecity.bind(this);
    this.handleSearch=this.handleSearch.bind(this);
    this.handleDelete=this.handleDelete.bind(this);
    this.handleword=this.handleword.bind(this);
  }
handlecity(){
    this.props.history.push('/user/city')
  }

handleSearch(){
     let _search=this.state.word
     if(!_search){
      return
     }

  //查询请求
   axios.post("/appsearch",{'search':_search}).then((data)=>{   
      let  worklists=data.data;
          this.setState({
            _worklists:worklists
          })

    })

  //历史记录
  
    if ('localStorage' in window) { //是否支持     
      let records=JSON.parse(localStorage.getItem("commentList"))||[];
      records.unshift(_search)
      if(records.length>4){
        records.splice(-1,1)
      }
      this.setState({
          record:records
          });
         localStorage.setItem("commentList",JSON.stringify(records)); //只能存字符串
       }
  }

handleDelete(e){
      if ('localStorage' in window) { //是否支持     
      let records=JSON.parse(localStorage.getItem("commentList"))||[]; 
      records.splice(e,1)
      this.setState({
          record:records
          });   
         localStorage.setItem("commentList",JSON.stringify(records)); //只能存字符串
       }
}

 componentWillMount(){
   console.log(this.props.history.location.state)
   if(this.props.history.location.state.code!=0){
     let self=JSON.parse(localStorage.getItem("self"));   
      this.setState({
          word:"laodao"
          });
   }
 let _search=this.state.word;
    if ('localStorage' in window) { //是否支持     
      let records=JSON.parse(localStorage.getItem("commentList"))||[];   
      this.setState({
          record:records
          });
         localStorage.setItem("commentList",JSON.stringify(records)); //只能存字符串
       }
 }

  // ************************
handleword(e){
  this.setState({
    'word':e.target.value
  })
}
  // ************************
  render(){
   
    let nowCity=JSON.parse(localStorage.getItem("city"))||'全国';
    return(
         <div className='searchBox'>
            
            <div className="linesearch">
             <span onClick={this.handlecity}>{nowCity}∨</span>
             <input type="text" placeholder="搜索职位或公司" className="searchinput" onChange={this.handleword}/>
             <button className="btn" onClick={this.handleSearch}>搜索</button>
            </div>
           <Record msg={this.state.record} onfn={this.handleDelete}/>
           <WorkList msg={this.state._worklists} history={this.props.history}/>
         </div>
      )
  }

}

export default Search