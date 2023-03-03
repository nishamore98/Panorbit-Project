import * as React from 'react';
import './style.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import LandingPage from './components/LandingPage';
import Profile from './components/Profile';
import Posts from './components/Posts';
import Gallery from './components/Gallery';
import ToDo from './components/ToDo';

export default function App() {
  const [userInfo, setUserInfo] = React.useState(null)
  function getUserInfo(data) {
    setUserInfo(data)
    console.log(data)
  }
  return <BrowserRouter>
  <Routes>
    <Route path="/" element={<LandingPage getUserInfo={getUserInfo}/>}/>
      <Route path="/User/Profile"  element={<Profile userInfo={userInfo}/>} />
      <Route path="/User/Posts" element={<Posts />} />
      <Route path="/User/Gallery" element={<Gallery/>} />
      <Route path="/User/ToDo" element={<ToDo/>} />
  </Routes>
</BrowserRouter>
}
