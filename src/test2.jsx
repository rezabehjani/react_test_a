import React from 'react';
import Test from './test1';
class Test2 extends React.Component {
   constructor(props){
      super(props);
      this.test=new Test();
   }
    render() {

       return (
          <div>
             <Test/>
             <button onClick={this.test.show}>show</button>
             <h1>{this.test.sum(2,2)}</h1>
             <br/>
          </div>

       );
    }
 }
 export default Test2;