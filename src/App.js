import './App.css';


import React, { Component } from 'react'
import Navbar from './components/Navbar';
// import NewsItem from './components/NewsItem';
import { News } from './components/News';
export default class App extends Component {
  render() {
    return (
      <>
      <Navbar/>
      <div className="container my-3">
      <News />
      </div>
    
      </>
      
    
    )
  }
}