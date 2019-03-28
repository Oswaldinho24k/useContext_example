import React, { useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Nav from './components/Nav';
import Menu from './components/Menu';
import { MenuProvider } from './context/MenuContext'
import { UserProvider, UserContext } from './context/UserContext'
import Login from './components/Login';

export default function App() {

  return <div>
    <UserProvider>
      <MenuProvider>
        <Nav />
        <Menu />
      </MenuProvider>
      <Login />
    </UserProvider>

  </div>
}