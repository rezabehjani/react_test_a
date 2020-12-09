import React from 'react';
import './App.css';
import './style.css';
import Img from './img/Relaxinghome-rafiki.svg';

class Test extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="box-top">
         <div className="text">   
            <h1>روز بخیر!</h1><br></br>
             <h1>شنبه     1399/7/26      07:38  ق.ظ</h1><br></br>
             <h1>+18 سانتی گراد</h1><br></br>
             </div>
             <div> <img src={Img} width="200px"></img></div>
          </div>
       );
    }
 }
 export default Test;