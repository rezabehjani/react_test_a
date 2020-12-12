import React from 'react';
import './setting.css';
import img1 from '../../../asset/img/setting/Icon feather-bell.svg';
import img2 from '../../../asset/img/setting/Icon ionic-md-settings.svg';
import img3 from '../../../asset/img/setting/Icon material-person.svg';


class Setting extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div>
               <img src={img1}className="icon1"></img> 
              <img src={img2} className="icon1"></img> 
              <img src={img3} className="icon1" ></img>  
          </div>
       );
    }
 }
 export default Setting;