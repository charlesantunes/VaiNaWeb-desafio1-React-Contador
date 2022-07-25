import React, { Component } from 'react';
import './App.css';

import ryu0 from './assets/ryu0.jpg';
import ryu1 from './assets/ryu1.jpg';
import ryu2 from './assets/ryu2.jpg';
import ryu3 from './assets/ryu3.jpg';
import ryu4 from './assets/ryu4.jpg';
import ryu5 from './assets/ryu5.jpg';
import ryu6 from './assets/ryu6.jpg';
import ryu7 from './assets/ryu7.jpg';
import ryu8 from './assets/ryu8.jpg';
import ryu9 from './assets/ryu9.jpg';
import ryu10 from './assets/ryu10.gif';

export default class App extends Component{
state = {
  num:0,
  img: ryu0
};

increase = () =>{ 
  if (this.state.num < 10) {
    this.setState({num: this.state.num+1})
  }
  
  if(this.state.num === 0){
    this.setState({img:ryu0})
  }
  if(this.state.num === 1){
    this.setState({img:ryu1})
  }
  if(this.state.num === 2){
    this.setState({img:ryu2})
  }
  if(this.state.num === 3){
    this.setState({img:ryu3})
  }
  if(this.state.num === 4){
    this.setState({img:ryu4})
  }
  if(this.state.num === 5){
    this.setState({img:ryu5})
  }
  if(this.state.num === 6){
    this.setState({img:ryu6})
  }
  if(this.state.num === 7){
    this.setState({img:ryu7})
  }
  if(this.state.num === 8){
    this.setState({img:ryu8})
  }
  if(this.state.num === 9){
    this.setState({img:ryu9})
  }
  if(this.state.num === 10){
    this.setState({img:ryu10})
  }
}

decrease = () => {
  if (this.state.num > 0) {
    if(this.state.num === 0){
    this.setState({img:ryu0})
  }
  if(this.state.num === 1){
    this.setState({img:ryu1})
  }
  if(this.state.num === 2){
    this.setState({img:ryu2})
  }
  if(this.state.num === 3){
    this.setState({img:ryu3})
  }
  if(this.state.num === 4){
    this.setState({img:ryu4})
  }
  if(this.state.num === 5){
    this.setState({img:ryu5})
  }
  if(this.state.num === 6){
    this.setState({img:ryu6})
  }
  if(this.state.num === 7){
    this.setState({img:ryu7})
  }
  if(this.state.num === 8){
    this.setState({img:ryu8})
  }
  if(this.state.num === 9){
    this.setState({img:ryu9})
  }
  if(this.state.num === 10){
    this.setState({img:ryu10})
  }
  
    this.setState({num: this.state.num-1})} 
  }

  render(){
    return(
      <>
        <section className='card'>
          <h1>Contador do Street Fighter</h1>
          <div className='imagem'>
            <img src={this.state.img} alt="testeando"/>

          </div>
          <div className='msg'>
            <h2>{this.state.num}</h2>
            <button className="decrease" onClick={this.decrease}> - </button>
            <button className="increase" onClick={this.increase}> + </button>
          </div>
        </section>
                
      </>
    )
  }
}






// import logo from './logo.svg';
// import './App.css';

// function App() {
//   return (
//     <div className="App">
//       <header className="App-header">
//         <img src={logo} className="App-logo" alt="logo" />
//         <p>
//           Edit <code>src/App.js</code> and save to reload.
//         </p>
//         <a
//           className="App-link"
//           href="https://reactjs.org"
//           target="_blank"
//           rel="noopener noreferrer"
//         >
//           Learn React
//         </a>
//       </header>
//     </div>
//   );
// }

// export default App;
