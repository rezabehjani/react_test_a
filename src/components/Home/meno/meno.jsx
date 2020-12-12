import React from 'react';
import './meno.css';
import img1 from '../../../asset/img/setting/Icon feather-bell.svg';
import img2 from '../../../asset/img/setting/Icon ionic-md-settings.svg';
import img3 from '../../../asset/img/setting/Icon material-person.svg';


class Meno extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="meno">
               <img src={img1}className="icon1"></img> 
              <img src={img2} className="icon1"></img> 
              <img src={img3} className="icon1" ></img>  
          </div>
       );
    }
 }
 export default Meno;