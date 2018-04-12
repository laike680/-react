import React,{Component} from 'react';
import './workList.css';
import axios from 'axios';


class WorkList extends Component{
  constructor(){
    super();
  this.handleworklist=this.handleworklist.bind(this);
  };


handleworklist(e){
   let positionid=e.target.parentNode.dataset.positionid||e.target.parentNode.parentNode.parentNode.dataset.positionid||e.target.parentNode.parentNode.dataset.positionid
    if(!positionid){
      return
    }
     axios.post("/appcustomized",{wordId:positionid})
    .then((data)=>{    
       this.props.history.push('/customized',data.data)
    })
}
 // **************************
  render(){
        let _lists=this.props.msg.map(function(elem,i){
        return (
               <li  key={i} className="worklist-item" data-positionid={elem.positionId} data-companyid={elem.companyId}>
                          <img src={"https://static.lagou.com/"+elem.companyLogo} className="worklist-logo" />
                          <div className="worklist-desc">
                              <h4 className="worklist-title">{elem.companyName}</h4>
                              <p className="worklist-info">
                                  <span className="worklist-pos">
                                     {elem.positionName}[{elem.city}]
                                  </span>
                                  <span className="worklist-salary">{elem.salary}</span>
                              </p>
                              <p className="worklist-time">{elem.createTime}</p>
                        </div>
                  </li>
                  )
       })
    return(
      <div onClick={this.handleworklist}>
          {_lists}
     </div>
      )
  }


}

export default WorkList