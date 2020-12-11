import React from 'react';
import './test7.css';
import P from '../../asset/img/person1.svg';
import P2 from '../../asset/img/person2.svg';
import P3 from '../../asset/img/person3.svg';
import P4 from '../../asset/img/person4.svg';
import Blue from '../../asset/img/blue-circle.svg';
import Creat from '../../asset/img/create.svg';
class Test7 extends React.Component {
   constructor(props){
      super(props);
   
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