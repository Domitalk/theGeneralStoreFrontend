import React from 'react';
import logo from './logo.svg';
import './App.css';
import StoreMainContainer from './containers/StoreMainContainer'
import 'bootstrap/dist/css/bootstrap.min.css'

function App() {
  return (
    <div>
      <header>
       
        {<StoreMainContainer />}
      </header>
    </div>
  );
}

export default App;
