import React from 'react';
// import './App.css';
import './map.css';
import map from '../../asset/img/map.svg';

class Map extends React.Component {
   constructor(props){
      super(props);
     
   }
    render() {
       
       return (
          <div className="map">
              <img src={map} className="map-box"></img> 
          </div>
       );
    }
 }
 export default Map;