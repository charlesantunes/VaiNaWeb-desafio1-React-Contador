import React, { Component } from 'react';
import './App.css';

export default class App extends Component{
state = {
  
  msg:"Boa tarde",
  num:0
};

add = () => {
    this.setState({msg: "Boa noite"}&&{
        num: this.state.num+1
      }
    );
}
decrease = () => {
  if (this.state.num > 0) {
    this.setState(
      {
        msg: "Boa noite"
      }&&{
        num: this.state.num-1
      }
    );
  }
}

  render(){
    return(
      <>
        <section className='card'>
          <div>
            <img src='./img.jpg' alt='falta imagem' ></img>
          </div>
          <div className='msg'>
            <h2>{this.state.msg}</h2>
            <h1>{this.state.num}</h1>
            <button onClick={this.add}> + </button>
            <button onClick={this.decrease}> - </button>
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
