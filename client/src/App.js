import './App.css';
import Navbar from './navbar.js'
import {BrowserRouter as Router, Switch, Route} from 'react-router-dom';
import Home from './home.js'
import Ammo from './ammo.js';
import Keys from './keys.js';
import Maps from './maps.js';




function App() {

  return (
    <div className="App">
      {/* MAIN PAGE */}

      <Router>
        <div className="main-interface-section">
          {/* HEADER */}
          <div id='header'>
            <h1 className='heading'>Welcome, PMC.</h1>
            <h3 className="sub-heading">What're you looking for?</h3>
          </div>

          {/* MAIN CONTENT */}
          <Navbar />
        </div>
        <Switch>
          <Route path="/ammo" component={Ammo}/>
          <Route path="/keys" component={Keys}/>
          <Route path="/maps" component={Maps}/>
        </Switch>
      </Router>

      <Home />


      
    </div>
  );
}

export default App;
