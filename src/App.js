import React from 'react';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import NavBar from './components/NavBar';
import backgroundH from './assets/background.gif'
import Products from './components/Products'
import logo2 from './assets/logo2.gif'

function App() {
  return (
    <main className="App" style={{
      minHeight: "100vh",
      width: "100%",
      overflowX: "hidden",
      overflowY: "hidden",
      background: "url(" + backgroundH + ")",
      backgroundSize: "cover", 
    }}>
        <NavBar />
      <div className='rowC'>

        <Products />

        <div className='sticky'>
          <img className='logo2' src={logo2} alt="logo2" style={{
            width: "350px"
          }}/>
        </div>

      </div>

    </main>
  );
}

export default App;
