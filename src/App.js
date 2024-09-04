import React, {useState} from 'react';
import './App.css';
import Main from './Components/Main';
import Sidebar from './Components/Sidebar';
import TopNav from './Components/TopNav';

function App() {
  return (
    <div className="App">
      <TopNav/>

      <div className="app-body">
      <Sidebar/>
      <Main/>
      </div>
    </div>
  );
}

export default App;
