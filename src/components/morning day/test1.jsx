import React from 'react';
// import './App.css';
import './test1.css';
import Img from '../../asset/img/Relaxinghome-rafiki.svg';

class Test extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="box-top">
         <div className="text">   
            <h1>روز بخیر!</h1><br></br><br></br>
             <h1>شنبه ۱۳۹۹/۷/۲۶  ۰۷:۳۸ ق.ظ</h1><br></br><br></br>
             <h1>+18° سانتی گراد</h1><br></br>
             </div>
             <div> <img src={Img} className="img-box"></img></div>
          </div>
       );
    }
 }
 export default Test;