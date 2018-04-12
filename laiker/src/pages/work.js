import React,{Component} from 'react';
import axios from 'axios';
import WorkList from '../components/workList';

class Work extends Component{
  constructor(){
    super();
     this.state={
        _worklists:[],
        page:1,
        login:''
    }
    this.handleLogin=this.handleLogin.bind(this);
    this.handleCustomizd=this.handleCustomizd.bind(this);
    this.handlemore=this.handlemore.bind(this);
  }
    handleLogin(){
      let loging=JSON.parse(localStorage.getItem("login"))||false;
      if(loging){
        this.props.history.push('/user/work')
      }else{
         this.props.history.push('/login')
      }

   
  }
  handleCustomizd(){
    this.props.history.push('/self')
  }

handlemore(){
  let _page=this.state.page;
  _page++;
   this.setState({
            page:_page
          })
  axios.post("/appworkLists",{page:_page}).then((data)=>{
       let  worklists=data.data;
          this.setState({
            _worklists:worklists
          })
 })
}
  componentWillMount(){ //组件将要被插入真实的dom之前
      axios.post("/appworkLists",{page:1}).then((data)=>{
       let  worklists=data.data;
          this.setState({
            _worklists:worklists
          })
     })

       let loging=JSON.parse(localStorage.getItem("login"))||false;
        if(loging){
        this.setState({login:'编辑'})
         }else{
         this.setState({login:'去登录'})
          }
  }
  render(){

    return(
         <div className="workBox">
          <div className="App-dingzhidenglu">
                  <a onClick={this.handleCustomizd}>10秒钟定制职位</a>
                  <span onClick={this.handleLogin}>{this.state.login}</span>
          </div>
          <div>
             <WorkList msg={this.state._worklists} history={this.props.history}/>
              <li className="worklist-item" onClick={this.handlemore}>加载更多...</li>
          </div>
          </div>

      )
  }

}

export default Work