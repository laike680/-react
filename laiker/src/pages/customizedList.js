import React,{Component} from 'react';
import './customizedList.css'



class CustomizedList extends Component{
  constructor(){
    super();
    this.state={
      wordmsg:{}
    }
    this.fnreturn=this.fnreturn.bind(this)
  }

  fnreturn(){
  	console.log(1)
  	 this.props.history.goBack();
  }

  render(){
    let _customized=this.props.history.location.state
    return(
      <div className='customizedBox'>
        <div className='customizedHade App-header'>
          <h5><b onClick={this.fnreturn}>〈</b>职位详情</h5>
        </div>
        <div className='customizedPositionName'>{_customized.positionName}</div>
        {/**********************************/}

		<div className='customizedMssg'>
			<div>{_customized.salary}</div>
			<div>{_customized.city}</div>
			<div>全职</div>
			<div>5-10年</div>
			<div>本科及以上</div>
		</div>
		<p className='customizedYouhuo'>职位诱惑：成长空间大</p>

        {/**********************************/}
        <div className='customizedworkbox'>
         	<img src={"https://static.lagou.com/"+_customized.companyLogo} className="customizedworklogo" />
        	<div className="customizedworktitle">{_customized.companyName}</div>
        	<p>移动互联网,O2O / D轮及以上 / 2000人以上</p>
        </div>
        <dl className="customizedworkjieshao">
        	<dt>职位描述</dt>
        	<dd>岗位职责： 
				<br />1、负责建设、管理团队，负责跟团游业务团队招聘、培训、监督、考核等工作；
				<br />2、负责制定公司跟团游业务团队月度、季度、年度的销售计划；
				<br />3、对跟团游业务团队的任务计划及日常工作的完成状况负责；
				<br />4、定期分析并上报市场动态及应对方案；
				<br />5、其他与业务团队管理相关的其他工作；
				<br />任职要求：
				<br />教育水平：本科及以上学历，资质佳可放宽至大专；
				<br />工作经验：五年以上旅游行业从业经验，三年以上团队管理经验，有异地管理经验者优先；
				<br />专业要求：熟悉旅游行业，有OTA、酒店、旅行社等经营管理者优先；
				<br />能力要求：业务沟通谈判能力、团队协作能力，数据分析能力；
				<br />其他要求：要求能够适应全国出差；
			</dd>
        </dl>
        <dl className="customizedworkjieshao">
		    <dt>面试评价</dt>
		    <dd>暂无面试评价</dd>
        </dl>
        <div className="tijiaojianliBox"><div className="btn btnLogin tijiaojianli">投递简历</div></div>
      </div>
      )
  }
}

export default CustomizedList