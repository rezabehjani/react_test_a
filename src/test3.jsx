import React from 'react';
import './App.css';
import './style.css';
import Img from './img/edit-icon.svg';


class Test3 extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="box-center">
          <div>دسترسی سریع</div>
        <button className="edit">ویرایش<img src={Img}></img></button>
          </div>
       );
    }
 }
 export default Test3;