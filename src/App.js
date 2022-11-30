import React from "react"
import "./App.css"
import {BrowserRouter as Router, Switch, Route} from "react-router-dom"
import Header from './Header';
import Sidebar from './Sidebar';
import RecommendedVideos from './RecommendedVideos';
import './App.css';


function App() {
  return (
    <div className="app">
      <Header />
      <div className='app__page'>
        <Sidebar />
        <RecommendedVideos />
      </div>
    </div>
  );
}

export default App;
