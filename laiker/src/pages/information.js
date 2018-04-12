import React,{Component} from 'react';

import {
Link
} from 'react-router-dom'

class Information extends Component{
  constructor(){
    super();
    this.handlemainlogin=this.handlemainlogin.bind(this);
    this.handlemainoutlogin=this.handlemainoutlogin.bind(this);
  }

  handlemainoutlogin(){
    localStorage.removeItem('login')
     this.props.history.push('/user/work')
  }


  handlemainlogin(){
    this.props.history.push('/login')
  }
// *******************************************

  render(){
     let mainlgoin,mainoutlgoin;
     let loging=JSON.parse(localStorage.getItem("login"))||false;
     if(loging){
          mainlgoin=(<div><p className="mainjianli"><Link to='/user/main/resume'>简历&gt;</Link></p><div className="maintouxingbox"><img className="maintouxingimg" src="http://img0.imgtn.bdimg.com/it/u=3736905609,3600863137&fm=27&gp=0.jpg"/></div><div className="maintouxingp">亲爱的 {loging}，你好！</div></div>)

          mainoutlgoin=(<div className="mainoutlgoin" onClick={this.handlemainoutlogin}>退出登录</div>)
     }else{
          mainlgoin=(<div className="mainLogin" onClick={this.handlemainlogin}>登录/注册</div>)
     }

    return(
      <div className="mainbox">
          {mainlgoin}
          <div className="mainProject">
          <div className="maintoudi">投递</div>
          <div className="mainmianshi">面试</div>
          <div className="mainyaoyue">邀约</div>
          <div className="mainshouchang">收藏</div> 
          </div>
           
          {mainoutlgoin}
      </div>

      )
  }

}

export default Information