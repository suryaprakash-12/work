import React from 'react'
import Nav from './Nav'
import Home from './components/Home'
import './style.css';
import Main from './components/Main';

export default function App() {
  return (
    <div className='bg1'>
      <div className='header'>
      <Nav/>
    </div>
    <Home/>
    <br/><br/>
    <Main/>
    </div>
  )
}

