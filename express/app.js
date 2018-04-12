var express = require('express'); //加载模块
var app = express(); //生成服务实例
var bodyParser = require('body-parser');  //获取模块
app.listen(8888, function () { //端口为8888
  console.log('后台启动');
});
app.use(bodyParser.json());  //创建application/json解析,并使用


var tishizhiwei=[{zhiwei:'产品经理'},{zhiwei:'Java'},{zhiwei:'运营'},{zhiwei:'Android'},{zhiwei:'PHP'},{zhiwei:'UI'},{zhiwei:'iOS'},{zhiwei:'编程'},{zhiwei:'BD'}]

//*************************************************************

var kun={code:-1, msg:[{　 "logger":{
	"traceCapable":true, 
	"name":"com.lagou.entity.mobile.MobilePosition"},
	 "positionId":4395639,
	 "positionName":"数据专员（助理方向）",
	 "city":"北京",
	 "createTime":"今天 13:46", 
	 "salary":"5k-7k",
	 "companyId":34551, 
	 "companyLogo":"i/image/M00/61/4A/Cgp3O1f7ZaqADHK_AAJC0uttL8o028.jpg",
	  "companyName":"对啊网",
	  "companyFullName":"北京对啊网教育科技有限公司"}, {"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4395638, 　　　　　　　　　　　　"positionName":"测试开发工程师", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:46", 　　　　　　　　　　　　"salary":"15k-30k", 　　　　　　　　　　　　"companyId":3786, 　　　　　　　　　　　　"companyLogo":"i/image/M00/67/87/CgpFT1mpHKCAF5oKAABeE95QxFk132.png", 　　　　　　　　　　　　"companyName":"宜信", 　　　　　　　　　　　　"companyFullName":"普信恒业科技发展（北京）有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4395633, 　　　　　　　　　　　　"positionName":"资深结构工程师", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:45", 　　　　　　　　　　　　"salary":"10K-15K", 　　　　　　　　　　　　"companyId":36880, 　　　　　　　　　　　　"companyLogo":"i/image2/M00/06/88/CgoB5lnKDtKAVllWAAAPXGfGpOQ182.png", 　　　　　　　　　　　　"companyName":"众智设计", 　　　　　　　　　　　　"companyFullName":"北京众智云途系统技术有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4395626, 　　　　　　　　　　　　"positionName":"渠道拓展总监", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:45", 　　　　　　　　　　　　"salary":"15k-30k", 　　　　　　　　　　　　"companyId":39637, 　　　　　　　　　　　　"companyLogo":"i/image/M00/81/AB/CgqKkVhTlcqAdJAaAACR79A_284662.png", 　　　　　　　　　　　　"companyName":"大V店", 　　　　　　　　　　　　"companyFullName":"北京果敢时代科技有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4362485, 　　　　　　　　　　　　"positionName":"音乐版权经理", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"8k-16k", 　　　　　　　　　　　　"companyId":1531, 　　　　　　　　　　　　"companyLogo":"i/image3/M00/2A/36/CgpOIFqdB3uAS2AiAAAOySQ5lxw214.jpg", 　　　　　　　　　　　　"companyName":"荔枝", 　　　　　　　　　　　　"companyFullName":"广州荔支网络技术有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4336011, 　　　　　　　　　　　　"positionName":"售前支持工程师－北区", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"12k-24k", 　　　　　　　　　　　　"companyId":57260, 　　　　　　　　　　　　"companyLogo":"i/image/M00/2B/8A/Cgp3O1c1RGiAZA9fAABZ8Wxdbd8864.png", 　　　　　　　　　　　　"companyName":"瑞数信息", 　　　　　　　　　　　　"companyFullName":"瑞数信息技术(上海)有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4312769, 　　　　　　　　　　　　"positionName":"阿里UC神马-资深前端开发工程师", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"15k-30k", 　　　　　　　　　　　　"companyId":2202, 　　　　　　　　　　　　"companyLogo":"image1/M00/38/F3/CgYXBlWnUM6AI4MpAAAP_ThgsrQ468.png", 　　　　　　　　　　　　"companyName":"阿里巴巴移动事业群-UC", 　　　　　　　　　　　　"companyFullName":"优视科技有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4130099, 　　　　　　　　　　　　"positionName":"商务主管", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"5k-8k", 　　　　　　　　　　　　"companyId":40119, 　　　　　　　　　　　　"companyLogo":"i/image2/M00/1E/E7/CgoB5loL8PaAeCEoAABMZf7jhTI966.png", 　　　　　　　　　　　　"companyName":"聚鹏", 　　　　　　　　　　　　"companyFullName":"上海聚鹏科技有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4395619, 　　　　　　　　　　　　"positionName":"总经理助理", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"5k-7k", 　　　　　　　　　　　　"companyId":234788, 　　　　　　　　　　　　"companyLogo":"i/image2/M00/1E/D8/CgotOVoL5TqAU0YnAAAJLnhd54Y991.png", 　　　　　　　　　　　　"companyName":"摩亦", 　　　　　　　　　　　　"companyFullName":"摩亦（上海）医药技术有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4395620, 　　　　　　　　　　　　"positionName":"产品经理", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"15k-25k", 　　　　　　　　　　　　"companyId":30011, 　　　　　　　　　　　　"companyLogo":"image1/M00/00/43/Cgo8PFTUXNKAA3i3AABJNauNpQA659.png", 　　　　　　　　　　　　"companyName":"国鼎", 　　　　　　　　　　　　"companyFullName":"国鼎网络空间安全技术有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4395617, 　　　　　　　　　　　　"positionName":"施工图深化设计师", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"7k-12k", 　　　　　　　　　　　　"companyId":35259, 　　　　　　　　　　　　"companyLogo":"image1/M00/00/53/Cgo8PFTUXRiAVUCVAAByYaZk9C0980.jpg", 　　　　　　　　　　　　"companyName":"中教股份", 　　　　　　　　　　　　"companyFullName":"北京中教启星科技股份有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4292924, 　　　　　　　　　　　　"positionName":"保险内勤", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"10k-12k", 　　　　　　　　　　　　"companyId":97037, 　　　　　　　　　　　　"companyLogo":"i/image/M00/32/49/Cgp3O1dNtEmAWrICAABfw9pM3IQ331.png", 　　　　　　　　　　　　"companyName":"财未来", 　　　　　　　　　　　　"companyFullName":"北京财未来科技有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4106145, 　　　　　　　　　　　　"positionName":"财务部助理", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:44", 　　　　　　　　　　　　"salary":"4k-6k", 　　　　　　　　　　　　"companyId":104655, 　　　　　　　　　　　　"companyLogo":"image2/M00/13/1A/CgpzWlY5s8OAZeBeAABCtz-XiHo710.jpg?cc=0.06203367258422077", 　　　　　　　　　　　　"companyName":"棕榈大道", 　　　　　　　　　　　　"companyFullName":"棕榈大道教育信息技术（北京）有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":4395614, 　　　　　　　　　　　　"positionName":"安卓开发人员", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:43", 　　　　　　　　　　　　"salary":"20k-40k", 　　　　　　　　　　　　"companyId":56634, 　　　　　　　　　　　　"companyLogo":"i/image/M00/10/D9/Cgp3O1bg2BeALqRDAAH5uDaHnz8708.jpg", 　　　　　　　　　　　　"companyName":"点开科技", 　　　　　　　　　　　　"companyFullName":"北京点开科技有限公司"　　　　　　　　　　}, 　　　　　　　　　　{　　　　　　　　　　　　"logger":{　　　　　　　　　　　　　　"traceCapable":true, 　　　　　　　　　　　　　　"name":"com.lagou.entity.mobile.MobilePosition"　　　　　　　　　　　　}, 　　　　　　　　　　　　"positionId":3564957, 　　　　　　　　　　　　"positionName":"软件工程师", 　　　　　　　　　　　　"city":"北京", 　　　　　　　　　　　　"createTime":"今天 13:43", 　　　　　　　　　　　　"salary":"2K-4K", 　　　　　　　　　　　　"companyId":256637, 　　　　　　　　　　　　"companyLogo":"i/image/M00/68/AD/CgpFT1ms6NyAIAkOAAEPKddEas8548.jpg", 　　　　　　　　　　　　"companyName":"壹仟零壹", 　　　　　　　　　　　　"companyFullName":"北京壹仟零壹加信息技术有限公司"}] }

//*************************************************************

app.post("/appcustomized",function(req,res){
	let _wordId=req.body.wordId;
	var _index=0;
	for(let i=0,len=kun.msg.length;i<len;i++){
		if(_wordId==kun.msg[i].positionId){
			_index=i
		}
	}
	res.json(
			kun.msg[_index]
		);
})

//搜索职位*************************************************************

app.post("/appsearch",function(req,res){
	let _search=req.body.search;
	let regExp=new RegExp('['+_search+']');
	let searchlist=[]; 
	for(let i=0,len=kun.msg.length;i<len;i++){
		console.log(kun.msg[i].positionName)
		if(regExp.test(kun.msg[i].positionName)){
			searchlist.push(kun.msg[i])
		}
	}	
	res.json(
			searchlist
		);
})
//注册*************************************************************
app.post('/appRegister',function(req,res){

		res.json(
			{msg:'没有数据库'}
			)
})


var userlists=[
		{username:"xiaoming",pwd:"1"},
		{username:"1",pwd:"1"},
		{username:"laike",pwd:"1"}
	]

//登录*************************************************************
app.post('/appmimaLogin',function(req,res){
	req.body.username
	let _user='';
	for(let i=0,len=userlists.length;i<len;i++){
		if(req.body.username==userlists[i].username){
			if(req.body.pwd==userlists[i].pwd){
				_user=userlists[i].username
			}
		}
	}

	res.json({
		'user':_user
	})

})



//职位详情*************************************************************

app.post("/appcustomizedP",function(req,res){

	let _wordId=req.body.wordId;
	var _index=0;
	for(let i=0,len=kun.msg.length;i<len;i++){
		if(_wordId==kun.msg[i].positionId){
			_index=i
		}
	}
	res.json(
			kun.msg[_index]
		);
})

//全部职位*************************************************************
app.post("/appworkLists",function(req,res){
	console.log(req.body)
	let _page=req.body.page*5
	let nowkun=kun.msg.slice(0,_page)
	res.json(
		nowkun
	); 
})
//提示职位*************************************************************

app.post('/appzhiwei',function(req,res){
		res.json(
				tishizhiwei
			)	
})
