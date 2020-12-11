import React from 'react';
// import Test4 from './test4';
import './test6.css';
import Img from '../../../asset/img/senario-m.svg';
class Test6 extends React.Component {
   constructor(props){
      super(props);
      
   }
    render() {

       return (
          <div className="Blue-sec">
             <div className="text-blue">
                <b className="txt">سناریو اجرا شده</b>
                <span className="txt">صبح - ۰۷:۱۵</span>
                <b className="txt">سناریو در حال اجرا</b>
                <span className="txt">بخش موزیک - ۱۷:۰۰</span>
             </div>
             <img src={Img} className="img"></img>
          </div>

       );
    }
 }
 export default Test6;