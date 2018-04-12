import React,{Component} from 'react';
import './city.css'

class Citys extends Component{   
  constructor(){
       super();
       this.state={
        cityhot:[{city:'北京',code:'bj'},{city:'上海',code:'sh'},{city:'广州',code:'gz'},{city:'深圳',code:'sz'},{city:'成都',code:'cd'}],
        cityA_F:[{city:'澳门',code:'am'},{city:'保定',code:'bd'},{city:'北海',code:'bh'},{city:'北京',code:'bj'},{city:'包头',code:'bt'},{city:'长春',code:'cc'},{city:'成都',code:'cd'}]
       }   
       this.cityNumber=this.cityNumber.bind(this);
       this.handleOK=this.handleOK.bind(this);
     }


cityNumber(arry){
    let _cityA_F=[];
     let len=arry.length;
     let i=0;
     while(i<len){
        _cityA_F.push(arry.slice(i,i+3));
        i=i+3;
     }
     let citys=_cityA_F.map(function(arry,x){ 
          let midcity=arry.map(function(val,y){
            return <div className="citytd" key={y} data-code={val.city}>{val.city}</div>
          })
        return  <div className="citytr" key={x}>{midcity}</div>
     })      
   return  citys
}


handleOK(e){  
     let selfRecords=JSON.parse(localStorage.getItem("self"))||{};
      selfRecords.didian=e.target.dataset.code;
     localStorage.setItem("self",JSON.stringify(selfRecords));
     this.props.history.push("/self/selfmian");
  }


// ************
render(){     
      let afCity=this.cityNumber(this.state.cityA_F);
      let hotCity=this.cityNumber(this.state.cityhot);

  return(          
        <div onClick={this.handleOK} className="cityBox"> 
          <div className="cityItemhead">热门城市</div>
          <div className="cityItem">      
            {hotCity}
          </div> 
          <div className="cityItemhead">A-F</div> 
          <div className="cityItem">    
            {afCity}
          </div>
           <div className="cityItemhead">A-F</div> 
          <div className="cityItem">    
            {afCity}
          </div>
           <div className="cityItemhead">A-F</div> 
          <div className="cityItem">    
            {afCity}
          </div>
           <div className="cityItemhead">A-F</div> 
          <div className="cityItem">    
            {afCity}
          </div>
        </div>

      )
  }

}

export default Citys
