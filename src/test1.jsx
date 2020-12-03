import React from 'react';


class Test extends React.Component {
   constructor(props){
      super(props);
      const name='mhbobe';
   }
    
      sum=(m,n) =>
      {
         console.log(m+n)
         return m+n
      }
      dive=(a,b) =>
      {
         console.log(a/b)
         return a/b
      }

      show=()=>
      {
         console.log('hello');
      }
     
  
    render() {
       
       return (
          <div>
             <h1>welcome to my site</h1>
          </div>
       );
    }
 }
 export default Test;