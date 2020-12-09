import React from 'react';
import Test4 from './test4';
import './App.css';
import './style.css';
import P from './img/person1.svg';
import P2 from './img/person2.svg';
import P3 from './img/person3.svg';
import P4 from './img/person4.svg';
import Blue from './img/blue-circle.svg';
import Creat from './img/create.svg';
class Test7 extends React.Component {
   constructor(props){
      super(props);
      this.test=new Test4();
   }
    render() {

       return (
          <div className="foot">
              <div className="div-img">
                  <img src={P} className="img-foot"></img>
                  <p>امیر</p>
              </div>
              <div className="div-img">
                  <div>
                  <img src={P2} className="img-foot"></img>
                  <img src={Blue} className="img-blue-circle"></img>
                  <img src={Creat} className="img-create"></img>
                  </div>
                  <p>سارا</p>
              </div>
              <div className="div-img">
                  <img src={P4} className="img-foot"></img>
                  <p>محمد</p>
              </div>
              <div className="div-img">
                  <img src={P3} className="img-foot"></img>
                  <p>مامان</p>
              </div>
          </div>

       );
    }
 }
 export default Test7;