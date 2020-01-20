import React from 'react';
import logo from './logo.svg';
import './App.css';
import StoreMainContainer from './containers/StoreMainContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <header>
       <div  className="container" >
          <div className="row">  
            <div className="col-5">column number one</div>
            <div className="col-5">column number one</div>
            <i class="fas fa-shopping-cart"></i>
          </div>
       </div>
        {/* {<StoreMainContainer />} */}
      </header>
    </div>
  );
}

export default App;
