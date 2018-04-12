import React,{Component} from 'react';
import './cityphone.css';
import{
	Link
} from 'react-router-dom';

class Cityphone extends Component{
	constructor(){
		super();
		this.cityPhoneNember=this.cityPhoneNember.bind(this);
	}
	cityPhoneNember(e){
		// 拿到区号
		let codeNumber=e.target.dataset.code
		if(!codeNumber){
			return
		}
		this.props.history.push('/login/shoujilogin',codeNumber)

	}
	render(){
		return(
				<div className="area_code_list">
   				 <dl className="code_list_main" onClick={this.cityPhoneNember}>
	   				 <dt>常用</dt>
	   				 <dd data-code="0086">中国</dd>
	   				 <dd data-code="00852">中国香港</dd>
	   				 <dd data-code="00886">中国台湾</dd>
	   				 <dd data-code="00853">中国澳门</dd>
	   				 <dd data-code="001">美国</dd>
	   				 <dt>A</dt><dd data-code="0061">澳大利亚</dd>
	   				 <dt>B</dt><dd data-code="0055">巴西</dd>
	   				 <dt>D</dt><dd data-code="0049">德国</dd>
	   				 <dt>E</dt><dd data-code="007">俄罗斯</dd>
	   				 <dt>F</dt><dd data-code="0033">法国</dd>
	   				 <dt>H</dt><dd data-code="0082">韩国</dd>
	   				 <dt>J</dt><dd data-code="001">加拿大</dd>
	   				 <dt>M</dt><dd data-code="0060">马来西亚</dd>
	   				 <dd data-code="001">美国</dd>
	   				 <dt>R</dt><dd data-code="0081">日本</dd>
	   				 <dt>T</dt><dd data-code="00886">中国台湾</dd>
	   				 <dd data-code="0066">泰国</dd>
	   				 <dt>X</dt>
	   				 <dd data-code="00852">中国香港</dd>
	   				 <dd data-code="0065">新加坡</dd>
	   				 <dt>Y</dt><dd data-code="0091">印度</dd>
	   				 <dd data-code="0044">英国</dd>
	   				 <dt>Z</dt><dd data-code="0086">中国</dd>
   				 </dl>
   				 <p className="tips">
   				 如果没有找到你所在的归属地，<br />请拨打客服电话<a href="tel:4006282835">4006282835</a> 解决。
   				 </p>
				</div>

			)
	}
};
export default Cityphone