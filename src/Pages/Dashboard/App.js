
import './App.css';
import './style.css';
import Test from '../../components/Home/morning day/test1';
import Map from '../../components/Home/map/map';
import Test3 from '../../components/Home/quick access/test3';
import Test2 from '../../components/Home/quick access/test2';
import Sidebar from './sidebar/sidebar';
import Setting from '../../components/Home/setting/stting';
import Chart from '../../components/Home/chart/chart';
import Test4 from './A-section/green box/test4';
import Test5 from './A-section/orange box/test5';
import Test6 from './A-section/blue box/test6';
import Test7 from './A-footer/test7';
import Meno from '../../components/Home/meno/meno';



function App() {
  return (
    <div className="main">

       <div className="Sidebar"><Sidebar/> </div>

      
      <div className="content-top">
      <div className="setting2">
        <Meno/>
      </div>
      <Test/>
      <Map/>
      <Test3/>
      <Test2/>
      </div>


    <div className="size">
      <div className="setting">
        <Setting/>
      </div>
    <div className="line-chart">
       <Chart/>
        </div>
    <div className="A-section"> 
        <Test6/>
        <Test5/>
        <Test4/>
     </div>
     <div className="A-footer">
       <Test7/>
      </div>
     </div>

     </div>
      
    
  );
}

export default App;
