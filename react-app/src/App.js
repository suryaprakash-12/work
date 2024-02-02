import React from 'react'
import "animate.css/animate.min.css";
import Nav from './Nav'
import Home from './components/Home'
import './style.css';
import Main from './components/Main';
import Contact from './components/Contact';

export default function App() {
  return (
    <div className='bg1'>
      <div className='header'>
      <Nav/>
    </div>
    <Home/>
    <br/><br/>
    <Main/>
    <br/><br/>
    <Contact/>
    </div>
  )
}

