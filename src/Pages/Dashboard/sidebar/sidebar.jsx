// import './img';
import React from 'react';
// import 'App.css';
import './sidebar.css';
import Dashbord from '../../../asset/img/leftSideBar/dashbord.svg';
import room from '../../../asset/img/leftSideBar/rooms.svg';
import device from '../../../asset/img/leftSideBar/Smart devices.svg';
import scenario from '../../../asset/img/leftSideBar/scenario.svg';
import Timeline from '../../../asset/img/leftSideBar/Timeline.svg';
import update from '../../../asset/img/leftSideBar/update.svg';
import recordvoice from '../../../asset/img/leftSideBar/recordvoice.svg';
import person from '../../../asset/img/leftSideBar/person.svg';
import Arrows from '../../../asset/img/leftSideBar/a.svg';
import avatar from '../../../asset/img/leftSideBar/avatar.svg';
import point from '../../../asset/img/leftSideBar/point.svg';



class Sidebar extends React.Component {

  render() {
    return (
      <div className="sidebar">
        <div className="avatar">
          <div className="top-menu">
            <img src={Arrows} className="arrow"></img>
          </div>
          <div className="avat">
            <img src={avatar} ></img>
          </div>
          <div className="name-avatar">
            <p>مجید شفیعی</p><br></br>
            <p className="Condition">مالک</p>
          </div>
        </div>

        <div className="menu">

          <div className="anchor">
            <img src={Dashbord} className="image"></img>
            <a href="" className="text-link">داشبورد</a>
          </div>

          <div className="anchor">
            <img src={room} className="image"></img>
            <a href="" className="text-link">اتاق ها</a>
          </div>

 
          <div className="anchor">
            <img src={device} className="image"></img>
            <a href="" className="text-link">وسایل هوشمند</a>
          </div>


          <div className="anchor">
            <img src={scenario} className="image"></img>
            <a href="" className="text-link">سناریو</a>
          </div>


          <div className="anchor">
            <img src={Timeline} className="image"></img>
            <a href="" className="text-link">نمودار زمانی</a>
          </div>

         
          <div className="anchor">
            <img src={update} className="image"></img>
            <a href="" className="text-link">به روز رسانی</a>
            <img src={point} className="point"></img>
          </div>

      
          <div className="anchor">
            <img src={recordvoice} className="image"></img>
            <a href="" className="text-link">دستورهای صوتی</a>
          </div>

         
          <div className="anchor">
            <img src={person} className="image"></img>
            <a href="" className="text-link">کاربران</a>
          </div>
        </div>
      </div>
    );
  }
}

export default Sidebar;