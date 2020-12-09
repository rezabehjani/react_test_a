
import './App.css';
import './style.css';
import Test from './test1';
import Test3 from './test3';
import Test2 from './test2';
import Sidebar from './sidebar';
import Chart from './chart';
import Test4 from './test4';
import Test5 from './test5';
import Test6 from './test6';
import Test7 from './test7';

function App() {
  return (
    <div className="main">
      
    <div className="size">
    <div className="line-chart"> <Chart/> </div>
    <div className="A-section"> 
        <Test6/>
        <Test5/>
        <Test4/>
     </div>
     <div className="A-footer">
       <Test7/>
      </div>
     
     </div>

      <div className="content-top">
      <Test/>
      <Test3/>
      <Test2/>
      </div>

      <div className="Sidebar">  <Sidebar/> </div>
      
     </div>
      
    
  );
}

export default App;
