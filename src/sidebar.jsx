// import './img';
import React from 'react';
import './App.css';
import './style.css';
import Dashbord from './img/dashbord.svg';
import room from './img/rooms.svg';
import device from './img/Smart devices.svg';
import scenario from './img/scenario.svg';
import Timeline from './img/Timeline.svg';
import update from './img/update.svg';
import recordvoice from './img/recordvoice.svg';
import person from './img/person.svg';
import Arrows from './img/a.svg';
import avatar from './img/avatar.svg';
import point from './img/point.svg';



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

        <div className="y">
          <div className="anchor">
            <img src={Dashbord} className="image"></img>
            <a href="" className="text-link">داشبورد</a>
          </div></div>

          <div className="y">
          <div className="anchor">
            <img src={room} className="image"></img>
            <a href="" className="text-link">اتاق ها</a>
          </div></div>

          <div className="y">
          <div className="anchor">
            <img src={device} className="image"></img>
            <a href="" className="text-link">وسایل هوشمند</a>
          </div></div>


          <div className="y">
          <div className="anchor">
            <img src={scenario} className="image"></img>
            <a href="" className="text-link">سناریو</a>
          </div></div>


          <div className="y">
          <div className="anchor">
            <img src={Timeline} className="image"></img>
            <a href="" className="text-link">نمودار زمانی</a>
          </div></div>

          <div className="y">
          <div className="anchor">
            
           
            <img src={update} className="image"></img>
            <a href="" className="text-link">به روز رسانی</a>
            <img src={point} className="point"></img>
          </div></div>

          <div className="y">
          <div className="anchor">
            <img src={recordvoice} className="image"></img>
            <a href="" className="text-link">دستورهای صوتی</a>
          </div></div>

          <div className="y">
          <div className="anchor">
            <img src={person} className="image"></img>
            <a href="" className="text-link">کاربران</a>
          </div></div>
        </div>
      </div>
    );
  }
}

export default Sidebar;