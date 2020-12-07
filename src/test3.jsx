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
        
        <button className="edit"><img src={Img}></img>ویرایش</button>
        <div>دسترسی سریع</div>
           
          </div>
       );
    }
 }
 export default Test3;