import React from 'react'
import NavigationBar from '../NavigationBar/NavigationBar'
import Home from '../Home/Home.js'
import './Main.css';
import { Outlet } from 'react-router-dom';

function Main() {
  return (
    <div className='backgroundImage'>
    <NavigationBar></NavigationBar>
    <Outlet></Outlet>
    
    </div>
  )
}

export default Main