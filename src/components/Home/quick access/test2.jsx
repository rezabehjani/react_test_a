import React from 'react';
import './quick access.css';
// import './App.css';
import Img from '../../../asset/img/devices/lamp3.svg';
import Img2 from '../../../asset/img/devices/tv.svg';
import Img3 from '../../../asset/img/devices/lamplight.svg';
import Img4 from '../../../asset/img/devices/socket.svg';
import Img5 from '../../../asset/img/devices/household.svg';
import Img6 from '../../../asset/img/devices/del-icon.svg';

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