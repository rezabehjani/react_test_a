import React from 'react';
import './App.css';
import './style.css';
import Img from './img/lamp3.svg';
import Img2 from './img/tv.svg';
import Img3 from './img/lamplight.svg';
import Img4 from './img/socket.svg';
import Img5 from './img/household.svg';
import Img6 from './img/del-icon.svg';

class Test2 extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="box-botton">
            <div className="icon">
             <div className="x"> <img src={Img6}className="del-icon" ></img><img src={Img} className="size-icon"></img></div>
             <div className="x"> <img src={Img6}className="del-icon" ></img><img src={Img2} className="size-icon"></img></div> 
             <div className="x"> <img src={Img6}className="del-icon" ></img><img src={Img3} className="size-icon"></img></div> 
             <div className="x"> <img src={Img6}className="del-icon" ></img><img src={Img4} className="size-icon"></img></div> 
             <div className="x"> <img src={Img6}className="del-icon" ></img><img src={Img5} className="size-icon"></img></div> 
            </div>
            </div>
       );
    }
 }
 export default Test2;